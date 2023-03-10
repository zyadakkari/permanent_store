module SolidusPayMob
    module Api
        class CheckoutController < ApplicationController
            include SolidusPayMob::Api::CheckoutHelper
            protect_from_forgery unless: -> { request.format.json? }

            def index
                payment_method = set_payment_method
                paymob_order = create_order(params, payment_method)
                paymob_key = payment_method.preferences[:paymob_key]
                respond_to do |format|
                    format.json {
                        # 2 more params missing
                        render json: { success: true, paymobOrderId: paymob_order.id, paymobKey: paymob_key }
                    }
                end
            rescue StandardError => e
                error_message = e.to_s
                logger.error error_message
                respond_to do |format|
                    format.json { render json: { success: false } }
                end
            end

            private

            def set_payment_method
                payment_method_id = params[:paymentMethodId]
                Spree::PaymentMethod.find(payment_method_id)
            end
        end
    end
end