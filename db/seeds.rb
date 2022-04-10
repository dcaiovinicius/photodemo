# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

created_user = User.find('2bafb9db-687a-46e4-952d-624ef742f75b')

post = Post.new({ title: FFaker::Lorem.phrase, description: FFaker::Lorem.phrase, user: created_user })

post.raw_photo.attach(io: File.open('app/assets/images/images.jpeg'), filename: "#{SecureRandom.hex}.jpg",
                      content_type: 'image/jpeg')

post.save
