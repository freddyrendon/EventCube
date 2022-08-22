import React from "react"


const Home = () => {


    return (
        <div className="fullbleed-header">
            <div className="eds-layout">
                <div className="eds-layout-body">
                    <div className="fullbleed-header">
                        <svg className="home-headertag" xmlns="http://www.w3.org/2000/svg">
                            <img src={window.eventbrite} alt="eventbrite" className="img-header" />
                            <p></p>
                            <p></p>
                        </svg>
                        <p className="hidden">Now is your time</p>
                        <div className="feed-fullbleed-header-container">
                            <a href="/d"></a>
                            <div className="feed-fullbleed-headertag">
                                <input class="event-pic-button" type="button" value="Find your next event" href="/"/>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="banner">
                <div className="banner-header">Do events help you find connection?</div>
                <span>
                    Help us understand how attending events contributes to building social connection by taking a short survey before and after
                    your next event. <a target="_blank" href="https://ugeorgia.ca1.qualtrics.com/jfe/form/SV_agHQ1wIV6ExRUwu">Start here</a>
                    </span>        
            </div>
            <div className="home-index-container">
                <div className="location-container">
                <div className="text-location">
                    <h2>Popular in</h2>
                </div>
                <div className="location">
                        <select>
                            <option value="actual value 1">New York</option>
                            <option value="actual value 2">Brooklyn</option>
                            <option value="actual value 3">Queens</option>
                        </select>
                </div>
                </div>
            </div>
                       <div className="tabs-container">
                <div className="tabs">
                    <ul class="tabs-events">
                        <li class="interactive">All</li>
                        <li>For You</li>
                        <li>Online</li>
                        <li>Today</li>
                        <li>This Weekend</li>
                    </ul>
                </div>
            </div>

            <div className="category-tiles">
                <h3 class="category-title">Check out trending categories</h3>
                <div class="tile-group">
                    <a href="/">Music</a>
                    <a href="/">Performing & Visual Arts</a>
                    <a href="/">Travel & Outdoor</a>
                    <a href="/">Health</a>
                    <a href="/">Hobbies</a>
                    <a href="/">Business</a>
                    <a href="/">Food & Drink</a>
                    <a href="/">Sports & Fitness</a>
                </div>

            </div>


        </div>
        
    )
}

export default Home;