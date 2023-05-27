import connectDb from "../../middleware/mongoose";
import Company from "../../models/Company";
import User from "../../models/User";


const handler = async (req, res) => {
    if (req.method == "POST") {

        const { email, role } = req.body;
        if (!email)
            return res.status(400);

        // checking if email exists
        let userExist
        if (role === 'company')
            userExist = await Company.findOne({ email });
        else
            userExist = await User.findOne({ email });

        if (!userExist)
            return res.status(401);
        else {
            return res.status(200).json({ user: "true" });
        }
    }
    else
        res.status(400);
}
export default connectDb(handler);
