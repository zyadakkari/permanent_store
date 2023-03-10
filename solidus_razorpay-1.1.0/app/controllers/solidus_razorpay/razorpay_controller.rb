module SolidusRazorpay
  class RazorpayController < Spree::StoreController

    skip_before_action :verify_authenticity_token

    def create
      response_status = SolidusRazorpay::OrderDecorator.process_razorpayment(razorpay_params, order)
      if response_status == 'captured'
        order.next!
        @message = I18n.t('spree.order_processed_successfully')
        @current_order = nil
        flash.notice = I18n.t('spree.order_processed_successfully')
        flash['order_completed'] = true
        @error = false
        @redirect_path = spree.order_path(order)
      else
        order.update_attribute(:payment_state, 'failed')
        @error = true
        @message = 'There was an error processing your payment'
        @redirect_path = spree.checkout_state_path(order.state)
      end
    rescue Spree::Core::GatewayError, StateMachine::InvalidTransition => ge
      error_message = ge.message
      puts "error_message: #{error_message}"
    end

    private

    def razorpay_params
      params.permit(:payment_method_id, :razorpay_payment_id)
    end

    def order
      @order ||= current_order
    end
  end
end
