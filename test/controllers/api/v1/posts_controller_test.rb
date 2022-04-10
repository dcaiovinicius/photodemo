# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    class PostsControllerTest < ActionDispatch::IntegrationTest
      setup do
        @created_user = create(:user)

        @post = build(:post)
      end

      test 'when does not have a valid token' do
        get api_v1_posts_url

        assert_includes(@response.body, 'You need to sign in or sign up before continuing.')

        assert_response :unauthorized
      end

      test 'GET posts' do
        auth_headers = fetch_user_with_token(@created_user)

        get api_v1_posts_url, headers: auth_headers

        assert_response :success
      end

      test 'GET post' do
        auth_headers = fetch_user_with_token(@created_user)

        get api_v1_posts_url, headers: auth_headers

        assert_response :success
      end

      test 'should create post' do
        auth_headers = form_data(@created_user)

        assert_difference('Post.count', 1) do
          post api_v1_posts_url,
               params: build_post, headers: auth_headers
        end
      end

      private

      def build_post
        { post: { title: @post.title, description: @post.description, raw_photo: @post.raw_photo } }
      end
    end
  end
end
