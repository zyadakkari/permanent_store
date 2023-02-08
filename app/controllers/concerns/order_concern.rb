require 'spree/order'

module OrderConcern
    extend ActiveSupport::Concern

  included do
    helper_method :current_order_bag
  end

  include Spree::Core::ControllerHelpers::Order

  # def current_order_bag(*args)
  #   if controller_name != "carts" && controller_name != "checkouts"
  #     if Spree::Order.any?
  #       @order_store ||= Spree::Order.find_or_initialize_by(guest_token: cookies.signed[:guest_token], state: "cart")
  #     end
  #   end
  # end
  def current_order_bag(*args)
    @order = current_order(build_order_if_necessary: true)
    authorize! :edit, @order, cookies.signed[:guest_token]
    # if params[:id] && @order.number != params[:id]
    #   flash[:error] = t('spree.cannot_edit_orders')
    #   redirect_to edit_cart_path
    # end
  end


end
  