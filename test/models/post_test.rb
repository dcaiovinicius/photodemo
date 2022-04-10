# frozen_string_literal: true

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  setup do
    @post = build(:post)

    @post.raw_photo
  end

  test 'should be a valid post' do
    assert @post.valid?
  end

  test 'invalid post without title' do
    @post.title = nil

    assert_not @post.valid?
  end

  test 'when post has a photo' do
    assert @post.raw_photo.attached?
  end

  test 'when the post does not have a photo' do
    post = Post.new

    assert_not post.raw_photo.attached?
  end
end
