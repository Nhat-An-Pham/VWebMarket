import React, { useState, useEffect } from 'react'

const Preloader = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        let timeout = setTimeout(() => setShow(true), 3000)
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <>
            {/* {show=== true && */}
                <h3>Loading ...</h3>
            {/* } */}
        </>
    )
}

export default Preloader