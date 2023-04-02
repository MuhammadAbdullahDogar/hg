import Job from "../../../../models/Job";
import Company from "../../../../models/Company";
import connectDb from "../../../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == 'POST') {
    const { title, level, type, domain, compensation, matchPercentage, description, responsibilites, skills, location, category, companyId } = req.body;
    let job = new Job({
      title, level, type, domain, compensation, matchPercentage, description, responsibilites, skills, location, category, company: companyId
    });
    try {
      const savedJob = await job.save();
      const updatedCompany = await Company.findByIdAndUpdate(companyId, { $push: { jobs: savedJob._id } }, { new: true });
      // return { savedJob, updatedCompany };
      const jobId = savedJob._id
      res.status(200).json(jobId);
    } catch (error) {
      console.error(error);
      throw error;
    }
    // const job = await j.save();
  }
  else
    res.status(422).json({ error: "fail request signup" });
}

export default connectDb(handler);