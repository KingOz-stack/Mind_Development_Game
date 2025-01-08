const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the user_progress collection
const userProgressSchema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },

    activity_type: {
        type: String,
        required: true,
    },

    activity_id: {
        type: String,
        required: true,
    },

    progress_data: {
        current_step: {
            type: Number,
            required: true,
        },
        completion_percentage: {
            type: Number,
            required: true,
        },
        last_saved_time: {
            type: Date,
            required: true,
        }
    },

    created_at: {
        type: Date,
        required: true,
    },

    updated_at: {
        type: Date,
        required: true,
    }
});

// Create the user_progress model based on the schema for the "user_progress" collection
const UserProgress = mongoose.model('UserProgress', userProgressSchema);

// export the user_progress model
module.exports = UserProgress;
