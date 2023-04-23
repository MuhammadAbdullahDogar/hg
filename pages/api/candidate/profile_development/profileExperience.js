import User from "../../../../models/User";
import connectDb from "../../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {
        const { _id, experience, openToWorkingAs, skills, yearsOfExperience, preferences } = req.body;
        let u = await User.findByIdAndUpdate({ _id }, { experience, openToWorkingAs, skills, yearsOfExperience, preferences });
        res.status(200).json({ status: "success" });
    }
    else {
        res.status(422).json({ status: "error" });
    }
}

export default connectDb(handler);
