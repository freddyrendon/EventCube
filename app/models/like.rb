# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  event_id   :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_likes_on_event_id  (event_id)
#  index_likes_on_user_id   (user_id)
#
class Like < ApplicationRecord
    # validates :event_id, :user_id, presence: true 

    # belongs_to :user,
    # primary_key: :id,
    # foreign_key: :user_id,
    # class_name: :User

    # belongs_to :event,
    # primary_key: :id,
    # foreign_key: :event_id,
    # class_name: :Event

end
