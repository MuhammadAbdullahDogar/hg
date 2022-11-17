const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String,required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: Number,required: true},
    password: {type: String,required: true}
});


export default mongoose.models.User || mongoose.model("User", UserSchema);