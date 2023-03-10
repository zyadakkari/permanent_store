require 'bundler/gem_tasks'
require 'rspec/core/rake_task'

RSpec::Core::RakeTask.new(:spec)

task default: :spec

desc 'Generates a dummy app for testing'
task :test_app do
  ENV['LIB_NAME'] = 'solidus_razorpay'
  Rake::Task['extension:test_app'].invoke
end

require 'spree/testing_support/extension_rake'
