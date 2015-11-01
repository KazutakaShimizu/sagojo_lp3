source 'https://rubygems.org'

ruby "2.2.2"

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.4'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby
gem 'better_errors'
# better_errorsの画面上にirb/pry(PERL)を表示する
gem 'binding_of_caller'

# group :development, :test do
#   gem 'sqlite3'
# end
# group :production do
gem 'mysql2', "~> 0.3.13"
# end

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'pry-rails'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'
# Use Unicorn as the app server
gem 'unicorn'
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development
group :production do
  gem 'mysql2', '~> 0.3.20'
end
group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'annotate', :git => 'git://github.com/ctran/annotate_models.git'
  gem 'sqlite3'
  gem 'rspec-rails'
  gem 'rspec-its'
  gem 'rspec-mocks'
  gem 'faker', '>= 1.4.3'
end
<<<<<<< HEAD
group :test do
  gem 'factory_girl_rails', '>= 4.5.0'
  gem 'selenium-webdriver'
  gem 'capybara', '>= 2.4.4'
  gem 'cucumber-rails', '1.4.0', :require => false
  gem 'database_cleaner', github: 'bmabey/database_cleaner'
end
=======

gem 'rails_12factor', group: :production

>>>>>>> b4d3dbfd26ff05362c9e13ff19895d16edd030ae
