# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api do
    devise_for :users, defaults: { format: :json }, controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
    }
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :posts
    end
  end

  root 'app/frontend#home'

  namespace :app do
    get '*path', to: 'frontend#index'
  end
end
