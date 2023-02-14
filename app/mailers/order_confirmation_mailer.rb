class OrderConfirmationMailer < Spree::BaseMailer
    def confirm_email(order, resend = false)
        @order = order
        @store = @order.store
        subject = "Order confirmation ##{order.number}"
  
        mail(to: @order.email, bcc: bcc_address(@store), from: from_address(@store), subject: subject)
    end
end
