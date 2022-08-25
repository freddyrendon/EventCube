import React, { useEffect } from "react";


function EventShow(props) {

    useEffect(() => console.log('hits'), []);
    useEffect(() => console.log(props), []);
    useEffect(() => props.fetchEvent(props.event.id), []);

    console.log(props.event.id)


    return (
        // console.log("hello")
        <div>egg

        </div>

    )
};

export default EventShow;