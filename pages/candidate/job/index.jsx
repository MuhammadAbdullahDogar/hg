import React from 'react'
import { getSession } from "next-auth/react"

const ShowJobs = ({jobs}) => {


    return (
        <div>ShowJobs
            
        </div>
    )
}

export default ShowJobs




export async function getServerSideProps(ctx) {

    // check session

    const session = await getSession(ctx)
    const user = session?.user?.user || null
    const res = await fetch(`${process.env.WEBSITE}/api/candidate/job`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const jobs = await res.json();
    // const jobs = JSON.stringify(data.jobs) || null;
    


    ctx.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    return {
        props: { jobs },
    }
}