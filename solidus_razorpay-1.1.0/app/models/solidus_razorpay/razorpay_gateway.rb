module SolidusRazorpay
  class RazorpayGateway < ::Spree::PaymentMethod
    preference :key_id, :string
    preference :key_secret, :string
    preference :merchant_name, :string
    preference :merchant_description, :text
    preference :merchant_address, :string
    preference :theme_color, :string, default: '#F37254'

    def supports?(source)
      true
    end

    def provider_class
      self
    end

    def provider
      self
    end

    def auto_capture?
      true
    end

    def partial_name
      'razorpay'
    end
    alias_method :method_type, :partial_name

    def purchase(amount, transaction_details, gateway_options={})
      ActiveMerchant::Billing::Response.new(true, 'razorpay success')
    end

    def request_type
      'DEFAULT'
    end
  end
end


