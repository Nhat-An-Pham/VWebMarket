import React from 'react'
import Carousel from '../component/carousel/Carousel'
import Reviews from "../component/reviews/Reviews"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="homepage">
      <Carousel />
      {/* Banner */}
      <section className='homepage-section homepage-section-banner'>
        <h1>Trusted by more than 30,000 customers, brands and organizations </h1>
        <div style={{ width: "10%", border: "2px #1DCDFE solid" }}></div>
      </section>
      {/* Service */}
      <section className='homepage-section homepage-section-services'>
        <h2>Our Services </h2>
        <div className='homepage-services-container'>
          <Link to="" className='homepage-services-section homepage-services-section-main'>
            <img alt='' src={require("../assets/pages/home/service-buildwebsite.jpg")} />
            <h5>Website/ Mobile Development</h5>
          </Link>
          <div className='homepage-services-section homepage-services-section-side'>
            <Link className='homepage-services-section-side-box'>
              <img alt='' src={require("../assets/pages/home/templates.jpg")}></img>
              <h5>Tons Of Templates For You To Choose</h5>
            </Link>
            <Link className='homepage-services-section-side-box'>
              <img alt='' src={require("../assets/pages/home/design.avif")}></img>
              <h5>Mobile Design / Website Design</h5>
            </Link>
          </div>
        </div>
      </section>
      {/* Reviews */}
      <section className='homepage-section homepage-section-reviews'>
        <Reviews />
      </section>
    </div>
  )
}

export default Home