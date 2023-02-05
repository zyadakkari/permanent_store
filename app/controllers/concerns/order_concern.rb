require 'spree/order'

module OrderConcern
    extend ActiveSupport::Concern

  included do
    helper_method :current_order
  end

  def current_order
    @order ||= Spree::Order.find_or_initialize_by(guest_token: cookies.signed[:guest_token], state: "cart")
  end


end
  