import React from "react";
// import likes_container from "./likes_container";

class LikeIndex extends React.Component{

    constructor(props) {
        super(props)
        console.log(this.state)
    }


    render(){
        return(
            <div>
                <button> Like </button>
            </div>
        )
    }

}

export default LikeIndex;