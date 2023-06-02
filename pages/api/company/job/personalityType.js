import Job from "../../../../models/Job";
import connectDb from "../../../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { jobId, jobPersonality } = req.body;
    try {
        const updatedJob = await Job.findByIdAndUpdate(jobId,{ jobPersonality });
        res.status(200).json({ status: "success", updatedJob });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: "Unable to update job" });
    }
  } else {
    res.status(422).json({ status: "error", message: "Invalid request method" });
  }
};

export default connectDb(handler);
