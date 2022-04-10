# frozen_string_literal: true

class CreatePost
  include Voltage.call

  attr_reader :params, :user

  def initialize(user, params)
    @user = user
    @params = params
  end

  def post
    @post ||= user.posts.new(params)
  end

  def call
    return emit(:error, post) unless post.valid?

    post.save!

    emit :success, user
  end
end
