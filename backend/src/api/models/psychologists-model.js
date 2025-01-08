const mongoose  = require('mongoose');

// Define the schema for the Psychologists collection
const PsychologistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    specialization: {
        type: String,
        required: true,
    },

    bio: {
        type: String,
        required: true,
    },

    availability: [{
        day: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        }
    }],

    profile_image: {
        type: String,
        required: true,
    },

    ratings: {
        type: Number,
        required: true,
    }
});

// Create the Psychologist model based on the PsychologistSchema for the "psychologists" collection
const Psychologist = mongoose.model('Psychologist', PsychologistSchema, 'psychologists');

// export the Psychologist model
module.exports = Psychologist;