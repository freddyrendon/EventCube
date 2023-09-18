import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

class LikeIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLiked: this.isEventLikedByCurrentUser(),
            likeId: null
        };

        this.handleLikeToggle = this.handleLikeToggle.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchLikes();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.likes !== this.props.likes) {
            this.setState({
                isLiked: this.isEventLikedByCurrentUser()
            });
        }
    }

    isEventLikedByCurrentUser() {
        const likedEvent = Object.values(this.props.likes).find(like =>
            like.event_id === this.props.eventId &&
            like.user_id === this.props.currentUser
        );

        if (likedEvent) {
            this.setState({ likeId: likedEvent.id });
            return true;
        }
        return false;
    }

    handleLikeToggle() {
        if (this.state.isLiked) {
            this.props.deleteLike(this.state.likeId);
        } else {
            const like = {
                user_id: this.props.currentUser,
                event_id: this.props.eventId
            };
            this.props.createLike(like);
        }
    }

    render() {

        const likesForThisEvent = Object.values(this.props.likes).filter(
            like => like.event_id === this.props.eventId
        );

        const likeCount = likesForThisEvent.length;

        return (
            <div>
                <button onClick={this.handleLikeToggle} className="button-icon like-button">
                    {this.state.isLiked
                        ? <FontAwesomeIcon icon={solidHeart} style={{ color: "red" }} />
                        : <FontAwesomeIcon icon={regularHeart} style={{ color: "#007bff" }} />
                    }
                </button>

                <p>{likeCount} {likeCount === 1 ? "Like" : "Likes"}</p>
            </div>
        );
    }
   
}

export default withRouter(LikeIndex);
