import { CLEAR_EVENTS, RECEIVE_EVENT, RECEIVE_EVENTS, REMOVE_EVENT } from "../actions/event_action";


const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EVENTS:
            return Object.assign({}, state, action.events);
        case RECEIVE_EVENT:
            return Object.assign({}, state, { [action.event.id]: action.event });
        case REMOVE_EVENT:
            let newState = Object.assign({}, state);
            delete newState[action.eventId];
            return newState;
        case CLEAR_EVENTS:
            return {};
        default:
            return state;
    }
}

export default eventsReducer;