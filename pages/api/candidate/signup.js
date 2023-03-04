import User from "../../../models/User";
import connectDb from "../../../middleware/mongoose";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";



const handler = async (req, res) => {
    if (req.method == 'POST') {
        // console.log(req.body);
        const { fname, lname, email, phone, password } = req.body;
        let u = new User({ fname, lname, email, phone, password });

        const user = await u.save();


        // try{

        //     const ress = await signIn('credentials', {
        //         ...credential,
        //         redirect: false
        //     })
        //     console.log("errrrr");

        // }
        // catch(err){
        //     console.log(err);
        // }

        // const result = await NextAuth(req, res, {
        //     // Set the sign-up flag to true
        //     signUp: true,
      
        //     // Pass the user's credentials to the signIn function
        //     credentials: {
        //       email: email,
        //       password: password,
        //     },
        //   });


        res.status(200).json({ success: "sucesss" });


        // var token = sign({ _id: user._id }, process.env.SECRET_KEY_JWT, { expiresIn: process.env.JWT_EXPIRE_TIME });
        // const serialised = serialize("JWT_Token", token);


        // res.setHeader("Set-Cookie", serialised);

    }
    else {
        res.status(422).json({ error: "fail request signup" });
    }
}

export default connectDb(handler);
