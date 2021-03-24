class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :score
end
