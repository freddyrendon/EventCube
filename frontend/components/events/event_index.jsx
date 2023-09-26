import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Likes from '../likes/likes_container';

function EventIndex(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(8);

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const searchTerm = query.get('search');

    const eventsToDisplay = searchTerm ?
        props.events.filter(event => event.event_title.toLowerCase().includes(searchTerm.toLowerCase())) :
        props.events;

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = eventsToDisplay.slice(indexOfFirstEvent, indexOfLastEvent);

    useEffect(() => {
        props.fetchEvents();
    }, []);


    const currentEventsComponent = currentEvents.map(event => (
        <div className="events-loco" key={event.id}
            onClick={() => { window.location.href = `/#/events/${event.id}` }}>
            <img className="momo-pic" src={event.photoUrl} alt="" />
                {/* <Likes className="like-index" eventId={event.id} /> */}
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

    function goToNextPage() {
        setCurrentPage(prevPage => prevPage + 1);
    }

    function goToPreviousPage() {
        setCurrentPage(prevPage => prevPage > 1 ? prevPage - 1 : prevPage);
    }


    const renderPaginationControls = (
        <div className="pagination-controls">
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage}</span>
            <button onClick={goToNextPage} disabled={currentPage === Math.ceil(eventsToDisplay.length / eventsPerPage)}>Next</button>
        </div>
    );


    return (
        <div className="events-index-container">
            <div className="index-header"></div>
            <div className="index-panels-container">
                <div className="index-panels-wrapper">
                    <div className="default-wrappa">
                        {currentEventsComponent}
                    </div>
                    {renderPaginationControls}
                </div>
            </div>
        </div>
    );

}

export default EventIndex;