class CreateKudos < ActiveRecord::Migration[6.0]
  def change
    create_table :kudos do |t|
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
