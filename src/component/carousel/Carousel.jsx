import React from 'react'

const Carousel = () => {
    return (
        <div className='carousel-container'>
            <img alt='' className='carousel-backgroundimage' src={require("../../assets/component/carousel/image1.jpg")} />
            <div className='carousel-text-box'>
                <h1>Innovation by Design, Development by Passion.</h1>
                <p>
                    Tell us your ideas, we will turn your dream into reality
                </p>
            </div>
        </div>
    )
}

export default Carousel