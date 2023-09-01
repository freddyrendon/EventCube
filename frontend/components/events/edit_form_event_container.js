import { connect } from "react-redux";
import { createEvent, clearEventErrors, updateEvent } from "../../actions/event_action";
import { logout } from "../../actions/session";
import EditEvent from "./edit_form_event";

const mSTP = (state, ownprops) => ({
    event: state.entities.events[ownprops.match.params.eventId],
    // currentUser: state.entities.users[state.session.id],
    currentUser: state.session.currentUser.id,
    errors: state.errors.events,
    moe: ownprops
});

const mDTP = dispatch => ({
    createEvent: event => dispatch(createEvent(event)),
    logout: () => dispatch(logout),
    clearEventErrors: () => dispatch(clearEventErrors()),
    updateEvent: (FormData,eventId) => dispatch(updateEvent(FormData,eventId))
    
});

export default connect(mSTP, mDTP)(EditEvent)