import connectDb from '../../middleware/mongoose'

 function handler(req, res) {
    res.status(200).json({message:"connected"})
  }

  export default connectDb(handler)
  
  