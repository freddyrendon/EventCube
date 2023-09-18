import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Likes from '../likes/likes_container';

function EventIndex(props) {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const searchTerm = query.get('search');

    useEffect(() => {
        props.fetchEvents();
    }, []);

    const eventsToDisplay = searchTerm ?
        props.events.filter(event => event.event_title.toLowerCase().includes(searchTerm.toLowerCase())) :
        props.events;

    const events = eventsToDisplay.map(event => (
        <div className="events-loco" key={event.id}
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
                <Likes eventId={event.id} />
            </div>
        </div>
    ));

    return (
        <div className="events-index-container">
            <div className="index-header"></div>
            <div className="index-panels-container">
                <div className="index-panels-wrapper">
                    <div className="default-wrappa">
                        {events}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventIndex;