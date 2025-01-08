const mongoose  = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the Appointment collection
const appointmentSchema = new mongoose.Schema({

    patient_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Patient",
    },

    psychologist_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Psychologist",
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

// Create the Appointment model based on the appointmentSchema for the "appointments" collection
const Appointment = mongoose.model('Appointment', appointmentSchema, 'appointments');

// export the Appointment model
module.exports = Appointment;
