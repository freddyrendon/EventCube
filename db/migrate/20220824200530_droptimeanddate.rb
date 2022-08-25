class Droptimeanddate < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :event_start_date
    remove_column :events, :event_end_date
    remove_column :events, :event_start_time
    remove_column :events, :event_end_time

    add_column :events, :event_start_date, :string
    add_column :events, :event_end_date, :string
    add_column :events, :event_start_time, :string
    add_column :events, :event_end_time, :string

  end
end
