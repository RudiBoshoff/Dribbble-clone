class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :shot

  validates :response , presence: true, length: { maximum: 200 }
end
