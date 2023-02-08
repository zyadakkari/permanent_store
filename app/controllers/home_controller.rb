# frozen_string_literal: true

class HomeController < StoreController
  helper 'spree/products'
  respond_to :html

  def index
    @searcher = build_searcher(params.merge(include_images: true))
    @products = @searcher.retrieve_products
  end

  def about
  end

  def customer_service
  end

  def privacy_policy
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

  def permanent_archive
  end

  


end
