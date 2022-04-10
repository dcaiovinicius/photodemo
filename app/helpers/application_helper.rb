# frozen_string_literal: true

module ApplicationHelper
  def include_svg(filename)
    File.open("app/assets/images/#{filename}") do |file|
      raw file.read
    end
  end
end
