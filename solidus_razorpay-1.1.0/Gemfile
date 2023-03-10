source "https://rubygems.org"

gem 'razorpay'
gem 'solidus', github: 'solidusio/solidus'

gem 'sassc-rails'

group :test do
  gem 'sqlite3'
  gem 'rspec-rails'
  gem 'ffaker'
  gem 'factory_bot_rails'
  gem 'database_cleaner'
  gem 'spree_extension'
  gem 'spree_frontend'
  gem 'rails-controller-testing'
  gem 'byebug'
  gem 'spree'
  unless ENV['WITHOUT_SPREE_AUTH_DEVISE'] == 'true'
    gem 'spree_auth_devise'
  end
  gem 'coffee-rails'
end

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

# Specify your gem's dependencies in solidus_razorpay.gemspec
gemspec
