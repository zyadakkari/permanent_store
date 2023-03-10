class CreateSolidusPaymobPaymentSources < ActiveRecord::Migration[7.0]
  def change
    create_table :solidus_paymob_payment_sources do |t|
      t.integer :payment_method_id
      t.string :paymob_auth_token
      t.integer :paymob_order_id
      t.string :paymob_payment_token
      t.string :currency
      t.string :status
      t.integer :amount_refunded
      t.string :refund_status
      t.boolean :captured
      t.integer :amount
      t.boolean :international
      t.string :error_code
      t.string :error_description
      t.string :error_source
      t.string :error_step
      t.string :error_reason

      t.timestamps
    end
    add_index :solidus_paymob_payment_sources, :payment_method_id
  end
end
