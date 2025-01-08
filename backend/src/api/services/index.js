const { userExists, getUserByGoogleId, createUser, getUserById } = require('./patient-service');

module.exports = {
    createUser,
    userExists,
    getUserById,
    getUserByGoogleId,
};