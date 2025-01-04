import mongoose from 'mongoose';

// Define the schema for the psychologists_user_appointment collection
const psychologistsUserAppointmentSchema = new mongoose.Schema({
    appointment_id: {
        type: String,
        required: true,
        unique: true,
    },

    user_id: {
        type: String,
        required: true,
    },

    psychologist_id: {
        type: String,
        required: true,
    },

    appointment_date: {
        type: Date,
        required: true,
    },

    status: {
        type: String,
        required: true,
    }
});

// Create the psychologists_user_appointment model based on the schema for the "psychologists_user_appointment" collection
const PsychologistsUserAppointment = mongoose.model('PsychologistsUserAppointment', psychologistsUserAppointmentSchema);

// export the psychologists_user_appointment model
export default PsychologistsUserAppointment;
