import User from "../../models/User";
import connectDb from "../../middleware/mongoose";


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
            // match password if email exisits
            const isMatch = password === userExist.password;

            if(!isMatch){
                res.status(400).json({ mesage: "Invalid details" });
            }
            else{
                
                
                res.status(200).json({ mesage: "User exists" });
                
            }
        }

    }
    else {
        res.status(400).json({error: "fail request"});
    }
}

export default connectDb(handler);