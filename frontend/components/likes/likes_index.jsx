import React from "react";
import { withRouter } from "react-router-dom";

class LikeIndex extends React.Component{
    constructor(props) {
        super(props)
    }

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


    render(){
        // debugger
        return(
            <div>
                <button onClick={this.handleLike}> Like_index </button>
            </div>
        )
    }

}

export default withRouter(LikeIndex);