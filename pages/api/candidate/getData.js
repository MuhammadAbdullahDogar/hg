import User from "../../../models/User";
import connectDb from "../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == "POST") {
        const { id } = req.body;


        if (!id) {
            return res.status(400).json({ error: "Please fill data" });
        }

        // checking if email exists
    // console.log(id);

        const userExist = await User.findOne({ _id:id });
        // console.log(userExist);
        // print details of user
        // console.log(userExist);
        const {fname , lname , email ,phone} = userExist;


        if (!userExist) {
            res.status(400).json({ mesage: "Invalid details" });
        }
        else {
            res.status(200).json({ message: "Success!",userExist });
        }

    }
    else {
        res.status(400).json({ error: "fail request" });
    }
}

export default connectDb(handler);