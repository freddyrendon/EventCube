# == Schema Information
#
# Table name: events
#
#  id               :bigint           not null, primary key
#  event_body       :text             not null
#  event_capacity   :integer          not null
#  event_end_date   :date             not null
#  event_end_time   :time             not null
#  event_start_date :date             not null
#  event_start_time :time             not null
#  event_title      :string           not null
#  location         :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  category_id      :integer          not null
#  host_id          :integer          not null
#
# Indexes
#
#  index_events_on_category_id  (category_id)
#  index_events_on_event_title  (event_title)
#  index_events_on_host_id      (host_id) UNIQUE
#  index_events_on_location     (location)
#
require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
