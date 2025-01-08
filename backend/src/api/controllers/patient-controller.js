const jwt = require('jsonwebtoken');
const { createUser, userExists } = require('../services');
const passport = require('passport');
const { JWT_SECRET, TOKEN_EXPIRATION } = require('../../config/constants');


// patient registration controller
exports.registerUser = async (req, res) => { 
  try {
    const { first_name, last_name, email, password, age } = req.body;
    console.log(first_name, last_name, email, password, age);
    if (!first_name || !last_name || !email || !password || !age) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // check if the user already exists
    const user = await userExists(email);
    
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // call the service to create a new user.
    const newUser = await createUser({ first_name, last_name, email, password, age });

    const token = jwt.sign({ user_id: newUser._id }, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });   // generate an auth token

    res.status(201).json({ 
      messagea: 'User registered successfully',
      user: newUser,
      access_token: token,   // TODO: remember to add a refresh token
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  } 
}


// patient login controller
exports.loginUser = (req, res) => {
  const user = req.user; // User is attached to req by Passport
  const token = jwt.sign({ user_id: user._id }, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });   // generate an auth token
  res.status(200).json({ message: 'Login successful', token });
};


// // Google OAuth Callback Controller
// exports.googleCallbackController = (req, res) => {
//   const token = jwt.sign({ id: req.user.id, username: req.user.username }, 'your_jwt_secret', { expiresIn: '1h' });
//   res.cookie('token', token, { httpOnly: true });
//   res.redirect('/dashboard');
// };


// // patient logout controller
// exports.logoutController = (req, res) => {
//   res.clearCookie('token');
//   res.redirect('/');
// };
