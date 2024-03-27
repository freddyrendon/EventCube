# json.events do 
    @events.each do |event|
        json.set! event.id do
            json.partial! 'api/events/event', event: event
        #extract!
        end
    end
# end 

# json.array! @events do |event|
#   json.extract! event, :id, :event_title, :event_body, :location, :event_start_date, :event_start_time

#   if event.photo.attached?  # Assuming 'photo' is the name of the attachment
#     json.attachment do
#       json.url url_for(event.photo)  # Render the URL of the attached photo
#     end
#   end
# end
