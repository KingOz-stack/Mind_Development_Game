const express = require('express');
const passport = require('passport');
const { registerUser, loginUser } = require('../controllers/patient-controller');

const router = express.Router();

// Patient Authentication Routes.

// Signup Route (No Passport Middleware needed)
router.post('/patient/signup', registerUser);

// Login Route (Use Passport's Local Strategy middleware)
router.post(
  '/patient/login',
  passport.authenticate('local', { session: false }),
  loginUser
);

// Patient Google OAuth Routes
// router.get('/patient/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// router.get('/patient/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), googleCallbackController);




// Logout Route
//router.get('/logout', logoutController); 





// Pscychiatrist Authentication Routes




// Dashboard Route (protected by JWT)
router.get('/dashboard', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.status(200).json({
    message: "Welcome to the dashboard",
    user: req.user,
  });
});


// Export the router
module.exports = { authRoutes: router };
