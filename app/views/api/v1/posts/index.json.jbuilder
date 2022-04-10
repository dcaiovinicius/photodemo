# frozen_string_literal: true

json.array! @posts do |post|
  json.id post.id
  json.title post.title
  json.description post.description
  json.raw_photo post.url_photo
  json.user do
    json.email post.user.email
  end
end
