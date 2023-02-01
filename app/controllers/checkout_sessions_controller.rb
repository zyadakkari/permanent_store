# frozen_string_literal: true

class CheckoutSessionsController < CheckoutBaseController
  layout false

  def new
    @user = Spree::User.new
  end
end
