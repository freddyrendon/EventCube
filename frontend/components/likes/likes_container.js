import { connect } from 'react-redux';
import LikeIndex from './likes_index';
import { fetchLikes, fetchLike, createLike, deleteLike } from '../../actions/like_action';
import { fetchEvents } from '../../actions/event_action';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
    likes: state.entities.likes,
    events: state.entities.events
});

const mdp = (dispatch) => ({
    fetchLikes: () => dispatch(fetchLikes()),
    fetchLike: likeId => dispatch(fetchLike(likeId)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchEvents: () => dispatch(fetchEvents())
})


export default connect(msp, mdp)(LikeIndex);