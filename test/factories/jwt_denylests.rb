# frozen_string_literal: true

FactoryBot.define do
  factory :jwt_denylest do
    jti { 'MyString' }
    exp { '2022-04-30 12:56:58' }
  end
end
