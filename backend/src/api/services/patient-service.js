const { Patient } = require('../models');

exports.createUser = async (patient) => {
    try {

        const newPatient = new Patient({...patient, joined_at: new Date()});
        await newPatient.save();
        console.log('Test patient saved:', newPatient);
        return newPatient;

    } catch (error) {
        // re-throw the error to the parent function
        throw new Error('Error creating a new patient: ' + error.message);
    }
}

// check if a user exists.
exports.userExists = async (email) => {
    try {
        const patient = await Patient.findOne({
            email: email
        });
    
        return patient;

    } catch (error) {
        // re-throw the error to the parent function
        console.log('error here')
        throw new Error('Error checking user existence: ' + error.message);
    }
}


exports.getUserById = async (userId) => {
    try {
        const user = await Patient.findOne({ _id: userId });       

        if (!user) {
            // Handle case when user does not exist
            throw new Error('Patient not found');
        }
        
        // remove the user password from the user object
        const sanitizedUser = user.toObject();
        delete sanitizedUser.password;
    
        return sanitizedUser;

    } catch (error) {
        // re-throw the error to the parent function
        throw new Error('Error getting user: ' + error.message);
    }

}

exports.getUserByGoogleId = async (userId) => {
    try {
        const user = await Patient.findOne({ _googleId: userId });       

        if (!user) {
            // Handle case when user does not exist
            throw new Error('Patient not found');
        }
        
        // remove the user password from the user object
        const sanitizedUser = user.toObject();
        delete sanitizedUser.password;
    
        return sanitizedUser;

    } catch (error) {
        // re-throw the error to the parent function
        throw new Error('Error getting user: ' + error.message);
    }

}
