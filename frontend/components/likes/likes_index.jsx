import React  from "react";
import { withRouter } from "react-router-dom";

class LikeIndex extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            isLiked: false,
            likeId: this.props.eventId,
            deletelike: null
        }


    

        this.handleLike = this.handleLike.bind(this);
        this.handleUnLike = this.handleUnLike.bind(this);
        // this.findLinkeId = this.findLinkeId.bind(this);

    }


    // if currentuser = likes[array].userID
    // iterate eventid to match currentevent
    // iterate userid to match currentevent
    // set state to true 


    componentDidMount(){
        window.scrollTo(0,0);
        this.props.fetchLikes();
        // this.findLinkeId();
    }

    
    
    handleLike = () => {
        console.log("like triggered")
        const like = {
            user_id: this.props.currentUser,
            // event_id: parseInt(this.props.match.params.eventId)
            event_id: this.props.eventId
        }
        this.props.createLike(like)
        // debugger
        console.log(this.props.likes)
    }

    //create a function that itterates through all the likes. 
    // if the objects, key of evenetId === this.props.eventId then set it to this.state.likeId

    // findLinkeId() {
    //     const getlikes = Object.values(this.props.likes)

    //         for (let i = 0; i < getlikes.length; i++) {
    //         // console.log(getlikes[i])
    //         // console.log(this.props.currentUser)
    //             if ((getlikes[i].event_id === this.props.eventId) && (this.props.currentUser === getlikes[i].user_id)) {
    //                 this.state.deletelike = getlikes[i].id
    //                 console.log(getlikes[i].id)
    //             }
    //         }
        
    // }
    
    handleUnLike(){
        const getlikes = Object.values(this.props.likes)

        for (let i = 0; i < getlikes.length; i++) {
            // console.log(getlikes[i])
            // console.log(this.props.currentUser)
            if ((getlikes[i].event_id === this.props.eventId) && (this.props.currentUser === getlikes[i].user_id)) {
                console.log(getlikes[i].id)
                console.log("hello")
                // this.state.deletelike = getlikes[i].id
                this.props.deleteLike(getlikes[i].id)
                console.log("delete and handle unlike")
            }
        }
    }


    // update thunk for unlike

    render(){
        // debugger
        return(

            <div>
                <button onClick={() => this.handleLike()}> Like </button>
                <button onClick={() => this.handleUnLike()}> UnLike </button>
                {/* <button onClick={() => this.findLinkeId()}> test </button> */}

            </div>
        )
        debugger
    }

}

export default withRouter(LikeIndex);