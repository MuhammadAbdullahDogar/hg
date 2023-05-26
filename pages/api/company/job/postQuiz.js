import Job from "../../../../models/Job";
import connectDb from "../../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {        
        const { _id, quiz } = req.body;
        let u = await Job.findByIdAndUpdate( {_id },{quiz});
        res.status(200).json({ status: "success" });

    }
    else {
        res.status(422).json({ status: "error" });
    }
}

export default connectDb(handler);
