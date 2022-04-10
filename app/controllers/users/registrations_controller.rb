# frozen_string_literal: true

module Users
  class RegistrationsController < Devise::RegistrationsController
    include RackSessionFixController

    respond_to :json

    private

    def respond_with(_resource, _opts = {})
      register_success && return if resource.persisted?

      render json: { errors: resource.errors }, status: :unprocessable_entity
    end

    def register_success
      render json: {
        message: 'Signed up sucessfully.',
        user: current_user
      }, status: :ok
    end
  end
end
