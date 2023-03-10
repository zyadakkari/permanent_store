SolidusRazorpay::Engine.routes.draw do
  resources :razorpay, only: :create
end
