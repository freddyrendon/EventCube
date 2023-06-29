import { connect } from "react-redux";
import { createEvent, clearEventErrors } from "../../actions/event_action";
import { logout } from "../../actions/session";
import CreateEvent from "./create_form_event";

const mSTP = state => ({
    event: { event_title: '', event_body: '', event_start_date: '', event_end_date: '', event_start_time: '', event_end_time: '', location: '', photoUrl: null },
    // currentUser: state.entities.users[state.session.id],
    currentUser: state.session.currentUser.id,
    errors: state.errors.events
});

const mDTP = dispatch => ({
    createEvent: event => dispatch(createEvent(event)),
    logout: () => dispatch(logout),
    clearEventErrors: () => dispatch(clearEventErrors())
});

export default connect(mSTP, mDTP)(CreateEvent)