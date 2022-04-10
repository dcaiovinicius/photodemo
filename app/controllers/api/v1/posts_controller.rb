# frozen_string_literal: true

module Api
  module V1
    class PostsController < ApiController
      before_action :authenticate_user!

      # GET /api/v1/posts
      def index
        @posts = Post.paginate(page: params[:page], per_page: 15)
      end

      # GET /api/v1/post/1dfa5a49-4ae2-409a-8452-0b8cfb3ae4bf
      def show
        @post = Post.find(params[:id])
      end

      # POST /api/v1/posts
      def create
        @post = CreatePost.call(current_user, post_params) do |action|
          action.on(:success) do
            render json: @post, status: :created
          end

          action.on(:error) do |post|
            render json: post.errors, status: :unprocessable_entity
          end
        end
      end

      private

      def post_params
        params.require(:post).permit(:title, :description, :raw_photo)
      end
    end
  end
end
