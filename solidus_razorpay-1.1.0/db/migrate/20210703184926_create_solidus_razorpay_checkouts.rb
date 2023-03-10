class CreateSolidusRazorpayCheckouts < ActiveRecord::Migration[6.0]
  def change
    create_table :solidus_razorpay_checkouts do |t|
      t.string :order_id
      t.string :razorpay_payment_id
      t.string :status
      t.string :payment_method
      t.string :card_id
      t.string :bank
      t.string :wallet
      t.string :vpa
      t.string :email
      t.string :contact

      t.timestamps
    end
  end
end
