# frozen_string_literal: true

Spree::Core::Engine.routes.draw do
  post '/api/initialize_checkout', to: '/solidus_pay_mob/api/checkout#index', as: 'paymob_initialize_checkout'
end
