import React  from "react";
import { withRouter } from "react-router-dom";

class LikeIndex extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            isLiked: false,
            likeId: null
        }
    

        // this.handleLike = this.handleLike.bind(this);
        // this.handleLike = this.handleUnLike.bind(this)

    }

    // if currentuser = likes[array].userID
    // iterate eventid to match currentevent
    // iterate userid to match currentevent
    // set state to true 


    componentDidMount(){
        window.scrollTo(0,0);
        this.props.fetchLikes();
        // this.findLinkeId();8
    }

    
    
    handleLike = () => {
        const like = {
            user_id: this.props.currentUser,
            event_id: parseInt(this.props.match.params.eventId)
        }
        this.props.createLike(like)
    }

    //create a function that itterates through all the likes. 
    // if the objects, key of evenetId === this.props.eventId then set it to this.state.likeId
    // findLinkeId() {
    //     let theLikes = this.props.likes.map(like => like)
    //     for (let i = 0; i < theLikes.length; i++) {
    //         if (theLikes[i].eventId === this.props.eventId) {
    //             this.state.like = theLikes[i]._id
    //         }
    //     }
    // }
    
    handleUnLike(likeId){
        this.props.deleteLike(likeId)
    }


    render(){
        // debugger
        return(
            <div>
                <button onClick={() => this.handleLike}> Like </button>
                <button onClick={() => this.handleUnLike(this.state.likeId)}> UnLike </button>
                {/* <button onClick={() => this.findLinkeId}> test </button> */}

            </div>
        )
    }

}

export default withRouter(LikeIndex);