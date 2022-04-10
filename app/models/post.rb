# frozen_string_literal: true

class Post < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :user

  has_one_attached :raw_photo

  validates :title, presence: true

  validates :raw_photo,
            presence: true,
            blob: {
              content_type: %w[image/heic image/heif image/jpeg image/png image/web],
              size_range: 1..(10.megabytes)
            }

  def url_photo
    return url_for(raw_photo) if raw_photo.attached?
  end
end
