import React, { useEffect, useState } from "react";

function EventIndex(props) {

    // const [events, setEvents] = useState([]);
    // console.log(props)
    useEffect(() => { props.fetchEvents() }, [])
    // useEffect(() => { props.fetchLikes() }, [])


   
    const events = props.events.map(event => { 
        return <div className="events-loco" key={event.id}
            onClick={() => { window.location.href = `/#/events/${event.id}` }}>
                <img className="momo-pic" src="https://www.djtimes.com/wp-content/uploads/2021/08/electric-zoo-music-festival-reveals-set-times-for-2021-dj-times.jpg" alt="" />
            <div className="momo">
                {event.event_title}
                <br />
                 {event.location}
                 <br />
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