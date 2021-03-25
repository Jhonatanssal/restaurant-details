# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

for i in 1..6 do
  Restaurant.create(name: "Restaurant #{i}", description: "This is the Restaurant number #{i}")
end

for i in 1..10 do
  Review.create(restaurant_id: "#{rand(1..6)}", description: "This is the review number #{i}", score: rand(1..5))
end