# frozen_string_literal: true

require 'application_system_test_case'

class AuthenticationsTest < ApplicationSystemTestCase
  setup do
    @created_user = create(:user)
  end

  test 'When the user have a valid account' do
    visit '/app/login'

    fill_in 'E-mail', with: @created_user.email
    fill_in 'Password', with: @created_user.password

    click_button 'Log In'
  end
end
