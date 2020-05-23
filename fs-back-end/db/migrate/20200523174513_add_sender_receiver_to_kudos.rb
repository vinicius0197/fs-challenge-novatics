class AddSenderReceiverToKudos < ActiveRecord::Migration[6.0]
  def change
    add_column :kudos, :sender_id, :integer
    add_column :kudos, :recipient_id, :integer
  end
end
