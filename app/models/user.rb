class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :shots, dependent: :destroy
  has_many :comments, dependent: :destroy

  # acts as votable setup (allows user to like a shot)
  acts_as_voter
end
