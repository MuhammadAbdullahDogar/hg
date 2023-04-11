import connectDb from "../../middleware/mongoose";
import Company from "../../models/Company";
import User from "../../models/User";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { id, role } = req.body;
            let user;

            if (role === 'company')
                user = await Company.findById(id);
            else
                user = await User.findById(id);


            if (!user) {
                // If the user is not found, return a 404 status code
                return res.status(404).json({ status: "error", message: "User not found" });
            }

            res.status(200).json({ status: "success", user });
        } catch (error) {
            // If there is an error during the database query, return a 500 status code
            console.error(`Error fetching user: ${error}`);
            res.status(500).json({ status: "error", message: "Internal server error" });
        }
    } else {
        res.status(422).json({ status: "error", message: "Invalid request method" });
    }
}

export default connectDb(handler);