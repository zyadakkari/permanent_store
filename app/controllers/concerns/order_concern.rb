require 'spree/order'

module OrderConcern
    extend ActiveSupport::Concern

  included do
    helper_method :current_order_bag
  end

  def current_order_bag(*args)
    if controller_name != "carts" && controller_name != "checkouts"
      if Spree::Order.any?
        @order_store ||= Spree::Order.find_or_initialize_by(guest_token: cookies.signed[:guest_token], state: "cart")
      end
    end
  end


end
  