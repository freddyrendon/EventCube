json.extract! event, :id, :host_id, :category_id, :event_title, :event_body, :event_start_date,  :event_start_time,  :location
json.photoUrl url_for(event.photo)