// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'

// spree/frontend/all points to the
// `vendor/assets/javascripts/spree/frontend/all.js` file generated by
// `solidus:install`. See `setup_assets` at
// https://github.com/solidusio/solidus/blob/master/core/lib/generators/solidus/install/install_generator.rb
//= require spree/frontend/all

//= require utils
//= require checkout
//= require product
//= require cart
//= require locale_selector
//= require product_selection_component
//= require spree/frontend/solidus_paypal_commerce_platform

console.log("solidus_starter_frontend.js loaded");