import React from 'react'
import TemplateCategory from '../component/filterSidebar/TemplateCategory'

const Templates = () => {


    return (
        <div className='templatespage'>
            <section className='templatespage-section templatespage-section-carousel'>
                <img src={require("../assets/pages/templates/carousel.jpeg")} alt='templates-carousel' />
                <h1>Check Out Our Templates</h1>
            </section>
            <section className='templatespage-section templatespage-section-topbar'>
                <div>
                    
                </div>
            </section>
            <section className='templatespage-section templatespage-section-body'>
                <TemplateCategory />
                <div className='templatespage-section-body-content'>

                </div>
            </section>
        </div>
    )
}

export default Templates