class User < ApplicationRecord
  validates :username, uniqueness: true
  has_many :sent_kudos, class_name: 'Kudo', foreign_key: 'sender_id'
  has_many :received_kudos, class_name: 'Kudo', foreign_key: 'recipient_id'
  has_secure_password

  def self.update_kudos
    User.update_all(awesome_kudo: 2, grateful_kudo: 2, learned_kudo: 2)
  end
end
