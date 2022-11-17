const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
    title: {type: String, required: true},
    city: {type: String,required: true},
    country: {type: String, required: true},
    desc: {type: String,required: true},
    portfolios: [
        {
            portfolio: [
                {
                    type: {type: String, required:true},
                    plink: {type: String, required:true}
                }
            ]        
        }
    ]
});


export default mongoose.models.AboutUser || mongoose.model("AboutUser", AboutSchema);