import User from "../../../models/User";
import connectDb from "../../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const { role, fname, lname, email, phone, password } = req.body.userData;
        let u = new User({role, fname, lname, email, phone, password });
        const user = await u.save();
        res.status(200).json({ success: "success" , user});
    }
    else 
        res.status(422).json({ error: "fail request signup" });
}

export default connectDb(handler);