  
    module SolidusPayMob
        # changed from 'SolidusSupport.payment_method_parent_class' as deprecated
        class PaymobPayment < ::Spree::PaymentMethod
            preference :paymob_key, :string
            preference :paymob_secret, :string


            # assigns the gateway class to be used
            def gateway_class
                SolidusPayMob::Gateway
            end

            # assigns the payment source to be used (the source just inherits from the solidus support class)
            def payment_source_class
                SolidusPayMob::PaymentSource
            end

            # view partial to be used
            def partial_name
                "paymob"
            end
        end
    end
