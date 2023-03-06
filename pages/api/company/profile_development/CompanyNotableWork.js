import User from "../../../../models/Company";
import connectDb from "../../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {
        
        const { _id, notableWork, culture } = req.body;
        let newUser = { _id, notableWork, culture };
        let u = await User.findByIdAndUpdate( {_id },newUser);
        res.status(200).json({ status: "success" });
    }
    else {
        res.status(422).json({ status: "error" });
    }
}

export default connectDb(handler);
