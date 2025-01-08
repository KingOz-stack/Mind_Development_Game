const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const { authRoutes } = require('../api/routes/auth-routes');
const { welcomeMessage } = require('../api/routes/custom-messages');

require('./passport-setup');

const server = express();

// Middleware setup
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));  // TODO: Check if this is necessary
server.use(passport.initialize()); // Initialize Passport

// routes.
server.all("/", welcomeMessage);
server.all("/api", welcomeMessage);
server.get("/api/joke", (req, res) => {
    res.status(200).json({ message: "Why did the chicken cross the road? To get to the other side!" });
}
);

// Authentication routes
server.use("/api/auth", authRoutes);  // Authentication routes



// Export the server
module.exports = server