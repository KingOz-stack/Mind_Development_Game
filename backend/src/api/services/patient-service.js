const { Patient } = require('../models');

exports.createUser = async (user) => {
    try {

        const newUser = new Patient({...user, joined_at: new Date()});
        await newUser.save();

        return newUser;

    } catch (error) {
        // re-throw the error to the parent function
        throw new Error('Error creating user: ' + error.message);
    }
}

// check if a user exists.
exports.userExists = async (email) => {
    try {
        const user = await Patient.findOne({
            email: email
        });
    
        return user;

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
