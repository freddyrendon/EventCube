import { combineReducers } from "redux";
import usersReducer from "./user_reducer";
import eventsReducer from "./events_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    events: eventsReducer
})

export default entitiesReducer