import { combineReducers } from "redux";
import usersReducer from "./user_reducer";
import eventsReducer from "./events_reducer"
import likesReducer from "./likes_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    events: eventsReducer,
    likes: likesReducer
})

export default entitiesReducer