class AddShotIdToComments < ActiveRecord::Migration[6.0]
  def change
    add_reference :comments, :shot, null: false, foreign_key: true
  end
end
