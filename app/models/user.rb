# frozen_string_literal: true

class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  validates :email, presence: true, uniqueness: true
  validate :password_matches_confirmation

  has_many :posts

  private

  def password_matches_confirmation
    return true if password == password_confirmation

    errors.add(:password_confirmation, I18n.t('devise.password_confirmation'))
  end
end
