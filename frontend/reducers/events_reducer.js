import { RECEIVE_EVENT, RECEIVE_EVENTS, REMOVE_EVENT } from "../actions/event_action";

const EventsReducer = (initialState = {}, action) => {
    Object.freeze(initialState)
    // debugger
    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.events
        case RECEIVE_EVENT:
            return Object.assign({}, initialState, { [action.event.id]: action.event })
        case REMOVE_EVENT:
            let newState = Object.assign({}, initialState)
            delete newState[action.eventId]
            return newState
        default:
            return initialState
    }
}

export default EventsReducer