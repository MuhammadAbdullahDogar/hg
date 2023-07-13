import Job from "../../../../models/Job";
import connectDb from "../../../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(422).json({ error: 'Invalid request method' });
  }

  const { jobId } = req.body;

  if (!jobId) {
    return res.status(422).json({ error: 'Missing jobId' });
  }

  try {

    // Fetch the job by ID
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.json({ success: true, job });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default connectDb(handler);
