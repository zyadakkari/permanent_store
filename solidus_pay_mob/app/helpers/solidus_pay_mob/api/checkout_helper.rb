# frozen_string_literal: true

module SolidusPayMob
    module Api
        module CheckoutHelper
            def create_order(params, payment_method)
                paymob_key = payment_method.preferences[:paymob_key]
                paymob_secret = payment_method.preferences[:paymob_secret]
                gateway = SolidusPayMob::Gateway.new({ paymob_key: paymob_key, paymob_secret: paymob_secret})

                authorize_response = gateway.authorize(paymob_key)
                puts(authorize_response)
                auth_token = authorize_response.params[:paymob_auth_token]
                puts(auth_token)

                purchase_response = gateway.purchase(auth_token, params)
                puts(purchase_response)
                order_id = purchase_response.params[:paymob_order_id]
                puts(order_id)

                capture_response = gateway.capture(auth_token, paymob_order_id, params) 
                puts(capture_response)
                payment_token = capture_response.params[:paymob_payment_token]
                puts(payment_token)

                # order = Spree::Order.find(params[:orderId])



                # paymob_order = if paymob_order_id.present?
                #                 gateway.retrieve_order(paymob_order_id)
                #             else
                #                 gateway.create_order(amount, receipt, order.currency)
                #             end
                
                # order.update(paymob_order_id: paymob_order.id)
                # paymob_order
                payment_token
            end
        end
    end
end
