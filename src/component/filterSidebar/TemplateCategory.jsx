import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TemplateCategory = () => {
    const filters = [
        "Category", "Price", "On Sale", "Sales", "Rating", "Date Added", "Compatible With"
    ]

    return (
        <div className='template-category-container'>
            {filters.map((filter) => (
                <div className='template-category-title'>
                    <h5>{filter}</h5>
                    <ArrowForwardIosIcon />
                </div>
            ))}
        </div>
    )
}

export default TemplateCategory