# frozen_string_literal: true

ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'

require 'devise/jwt/test_helpers'

module ActiveSupport
  class TestCase
    # Run tests in parallel with specified workers
    parallelize(workers: :number_of_processors)

    # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
    fixtures :all

    include FactoryBot::Syntax::Methods

    FactoryBot::SyntaxRunner.class_eval do
      include ActionDispatch::TestProcess
    end

    include Devise::Test::IntegrationHelpers

    def fetch_user_with_token(user)
      headers = { 'Accept' => 'application/json', 'Content-Type' => 'application/json' }

      Devise::JWT::TestHelpers.auth_headers(headers, user)
    end

    def form_data(user)
      headers = { 'Accept' => 'multipart/form-data' }

      Devise::JWT::TestHelpers.auth_headers(headers, user)
    end
  end
end
