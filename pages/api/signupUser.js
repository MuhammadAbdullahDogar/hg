import User from "../../models/User";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res)=> {
    if(req.method == 'POST'){
        console.log(req.body);
        const {fname , lname , email , phone , password } = req.body;
        let u = new User({fname , lname , email , phone , password });

        await u.save();
        res.status(200).json({success: "sucess"});

    }
    else {
        res.status(422).json({error: "fail request signup"});
    }
    // let users= await User.find();
    // res.status(200).json({users})
}

export default connectDb(handler);


// fname: {type: String, required: true},
// lname: {type: String, required: true},
// email: {type: String, required: true},
// password: {type: String, required: true}