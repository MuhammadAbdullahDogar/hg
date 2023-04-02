import Job from "../../../../models/Job";
import connectDb from "../../../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == 'POST') {
    const jobIds = req.body;

    let jobs = [];

    // Loop through the array of job IDs and fetch data for each job
    for (const jobId of jobIds) {
      // console.log(jobId);
      const job = await fetchJobById(jobId);
      if (job) {
        jobs.push(job);
      }
    }

    // Return the job data as JSON
    res.status(200).json(jobs);
    
  }
  else
    res.status(422).json({ error: "fail request signup" });
}

export default connectDb(handler);


const fetchJobById = async (jobId) => {
  try {
    const job = await Job.findOne({ _id: jobId });
    if (job) {
      return job;
    } else {
      console.log('Job not found');
    }
  } catch (error) {
    console.log(`Failed to fetch job: ${error.message}`);
  }
}
