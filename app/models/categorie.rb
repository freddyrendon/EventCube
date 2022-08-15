# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Categorie < ApplicationRecord
    validates :title, presence: true 

    has_many :categories,
    primary_key: :id, 
    foreign_key: :category_id, 
    class_name: :Event

end
