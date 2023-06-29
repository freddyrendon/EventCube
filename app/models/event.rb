# == Schema Information
#
# Table name: events
#
#  id               :bigint           not null, primary key
#  event_body       :text             not null
#  event_start_date :string
#  event_start_time :string
#  event_title      :string           not null
#  location         :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  category_id      :integer          not null
#  host_id          :integer
#
# Indexes
#
#  index_events_on_category_id  (category_id)
#  index_events_on_event_title  (event_title)
#  index_events_on_location     (location)
#
class Event < ApplicationRecord
    validates :event_body, :event_title, :location, :category_id, :host_id, presence: true

    has_one_attached :photo


    belongs_to :user,
    primary_key: :id, 
    foreign_key: :host_id, 
    class_name: :User

    # belongs_to :categorie, 
    # primary_key: :id, 
    # foreign_key: :category_id, 
    # class_name: :Categorie

    has_many :likes, 
    primary_key: :id, 
    foreign_key: :event_id, 
    class_name: :Like


end
