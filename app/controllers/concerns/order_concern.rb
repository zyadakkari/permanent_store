module OrderConcern
    extend ActiveSupport::Concern
  
    included do
      before_action :set_order, only: [:edit]
      before_action :store_guest_token
      before_action :assign_order, only: :update
    end
  
    def edit
      authorize! :edit, @order, cookies.signed[:guest_token]
      if params[:id] && @order.number != params[:id]
        flash[:error] = t('spree.cannot_edit_orders')
        redirect_to edit_cart_path
      end
    end
  
    private
  
    def set_order
      @order = current_order(build_order_if_necessary: true)
    end

    def store_guest_token
        cookies.permanent.signed[:guest_token] = params[:token] if params[:token]
      end
      
    def assign_order
        @order = current_order
        unless @order
          flash[:error] = t('spree.order_not_found')
          redirect_to(root_path) && return
        end
    end
  end
  