import React from "react";
import { withRouter } from "react-router-dom";

class LikeIndex extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            isLiked: false
        }

        // this.handleLike = this.handleLike.bind(this);
        // this.handleLike = this.handleUnLike.bind(this)

    }

    // if currentuser = likes[array].userID
    // iterate eventid to match currentevent
    // iterate userid to match currentevent
    // set state to true 


    componentDidMount(){
        window.scrollTo(0,0)
        this.props.fetchLikes()
    }




    handleLike = () => {
        const like = {
            user_id: this.props.currentUser,
            event_id: parseInt(this.props.match.params.eventId)
        }
        this.props.createLike(like)
    }

    handleUnLike(likeId){
        this.props.deleteLike(likeId)
    }


    render(){
        debugger
        return(
            <div>
                <button onClick={this.handleLike}> Like </button>
                <button onClick={this.handleUnLike}> UnLike </button>

            </div>
        )
    }

}

export default withRouter(LikeIndex);