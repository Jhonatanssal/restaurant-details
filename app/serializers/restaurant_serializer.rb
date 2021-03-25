class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :url, :score

  has_many :reviews
end
