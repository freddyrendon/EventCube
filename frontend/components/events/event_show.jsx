import React, { useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import NavbarContainer from "../nav_bar/nav_bar_container";


function EventShow(props) {

    // let { eventId } = useParams();

    // fetchEvent(this.props.match.params.listingid)
    useEffect(() => { props.fetchEvent(props.match.params.eventId) }, []);

    // const loggingout = e => {
    //     e.preventDefault();
    //     console.log('logged out');
    //     /*
    //     running any kind of route to logging out changes current user
    //     which is a prop, use an if to return null to avoid error
    //     */
    //     // props.logout().then(()=> <Redirect to='/' />);
    //     props.logout().then(()=>props.history.push('/login'))
    // }

    const seeProps = () => {
        console.log('props', props);
        console.log('useParams', props.match.params.eventId);
    }
        console.log(props)


}

export default EventShow;
