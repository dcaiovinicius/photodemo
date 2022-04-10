class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts, id: :uuid do |t|
      t.belongs_to :user, type: :uuid, null: false, foreign_key: true
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
