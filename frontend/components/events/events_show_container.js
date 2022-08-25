import { connect } from "react-redux";
import { fetchEvent } from "../../actions/event_action";
import { logout } from "../../actions/session";
import EventShow from "./event_show";

const mSTP = (state, ownProps) => {
    return {
        event: state.entities.events[ownProps.match.params.eventId],
        currentUser: state.entities.users[state.session.id]
    }
};

const mDTP = dispatch => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(EventShow);