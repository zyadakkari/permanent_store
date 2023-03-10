# SolidusRazorpay

[![Build Status](https://travis-ci.com/neerajkumar/solidus-razorpay.svg?token=hpvApXPJ3wPwF1L1F3TL&branch=master)](https://travis-ci.com/neerajkumar/solidus-razorpay)

Razorpay payment gateway integration for Solidus


## Installation

Add this line to your application's Gemfile:

```ruby
gem 'solidus_razorpay'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install solidus_razorpay

Add migrations from extension:

     $ rails g solidus_razorpay:install

Restart your server

Add new payment method with provider

     Razorpay gateway

Get **Key ID** and **Key Secret** from your razorpay sandbox account. If you don't have it you can sign up and get from
[https://dashboard.razorpay.com/#/app/keys](https://dashboard.razorpay.com/#/app/keys).

## Demo

<img src="app/assets/images/solidus-razorpay.gif" alt="Solidus Razorpay Demo" width="740" height="390" class='img-responsive'>

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/neerajkumar/solidus_razorpay. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the SolidusRazorpay project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/neerajkumar/solidus_razorpay/blob/master/CODE_OF_CONDUCT.md).
