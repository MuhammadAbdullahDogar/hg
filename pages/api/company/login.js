import User from "../../../models/Company";
import connectDb from "../../../middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == "POST") {

        const { email, password, log } = req.body;

        if (!email || !password) 
            return res.status(400);
        
        // checking if email exists
        const userExist = await User.findOne({ email });
        
        if (!userExist) 
            return res.status(401);
        else {
            if (log === 'auto')
                return res.status(200).json({ user: userExist });

            // match password if email exisits
            const isMatch = password === CryptoJS.AES.decrypt(userExist.password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);

            if (!isMatch) 
                return res.status(401).json({ mesage: "Invalid details" });
            else 
                return res.status(200).json({ user: userExist });
        }
    }
    else 
        res.status(400).json({ error: "fail request" });
}
export default connectDb(handler);