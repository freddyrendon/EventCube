import React, { useEffect, useState } from "react";
import EventPanel from "./event_index_panel";
import EventIndexPanelContainer from "./event_index_panel_container";

function EventIndex(props) {

    // const [events, setEvents] = useState([]);
    // console.log(props.events)
    useEffect(() => { props.fetchEvents() }, [])

   
    const events = props.events.map(event => { 
        return <div className="events-loco" key={event.id}
            onClick={() => { window.location.href = `/#/events/${event.id}` }}>
            <div className="momo">
                {event.event_title}
                <br />
                 {event.location}
                 <br />
                 <div>
                 </div>
                <img className="momo-pic" src="https://www.djtimes.com/wp-content/uploads/2021/08/electric-zoo-music-festival-reveals-set-times-for-2021-dj-times.jpg" alt="" />
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