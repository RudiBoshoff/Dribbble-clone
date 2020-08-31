class CreateShots < ActiveRecord::Migration[6.0]
  def change
    create_table :shots do |t|
      t.string :title
      t.text :description
      t.string :user_shot
      
      t.timestamps
    end

    add_reference :shots, :user, foreign_key: true
  end
end
