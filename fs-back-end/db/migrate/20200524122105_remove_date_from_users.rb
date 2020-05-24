class RemoveDateFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :date, :date
  end
end
