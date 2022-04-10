# frozen_string_literal: true

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  setup do
    @user = build(:user)

    sign_in @user
  end

  test 'should be a valid user' do
    assert @user.valid?
  end

  test 'invalid user without email' do
    @user.email = nil
    assert_not @user.valid?
  end

  test 'invalid user without password' do
    @user.password = nil
    assert_not @user.valid?
  end

  test 'password does not match password_confirmation' do
    @user.password_confirmation = 'otherpassword'

    @user.save
    assert_equal @user.errors.messages[:password_confirmation].to_sentence, I18n.t('devise.password_confirmation')
  end

  test 'should unique email' do
    created_user = create(:user)

    @user.email = created_user.email

    assert_not @user.valid?
  end
end
