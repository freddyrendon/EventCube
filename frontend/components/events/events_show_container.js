import { connect } from "react-redux";
import { fetchEvent, deleteEvent } from "../../actions/event_action";
import { logout } from "../../actions/session";
import { fetchLikes } from "../../actions/like_action";
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
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    fetchLikes: likeId => dispatch(fetchLikes(likeId))
});

export default connect(mSTP, mDTP)(EventShow);