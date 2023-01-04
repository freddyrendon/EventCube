class Removecolumnsfromevents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :event_end_date
    remove_column :events, :event_end_time
    remove_column :events, :event_capacity

  end
end
