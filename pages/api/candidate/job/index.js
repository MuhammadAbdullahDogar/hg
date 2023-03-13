import Job from "../../../../models/Job";
import connectDb from "../../../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const  candidateSkills  = req.body;
        const skills = candidateSkills.map(skill => skill.skill); // extract the skill names from the user's skills array

        // console.log(candidateSkills);
        try {
            // get all jobs which have atleast one candidate skill 
            const jobs = await Job.find({ skills: { $in: skills } });
            console.log("jobs");
            console.log(jobs);
            console.log("jobs");
        // res.status(422).json({ error: "fail request " });
            
            res.status(200).json({ jobs });
          } catch (error) {
            console.error(error);
            throw error;
          }
          // res.status(422).json({ error: "fail request " });
          // const job = await j.save();
    }
    else
        res.status(422).json({ error: "fail request " });
}

export default connectDb(handler);