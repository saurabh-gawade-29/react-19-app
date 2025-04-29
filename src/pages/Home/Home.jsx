import React from 'react'
import tourImage from '../../assets/images/travel-concept-with-worldwide-landmarks-removebg-preview.png'
import "./Home.css"
const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="d-flex align-items-center wrapHeroContent">
                            <div className="heroContent">
                                <h1 className="display-3 caGap">
                                    Explore the World, One Country at a Time
                                </h1>
                                <h6 className="mb-0 caGap">
                                    Discover the history, culture and beauty of every nation. Sort, search and filter through countries to find the details you need.
                                </h6>
                                <button className="caButton caGap px-4">Start Exploring</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="d-flex align-items-center wrapHeroContent">
                            <img className="img-fluid tourImg" src={tourImage} alt="tourImage" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home