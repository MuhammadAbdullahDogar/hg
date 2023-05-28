import User from "../../../../models/Company";
import Job from "../../../../models/Job";
import JobUser from "../../../../models/User";
import connectDb from "../../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {

        const { _id, cname, domain, phone, about, img } = req.body;
        let newUser = { cname, domain, phone, about, img };
        let u = await User.findByIdAndUpdate({ _id }, newUser);

        const updatedJobs = await Job.updateMany(
            { company: _id },
            { $set: { 'candidates.$[].img': img, img:img } },
            { multi: true }
        );
        console.log(`${updatedJobs.nModified} jobs updated`);
        
        res.status(200).json({ status: "success" });
    }
    else {
        res.status(422).json({ status: "error" });
    }
}

export default connectDb(handler);
