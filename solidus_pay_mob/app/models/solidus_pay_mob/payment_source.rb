# require_dependency 'solidus_paymob'

    module SolidusPayMob
        # changed this from 'SolidusSupport.payment_source_parent_class' in razor as the former is being deprecated
        class PaymentSource < Spree::PaymentSource
        end
    end