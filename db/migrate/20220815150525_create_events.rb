class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :host_id, null: false 
      t.integer :category_id, null: false 
      t.integer :event_capacity, null: false 
      t.string :event_title, null: false 
      t.text :event_body, null: false 
      t.string :location, null: false 
      t.date :event_start_date, null: false 
      t.date :event_end_date, null: false 
      t.time :event_start_time, null: false 
      t.time :event_end_time, null: false 
      t.timestamps
    end
    add_index :events, :host_id, :unique =>  true
    add_index :events, :category_id
    add_index :events, :event_title
    add_index :events, :location
    #Ex:- add_index("admin_users", "username")
  end
end
