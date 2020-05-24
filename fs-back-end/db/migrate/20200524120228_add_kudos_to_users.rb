class AddKudosToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :awesome_kudo, :integer, :default => 2
    add_column :users, :grateful_kudo, :integer, :default => 2
    add_column :users, :learned_kudo, :integer, :default => 2
  end
end
