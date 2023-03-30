const mongoose = require('mongoose');
var CryptoJS = require("crypto-js");

// const bcrypt= require('bcrypt');
// const jwt= require('jsonwebtoken');
// const dotenv = require("dotenv");

// dotenv.config();


const UserSchema = new mongoose.Schema({
    role: { type: String },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    about: {
        title: { type: String },
        gender: { type: String },
        dob: { type: String },
        city: { type: String },
        country: { type: String },
        portfolios: [{
            linkType: { type: String },
            portfolioLink: { type: String }
        }],
        description: { type: String }
    },
    academic: {
        universityName: { type: String },
        major: { type: String },
        startingYear: { type: String },
        endingYear: { type: String },
        obtainedCgpa: { type: String },
        totalCgpa: { type: String },
        learning: { type: String }
    },
    experience: {
        cName: { type: String },
        cDomain: { type: String },
        jobTitle: { type: String },
        startingDate: { type: String },
        endingDate: { type: String },
        responsibities: { type: String },
    },
    yearsOfExperience: { type: String },
    openToWorkingAs: [{ type: String }],
    skills: [{
        skill: { type: String },
        percent: { type: Number }
    }],
    preferences: {
        jobMode: [{ type: String }],
        selectedCountries: [{ 
            name: {type: String },
            country: {type: String }
    }],
        jobCategory: [{ type: String }]
    },
    jobsApplied: [{
        job: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job',
            required: true
        },
        status: {
            type: String,
            enum: ['applied', 'invited', 'inInterview', 'feedback']
        },
        matchPercent: {
            type: String
        }
    }]
});

// hashing password before saveing on save function call
UserSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = CryptoJS.AES.encrypt(this.password, process.env.SECRET_KEY).toString();
    }
    next();
});


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


// const candidates = await Candidate.find({ jobsApplied: { $elemMatch: { job: jobId, status: 'invited' } } });
// const candidates = await Candidate.find().populate('jobsApplied.job');
//find count of applied, invited, or interviewed

// const jobId = '6074f4a251c85a2c8c2c1b44'; // replace with the ID of the job you want to calculate totals for

// const result = await Job.aggregate([
//   { $match: { _id: mongoose.Types.ObjectId(jobId) } },
//   { $lookup: { from: 'candidates', localField: '_id', foreignField: 'jobsApplied.job', as: 'candidates' } },
//   { $unwind: '$candidates' },
//   { $unwind: '$candidates.jobsApplied' },
//   { $group: { _id: '$candidates.jobsApplied.status', count: { $sum: 1 } } }
// ]);

// console.log(result);


export default mongoose.models.User || mongoose.model("User", UserSchema);