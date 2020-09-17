class Shot < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  validates :title, presence: true, length: { maximum: 40, minimum: 5}
  validates :description, presence: true, length: { maximum: 250, minimum: 15 }
  validates :user_shot, presence: true
  
  # carrier wave setup
  mount_uploader :user_shot, UserShotUploader

  # impressionist setup
  is_impressionable
end
