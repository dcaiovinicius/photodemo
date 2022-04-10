# frozen_string_literal: true

FactoryBot.define do
  factory :post do
    title { FFaker::Lorem.phrase }
    description { FFaker::Lorem.phrase }
    user { association :user }

    after(:build) do |post|
      post.raw_photo.attach(io: File.open('app/assets/images/test-image.jpg'), filename: 'test_image.png',
                            content_type: 'image/jpeg')
    end
  end
end
