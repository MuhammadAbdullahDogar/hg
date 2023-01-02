import User from "../../../models/User";
import connectDb from "../../../middleware/mongoose";
var CryptoJS = require("crypto-js");
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";


const handler = async (req,res) => {
    if(req.method == "POST") {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill data" });
        }

        // checking if email exists
        const userExist = await User.findOne({ email});

        // print details of user
        // console.log(userExist);


        if (!userExist) {
            res.status(400).json({ mesage: "Invalid details" });
        }
        else {
            console.log(userExist);
            // match password if email exisits
            const isMatch = password === CryptoJS.AES.decrypt(userExist.password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);

            if(!isMatch){
                res.status(400).json({ mesage: "Invalid details" });
            }
            else{
                
               var token = sign({_id: userExist._id}, process.env.SECRET_KEY_JWT , { expiresIn: process.env.JWT_EXPIRE_TIME });
                
            //    const serialised = serialize("JWT_Token", token, {
            //     httpOnly: true,
            //     secure: process.env.NODE_ENV !== "development",
            //     sameSite: "strict",
            //     maxAge: 60 * 60 * 24 * 30,
            //     path: "/",
            //   });
          

            const serialised = serialize("JWT_Token", token);

        
            res.setHeader("Set-Cookie", serialised);
            res.status(200).json({ message: "Success!" });
                
            }
        }

    }
    else {
        res.status(400).json({error: "fail request"});
    }
}

export default connectDb(handler);