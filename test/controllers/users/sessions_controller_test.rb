# frozen_string_literal: true

require 'test_helper'

module Users
  module V1
    class SessionsController < ActionDispatch::IntegrationTest
      setup do
        @created_user = create(:user)
      end

      test 'when login is valid' do
        post user_session_url, params: build_params(@created_user, :create)

        assert_not_nil @response.headers['Authorization']

        assert_includes(@response.body, 'You are logged in')
        assert_response :success
      end

      test 'when login is not invalid' do
        user = build(:user)

        post user_session_url,
             params: build_params(user, :build)

        assert_nil @response.headers['Authorization']

        assert_includes(@response.body, 'Invalid Email or password.')
        assert_response :unauthorized
      end

      test 'should log out' do
        auth_headers = fetch_user_with_token(@created_user)

        delete destroy_user_session_url, headers: auth_headers

        assert_includes(@response.body, 'You are logged out.')
        assert_response :ok
      end

      private

      def build_params(resource, type)
        case type
        when :build
          { user: { email: resource.email, password: resource.password,
                    password_confirmation: resource.password_confirmation } }
        when :create
          { user: { email: resource.email, password: resource.password } }
        end
      end
    end
  end
end
