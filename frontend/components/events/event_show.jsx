import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Likes from "../likes/likes_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';



function EventShow(props) {


    useEffect(() => { props.fetchEvent(props.match.params.eventId) }, []);

    

    const removeEvent = (eventId) => {
        props.deleteEvent(eventId)

    }

    if (!props.event) {
        return null;
    } else {
        return (
            <div>
                <div className="event-show-struct">
                    <div className="show-photo-container">
                        <img src={props.event.photoUrl} className="show-photo-opaque" />
                    </div>
                    <div className="show-info">
                        <div className="show-top">
                            <div className="show-photo-basics">
                                <div className="show-photo-wrapper">
                                    <img src={props.event.photoUrl}></img>
                                </div>
                                <div className="show-basics">
                                    <div className="basics-title">{props.event.event_title}</div>



                                    <div className="event-edit-button">
                                        <Link to={`/events/Editform/${props.event.id}`} className="edit-button">
                                            <FontAwesomeIcon icon={faEdit} /> Edit Event
                                        </Link>
                                    </div>

                                    <div className="event-delete-button">
                                        <button className="delete-button" onClick={() => removeEvent(props.event.id)}>
                                            <FontAwesomeIcon icon={faTrash} /> Delete Event
                                        </button>
                                    </div>

                                    <Likes eventId={props?.event?.id}/>

                                </div>

                            </div>
                            <div className="event-show-body">
                                <div className="event-show-desc">
                                    <div className="show-desc-text">
                                        <div style={{ fontWeight: '600', fontSize: '20px' }}>About this event</div>
                                        <br />
                                        <br />
                                        {props.event.event_body}
                                    </div>

                                </div>
                                <div className="event-show-details">
                                    <div className="details-column">
                                        <div className="show-date-time">
                                            Date and time
                                            <br />
                                            {props.event.event_start_date}
                                            <br />
                                            {props.event.event_start_time}
                                            <br />
                                        </div>
                                        <div className="show-location">
                                            Location
                                            <br />
                                            {props.event.location}
                                        </div>
                                  

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default EventShow;
