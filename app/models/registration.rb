# == Schema Information
#
# Table name: registrations
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  event_id   :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_registrations_on_event_id  (event_id)
#  index_registrations_on_user_id   (user_id)
#
class Registration < ApplicationRecord
    # validates :event_id, :user_id, presence: true 
    

end
