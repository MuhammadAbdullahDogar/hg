const mongoose = require('mongoose');
var CryptoJS = require("crypto-js");

// const bcrypt= require('bcrypt');
// const jwt= require('jsonwebtoken');
// const dotenv = require("dotenv");

// dotenv.config();


const CompanySchema = new mongoose.Schema({
    cname: {type: String, required: true},
    domain: {type: String,required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: Number,required: true},
    password: {type: String,required: true},
    about:{
        foundingDate: { type: String },
        city: { type: String},
        country: { type: String },
        portfolios: [{
            linkType: { type: String},
            portfolioLink: { type: String }
        }],
        statement: { type: String },
        description: { type: String }
    },
    notableWork:[{
        recognizedBy: {type: String},
        natureOfWork: {type: String},
        yearOfAchievement: {type: String},
        linkToRecognition: {type: String},
        description: {type: String},
    }],
    culture: { type: String}
});

CompanySchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = CryptoJS.AES.encrypt(this.password, process.env.SECRET_KEY).toString();
    }
    next();
});


// // hashing password before saveing on save function call
// registerSchema.pre('save', async function(next) {
//     if(this.isModified('password')){
//         this.password = await bcrypt.hash(this.password,12);
//     }
//     next();
// });


// registerSchema.methods.generateAuthToken = async function(){
//     try{
//         const SECRET_KEY=process.env.SECRET_KEY;
//         let token = jwt.sign({_id:this._id}, SECRET_KEY);
//         this.tokens = this.tokens.concat({token: token});
//         await this.save();

//         return token;
//     }catch(err){
//         console.log(err);
//     }
// }


// const User = mongoose.model('user', UserSchema);

// module.exports =User;

// mongoose.models = {};
export default mongoose.models.Company || mongoose.model("Company", CompanySchema);