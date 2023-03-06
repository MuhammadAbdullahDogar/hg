import Company from "../../../models/Company";
import connectDb from "../../../middleware/mongoose";

const handler = async (req, res)=> {
    if(req.method == 'POST'){
        
        let u = new Company({
            cname: req.body.fname,
            domain: req.body.lname,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        })
        await u.save();
        res.status(200).json({success: "success"});

    }
    else 
        res.status(422).json({error: "fail request signup"});
}

export default connectDb(handler);