import Company from "../../../models/Company";
import connectDb from "../../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const {userData} = req.body
        let u = new Company({
            role: userData.role,
            cname: userData.fname,
            domain: userData.lname,
            email: userData.email,
            phone: userData.phone,
            password: userData.password
        })
        const user = await u.save();
        res.status(200).json({ success: "success", user });

    }
    else
        res.status(422).json({ error: "fail request signup" });
}

export default connectDb(handler);