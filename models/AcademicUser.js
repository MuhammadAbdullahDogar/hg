const mongoose = require('mongoose');


const AcademicUserSchema = new mongoose.Schema({
    user_id: {type: String, required: true},
    title: {type: String, required: true},
    gender: {type: String, required: true},
    dob: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true},
    portfolios: [{
        linkType: {type: String, required: true},
        link: {type: String, required: true}
    }],
    description: {type: String, required: true}
    
});


export default mongoose.models.AcademicUser || mongoose.model("AcademicUser", AcademicUserSchema);