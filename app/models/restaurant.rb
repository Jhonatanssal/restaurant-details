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
    return 0 unless reviews.count.positive?

    reviews.average(:score).round(1).to_f
  end
end
