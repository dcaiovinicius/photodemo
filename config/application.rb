# frozen_string_literal: true

require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Dogs
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # This also configures session_options for use below
    # config.session_store :cookie_store, key: '_interslice_session'

    # Required for all session management (regardless of session_store)
    # config.middleware.use ActionDispatch::Cookies

    # config.middleware.use config.session_store, config.session_options

    # config.middleware.use ActionDispatch::Cookies
    # config.middleware.use ActionDispatch::Session::CookieStore, key: '_namespace_key'

    # config.middleware.use ActionDispatch::Cookies
    # config.middleware.use ActionDispatch::Session::CookieStore, key: '_interslice_session'

    # To disable cookies completely, use this inside application.rb:
    config.session_store :disabled

    config.active_storage.replace_on_assign_to_many = true

    Rails.application.routes.default_url_options[:host] = 'localhost:3000'

    config.api_only = true
  end
end
