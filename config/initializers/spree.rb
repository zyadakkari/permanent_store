# Configure Solidus Preferences
# See http://docs.solidus.io/Spree/AppConfiguration.html for details



# Solidus version defaults for preferences that are not overridden
Spree.load_defaults '3.2.5'

Spree.config do |config|
  # Core:
  # Default currency for new sites
  config.currency = "EGP"
  

  # Spree.config do |config|
  #   config.supported_currencies = %w[EUR EGP]
  # end

  # from address for transactional emails
  config.mails_from = "infopermanence@gmail.com"


  config.address_requires_state = false
  # config.use_combined_first_and_last_name_in_address = false


  # Uncomment to stop tracking inventory levels in the application
  # config.track_inventory_levels = false

  # When set, product caches are only invalidated when they fall below or rise
  # above the inventory_cache_threshold that is set. Default is to invalidate cache on
  # any inventory changes.
  # config.inventory_cache_threshold = 3

  # Configure adapter for attachments on products and taxons (use ActiveStorageAttachment or PaperclipAttachment)
  config.image_attachment_module = 'Spree::Image::ActiveStorageAttachment'
  config.taxon_attachment_module = 'Spree::Taxon::ActiveStorageAttachment'

  # Defaults
  # Permission Sets:

  # Uncomment and customize the following line to add custom permission sets
  # to a custom users role:
  # config.roles.assign_permissions :role_name, ['Spree::PermissionSets::CustomPermissionSet']

  # Admin:

  # Custom logo for the admin
  # config.admin_interface_logo = "logo/solidus.svg"

  # Gateway credentials can be configured statically here and referenced from
  # the admin. They can also be fully configured from the admin.
  #
  # Please note that you need to use the solidus_stripe gem to have
  # Stripe working: https://github.com/solidusio-contrib/solidus_stripe
  #
  # config.static_model_preferences.add(
  #   Spree::PaymentMethod::StripeCreditCard,
  #   'stripe_env_credentials',
  #   secret_key: ENV['STRIPE_SECRET_KEY'],
  #   publishable_key: ENV['STRIPE_PUBLISHABLE_KEY'],
  #   server: Rails.env.production? ? 'production' : 'test',
  #   test_mode: !Rails.env.production?
  # )
end



Spree::Backend::Config.configure do |config|
  config.locale = 'en'

  # Uncomment and change the following configuration if you want to add
  # a new menu item:
  #
  # config.menu_items << config.class::MenuItem.new(
  #   [:section],
  #   'icon-name',
  #   url: 'https://solidus.io/'
  # )

  # Custom frontend product path
  #
  # config.frontend_product_path = ->(template_context, product) {
  #   template_context.spree.product_path(product)
  # }
end

Spree::Api::Config.configure do |config|
  config.requires_authentication = true
end

Spree::Auth::Config[:registration_step] = false


Spree.user_class = "Spree::LegacyUser"

# Rules for avoiding to store the current path into session for redirects
# When at least one rule is matched, the request path will not be stored
# in session.
# You can add your custom rules by uncommenting this line and changing
# the class name:
#
# Spree::UserLastUrlStorer.rules << 'Spree::UserLastUrlStorer::Rules::AuthenticationRule'

# if Rails.env.production?
#   attachment_config = {
#     s3_credentials: {
#       access_key_id:     ENV['AWS_ACCESS_KEY_ID'],
#       secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
#       bucket:            ENV['S3_BUCKET_NAME']
#     },

#     storage:        :s3,
#     s3_headers:     { 'Cache-Control' => 'max-age=31557600' },
#     s3_protocol:    'https',
#     bucket:         ENV['S3_BUCKET_NAME'],
#     url:            ':s3_domain_url',

#     styles: {
#       mini:     '48x48>',
#       small:    '100x100>',
#       product:  '240x240>',
#       large:    '600x600>'
#     },

#     path:           '/:class/:id/:style/:basename.:extension',
#     default_url:    'noimage/:style.png',
#     default_style:  'product'
#   }

#   attachment_config.each do |key, value|
#     Spree::Image.attachment_definitions[:attachment][key.to_sym] = value
#   end
# end

# Replace 'EGP' with the ISO currency code you want to use
Money::Currency.register({
  :priority            => 1,
  :iso_code            => "EGP",
  :iso_numeric         => "818",
  :name                => "Egyptian Pound",
  :symbol              => "ج.م", 
  :subunit             => "Piastre",
  :subunit_to_unit     => 100,
  :symbol_first        => true,
  :decimal_mark        => ".",
  :thousands_separator => ","
})
