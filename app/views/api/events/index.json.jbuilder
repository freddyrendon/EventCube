# json.events do 
    @events.each do |event|
        json.set! event.id do
            json.partial! 'api/events/event', event: event
        #extract!
        end
    end
# end 
