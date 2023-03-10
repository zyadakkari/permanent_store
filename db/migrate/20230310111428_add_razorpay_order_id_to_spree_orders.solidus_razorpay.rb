# This migration comes from solidus_razorpay (originally 20220304063131)
class AddRazorpayOrderIdToSpreeOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :spree_orders, :razorpay_order_id, :string
  end
end
