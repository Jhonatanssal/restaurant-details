class Restaurant < ApplicationRecord
  # ---------------- Associations ------------------
  has_many :reviews

  # ------------------ Callbacks -------------------
  before_create :slugify

  # ------------------- Methods --------------------
  def slugify
    self.url = name.parameterize
  end

  def score
    reviews.average(:score).round(2).to_f
  end
end
