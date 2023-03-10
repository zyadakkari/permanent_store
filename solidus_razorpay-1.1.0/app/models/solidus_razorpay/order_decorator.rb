module SolidusRazorpay::OrderDecorator

  def amount_in_paise
    (total.to_f * 100).to_i
  end

  class << self
    def prepended(base)
      base.checkout_flow do
        go_to_state :address
        go_to_state :delivery
        go_to_state :payment
        go_to_state :complete
      end
    end

    def process_razorpayment(params, order)
      setup_razorpay(payment_method(params[:payment_method_id]))
      razorpay_payment_object = Razorpay::Payment.fetch(params[:razorpay_payment_id])
      payment = payment(order, razorpay_payment_object, payment_method(params[:payment_method_id]))
      if payment_authorized?(razorpay_payment_object)
        razorpay_payment_object.capture({ amount: order.amount_in_paise })
        razorpay_payment_object = Razorpay::Payment.fetch(params[:razorpay_payment_id])
        payment.update(response_code: razorpay_payment_object.status)
        razorpay_payment_object.status
      else
        raise StandardError.new('Unable to capture payment')
      end
    end

    def payment_method(payment_method_id)
      @payment_method ||= Spree::PaymentMethod.find(payment_method_id)
    end

    def setup_razorpay(payment_method)
      Razorpay.setup(payment_method.preferences[:key_id], payment_method.preferences[:key_secret])
    end

    def payment_authorized?(razorpay_payment_object)
      razorpay_payment_object.status == 'authorized'
    end

    def payment(order, payment_object, payment_method)
      order.payments.create!(
        source: source(order, payment_object),
        payment_method: payment_method,
        amount: order.total,
        response_code: payment_object.status,
      )
    end

    def source(order, payment_object)
      SolidusRazorpay::Checkout.create(
        order_id: order.id,
        razorpay_payment_id: payment_object.id,
        status: payment_object.status,
        payment_method: payment_object.method,
        card_id: payment_object.card_id,
        bank: payment_object.bank,
        wallet: payment_object.wallet,
        vpa: payment_object.vpa,
        email: payment_object.email,
        contact: payment_object.contact,
      )
    end
  end

  private_class_method :setup_razorpay, :payment, :source, :payment_authorized?, :payment_method
end
::Spree::Order.prepend(SolidusRazorpay::OrderDecorator)
