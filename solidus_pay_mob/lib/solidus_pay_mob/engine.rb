# frozen_string_literal: true

require 'solidus_core'
require 'solidus_support'
require 'solidus_pay_mob'


module SolidusPayMob
  class Engine < Rails::Engine
    include SolidusSupport::EngineExtensions

    isolate_namespace ::Spree

    engine_name 'solidus_pay_mob'

    initializer "solidus_pay_mob.add_static_preference", after: "spree.register.payment_methods" do |app|
      app.config.spree.payment_methods << 'SolidusPayMob::PaymobPayment'

      app.config.to_prepare do 
      Spree::Config.static_model_preferences.add(
          'SolidusPayMob::PaymobPayment',
          'paymob_credentials', {
              paymob_key: ENV['PAYMOB_KEY'],
              paymob_secret: ENV['PAYMOB_SECRET']
          }
      )
      end
      
      Spree::PermittedAttributes.source_attributes.concat [
          :paymob_auth_token,
          :paymob_order_id,
          :paymob_payment_token,
          :currency,
          :status,
          :amount_refunded,
          :refund_status,
          :captured,
          :amount,
          :international,
          :error_code,
          :error_description,
          :error_source,
          :error_step,
          :error_reason
      ]
    end


    initializer "solidus_pay_mob.add_model_dir_to_autoload_paths", before: :set_autoload_paths do |app|
      config.autoload_paths << "#{config.root}/lib/models"
    end

    # use rspec for tests
    config.generators do |g|
      g.test_framework :rspec
    end
  end
end
