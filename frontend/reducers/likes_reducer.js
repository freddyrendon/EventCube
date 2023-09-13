import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE, CLEAR_LIKES } from "../actions/like_action";

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_LIKES:
            return Object.assign({}, state, action.likes);
        case RECEIVE_LIKE:
            return Object.assign({}, state, { [action.like.id]: action.like });
        case CLEAR_LIKES:
            return {};
        case REMOVE_LIKE:
            delete newState[action.likeId];
            return newState;
        default:
            return state;
    }
}

export default likesReducer;