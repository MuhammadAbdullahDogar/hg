import User from "../../../models/User";
import connectDb from "../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {
        
        const { _id, fname, lname, phone, title, dob, city, country, description, portfolios } = req.body;
        const about ={title, dob, city, country, description , portfolios};
        let newUser = { fname, lname, phone, about };
        let u = await User.findByIdAndUpdate( {_id },newUser);
        res.status(200).json({ status: "success" });

    }
    else {
        res.status(422).json({ status: "error" });
    }
}

export default connectDb(handler);
