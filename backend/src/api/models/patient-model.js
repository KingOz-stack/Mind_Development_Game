const mongoose  = require('mongoose');
const bcrypt = require('bcrypt')

// Define the schema for the Patient in the 'patients' collection
const patientSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
    },

    last_name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    password: {
        type: String,
    },

    age: {
        type: Number,
    },

    googleId: {
        type: String,
    },

    joined_at: {
        type: Date,
        required: true,
    },
   
    /*
    updated_at: {
        type: Date,
        required: true,
    } */

});


// a middleware to help with password hashing
patientSchema.pre('save', async function(next){
    const user = this;
    if(user.password && user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 10)
    }

    next()

});

// a custom method to verify the password
patientSchema.methods.verifyPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}


// Create the Patient model based on the patientSchema for the "patients" collection
const Patient = mongoose.model('Patient', patientSchema, "patients");


// export the Patient model
module.exports = Patient;