import mongoose from 'mongoose';

// Define the schema for the user information in the 'users' collection
const usersSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    name: {
        type: String,
        required: true,
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
        required: true,
        trim: true,
    },

    age: {
        type: Number,
        required: true,
    },

    streaks: {
        type: Number,
        required: true,
    },

    achievements: {
        type: [String],
        required: true,
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

// Create the users model based on the schema for the "users" collection
const Users = mongoose.model('Users', usersSchema);

// export the users model
export default Users;
