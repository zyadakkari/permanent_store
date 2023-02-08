class StaticPagesController < ApplicationController
  def about
    render :about
  end

  def customer_service
    render :customer_service
  end
end
