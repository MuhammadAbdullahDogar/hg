import React from 'react'
import HiringLine from './HiringLine'
const HiringPipeline = ({ jobs }) => {
    return (
        <>

            {/* <img
                src="/Group 10972.png"
                alt="logo"
            /> */}

            {
            jobs.slice(0, 4).map(job => (
                <>
                <HiringLine job={job} />
                <br />
                </>
            ))}
        </>
    )
}

export default HiringPipeline