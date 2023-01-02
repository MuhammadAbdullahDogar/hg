import { verify } from "jsonwebtoken";
var Cookies = require("cookies");


const handler = async (req,res) => {

    try{

        const cookies = new Cookies(req, res)
        // Get a cookie
        const token= cookies.get('JWT_Token')
        
        const data=verify(token,process.env.SECRET_KEY_JWT);
        
        const id =data._id;
        
        res.status(200).json({ id: id });
    }
    catch (err){
        res.status(500).json({err: err});
    }
                


}

export default handler;