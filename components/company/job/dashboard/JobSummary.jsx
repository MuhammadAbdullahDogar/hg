import React from 'react'

const JobSummary = ({jobs}) => {
    const closedJobs = jobs.filter(job => job.status === 'closed');
    const openJobs = jobs.filter(job => job.status === 'open');

  return (
    <>
        <li>Center {jobs.length}</li>
        <li>Active {openJobs.length}</li>
        <li>Inactive {closedJobs.length}</li>
    </>
  )
}

export default JobSummary