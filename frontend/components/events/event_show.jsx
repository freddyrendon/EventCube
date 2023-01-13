import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Likes from "../likes/likes_container";


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
                        {/* <img src={props.event.photoUrl} className="show-photo-opaque" /> */}
                    </div>
                    <div className="show-info">
                        <div className="show-top">
                            <div className="show-photo-basics">
                                <div className="show-photo-wrapper">
                                    <img src="https://www.djtimes.com/wp-content/uploads/2021/08/electric-zoo-music-festival-reveals-set-times-for-2021-dj-times.jpg" alt="" />
                                </div>
                                <div className="show-basics">
                                    <div className="basics-title">{props.event.event_title}</div>



                                    <div className="event-edit-button">
                                        <Link to={`/events/Editform/${props.event.id}`} className="edit-button">
                                            Edit Event
                                        </Link>
                                    </div>






                                    <div className="event-delete-button">
                                        <button className="delete-button" onClick={() => removeEvent(props.event.id)}>
                                            delete Event
                                        </button>
                                    </div>

                                    {/* <div className="event-like-button">
                                        <button className="like-button" onClick={console.log(props)}> Like </button>
                                    </div> */}
                                    <Likes/>





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
