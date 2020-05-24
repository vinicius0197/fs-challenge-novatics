class AddKudoTypeToKudos < ActiveRecord::Migration[6.0]
  def change
    add_column :kudos, :kudo_type, :string
  end
end
