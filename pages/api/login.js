import connectDb from "../../middleware/mongoose";
import Company from "../../models/Company";
import User from "../../models/User";
const bcrypt = require('bcrypt');


const handler = async (req, res) => {
    if (req.method == "POST") {

        const { email, password, role } = req.body;
        if (!email || !password)
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

            if (bcrypt.compareSync(password, userExist.password))
                return res.status(200).json({ user: userExist });
            else
                return res.status(401).json({ mesage: "Invalid details" });
        }
    }
    else
        res.status(400).json({ error: "fail request" });
}
export default connectDb(handler);

export async function matchPassword(plainPassword, hashedPassword) {
    try {
        const match = bcrypt.compareSync(plainPassword, hashedPassword);
        return match;
    } catch (error) {
        console.log(error);
        console.error(`Error comparing passwords: ${error}`);
        throw new Error('Error comparing passwords');
    }
}


