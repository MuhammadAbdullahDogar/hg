import Company from "../../../models/Company";
import connectDb from "../../../middleware/mongoose";


const handler = async (req, res)=> {
    if(req.method == 'POST'){
        // console.log(req.body);
        
        let u = new Company({
            cname: req.body.fname,
            domain: req.body.lname,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        })
        console.log("company");
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
