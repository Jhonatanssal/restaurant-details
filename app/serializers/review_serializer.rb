class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :score, :user_name, :created_at
end
