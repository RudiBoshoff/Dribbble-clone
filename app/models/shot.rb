class Shot < ApplicationRecord
  belongs_to :user
  mount_uploader :user_shot, UserShotUploader
  validates :title, presence: true
  validates :description, presence: true, length: { maximum: 250 }
  validates :user_shot, presence: true
end
