# frozen_string_literal: true

class CheckoutSessionsController < CheckoutBaseController
  layout false

  helper 'orders', 'spree/checkout'

  def new
    @user = Spree::User.new
  end
end
