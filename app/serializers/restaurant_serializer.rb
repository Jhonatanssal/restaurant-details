class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description

  has_many :reviews
end
