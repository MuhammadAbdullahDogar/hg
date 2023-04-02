import Job from "../../../../models/Job";
import Company from "../../../../models/Company";
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
    // let job = new Job({
    //     title, level, type, compensation, matchPercentage, description, responsibilites, skills, company: companyId
    // });
    // try {
    //     const savedJob = await job.save();
    //     const updatedCompany = await Company.findByIdAndUpdate(companyId, { $push: { jobs: savedJob._id } }, { new: true });
    //     // return { savedJob, updatedCompany };
    //     res.status(200).json({ success: "success" });
    //   } catch (error) {
    //     console.error(error);
    //     throw error;
    //   }
    // const job = await j.save();
    // res.status(422).json({ error: "fail request signup" });

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
