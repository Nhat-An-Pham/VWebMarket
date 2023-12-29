import React, { useState, useEffect } from 'react'

const Preloader = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        let timeout = setTimeout(() => setShow(true), 300)
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <>
            {show && <h3>Loading ...</h3>}
        </>
    )
}

export default Preloader