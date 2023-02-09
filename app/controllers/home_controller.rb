# frozen_string_literal: true

class HomeController < StoreController
  helper 'spree/products'
  respond_to :html

  def index
    @searcher = build_searcher(params.merge(include_images: true))
    @products = @searcher.retrieve_products
  end

  def permanent_archive
    @archived_products = Spree::Product.joins(:stock_items).where("spree_stock_items.count_on_hand = 0").distinct
  end
  

  def about
  end

  def customer_service
  end

  def contact_us
  end

  def faq
  end

  def terms_of_service
  end

  def contact
  end

  def shipping
  end

  def code_of_conduct
  end

  # def currency
  #   if request.put? && params[:currency].present?
  #     currency = params[:currency]
  #     if Spree::Config.available_currencies.include? currency
  #       current_order.update!(currency: currency)
  #       cookies[:currency] = currency
  #     end
  #   end

  #   redirect_to root_path
  # end
  

  


end
