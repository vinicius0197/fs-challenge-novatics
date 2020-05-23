class RemoveUserFromKudos < ActiveRecord::Migration[6.0]
  def change
    remove_reference :kudos, :user, null: false, foreign_key: true
  end
end
