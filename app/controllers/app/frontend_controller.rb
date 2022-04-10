# frozen_string_literal: true

module App
  class FrontendController < ApplicationController
    # GET /
    def home
      render layout: 'application'
    end

    # GET /login
    def index
      render layout: 'frontend', action: :index
    end
  end
end
