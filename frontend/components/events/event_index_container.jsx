import { connect } from "react-redux";
import { fetchEvents } from "../../actions/event_action";
import EventIndex from "./event_index";


const mSTP = (state, ownProps) => {
    // console.log(Object.values(state.entities.events)) 
        return {
    events: Object.values(state.entities.events)
}
};

const mDTP = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mSTP, mDTP)(EventIndex);