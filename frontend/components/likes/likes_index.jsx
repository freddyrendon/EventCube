import React from "react";
// import likes_container from "./likes_container";

class LikeIndex extends React.Component{

    state = {
        likes: false
    }

    handleClick = () => {
        this.setState({
            likes: this.state.likes = true
        })
    }


    render(){
        return(
            <div>
                <button onClick={() => {return this.state.likes = true}}> Like </button>
            </div>
        )
    }

}

export default LikeIndex;