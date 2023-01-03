import User from "../../../../models/User";
import connectDb from "../../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {
        // console.log(req.body);
        
        const { _id, academic } = req.body;
        let u = await User.findByIdAndUpdate( {_id },{academic});
        res.status(200).json({ status: "success" });

    }
    else {
        res.status(422).json({ status: "error" });
    }
}

export default connectDb(handler);
