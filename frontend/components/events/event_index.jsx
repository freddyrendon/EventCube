import React, { useEffect, useState } from "react";

function EventIndex(props) {

    // const [events, setEvents] = useState([]);
    // console.log(props)
    useEffect(() => { props.fetchEvents() }, [])
    // useEffect(() => { props.fetchLikes() }, [])


   
    const events = props.events.map(event => { 
        return <div className="events-loco" key={event.id}
            onClick={() => { window.location.href = `/#/events/${event.id}` }}>
            <img className="momo-pic" src={event.photoUrl} alt="" />
            <div className="momo">
                <div className="event_title">
                {event.event_title}
                </div>

                <div className="event_location">
                 {event.location}
                </div>

                 <div className="event_date">
                    {event.event_start_date}
                 </div>
                 <div>
                 </div>
            </div>

                 
        </div>
    });

    return <div className="events-index-container">
            <div className="index-header">
            </div>
            <div className="index-panels-container">
                <div className="index-panels-wrapper">
                    <div className="default-wrappa">
                        {events}
                    </div>
                </div>
            </div>
        </div>
}

export default EventIndex;