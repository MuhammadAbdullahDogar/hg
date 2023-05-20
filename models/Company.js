const mongoose = require('mongoose');
import * as bcrypt from 'bcrypt';


// const jwt= require('jsonwebtoken');
// const dotenv = require("dotenv");

// dotenv.config();


const CompanySchema = new mongoose.Schema({
    role: { type: String },
    img: { type: String },
    cname: { type: String, required: true },
    domain: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    about: {
        foundingDate: { type: String },
        city: { type: String },
        country: { type: String },
        portfolios: [{
            linkType: { type: String },
            portfolioLink: { type: String }
        }],
        statement: { type: String },
        description: { type: String }
    },
    notableWork: [{
        recognizedBy: { type: String },
        natureOfWork: { type: String },
        yearOfAchievement: { type: String },
        linkToRecognition: { type: String },
        description: { type: String },
    }],
    culture: { type: String },
    jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }]
});

CompanySchema.pre('save', async function (next) {
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

export default mongoose.models.Company || mongoose.model("Company", CompanySchema);