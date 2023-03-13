import React from 'react'
import Router from "next/router";
import { getSession } from "next-auth/react"

const PostedJobs = ({jobs}) => {

    
    console.log(jobs);

  return (
    <div>PostedJobs
        <button onClick={()=>Router.push('/job/company/PostJob')}>Add Job</button>
    </div>
  )
}

export default PostedJobs


export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)
    const user = session?.user?.user || null
  
    const res = await fetch(`${process.env.WEBSITE}/api/company/job`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user.jobs)
      });

      const jobs = await res.json();
      
    ctx.res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    )
  
    return {
      props: { jobs },
    }
  }
  