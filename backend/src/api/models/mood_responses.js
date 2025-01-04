import mongoose from 'mongoose';

// Define the schema for the mood_responses collection
const moodResponsesSchema = new mongoose.Schema({
    response_id: {
        type: String,
        required: true,
        unique: true,
    },

    user_id: {
        type: String,
        required: true,
    },

    mood_input: {
        type: String,
        required: true,
    },

    sentiment_score: {
        type: Number,
        required: true,
    },

    senitment_label: {
        type: String,
        required: true,
    },

    assigned_avatar: {
        type: String,
        required: true,
    },

    timestamp: {
        type: Date,
        default: Date.now,
    },
});

// Create the mood_responses model based on the schema for the "mood_responses" collection
const MoodResponses = mongoose.model('mood_responses', moodResponsesSchema);

// export the mood_responses model
export default MoodResponses;
