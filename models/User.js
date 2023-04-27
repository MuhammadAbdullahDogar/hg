const mongoose = require('mongoose');
import * as bcrypt from 'bcrypt';

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
            name: { type: String },
            country: { type: String }
        }],
        jobCategory: [{ type: String }]
    },
    notifications: [{ type: String }],
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
        },
        statusUpdatedAt: {
            type: Date
        },
    }]
});

// hashing password before saveing on save function call
UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = generateHash(this.password);
    }
    next();
});


function generateHash (password) {
const salt = bcrypt.genSaltSync (12);
const hash= bcrypt.hashSync (password, salt);
return hash;
}



export default mongoose.models.User || mongoose.model("User", UserSchema);