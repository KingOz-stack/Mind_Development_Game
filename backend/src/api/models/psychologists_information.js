import mongoose from 'mongoose';

// Define the schema for the psychologists_information collection
const psychologistsInformationSchema = new mongoose.Schema({
    psychologist_id: {
        type: String,
        required: true,
        unique: true,
    },

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

// Create the psychologists_information model based on the schema for the "psychologists_information" collection
const PsychologistsInformation = mongoose.model('PsychologistsInformation', psychologistsInformationSchema);

// export the psychologists_information model
export default PsychologistsInformation;