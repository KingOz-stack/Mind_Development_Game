const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { userExists, getUserById, createUser, getUserByGoogleId } = require('../api/services');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('./constants');
const JWT_SECRET = require('./constants').JWT_SECRET;

require('dotenv').config();


// Local Strategy for login.
passport.use(
  'local',
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    async (email, password, done) => {
      try {
        const user = await userExists(email);
        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const isValidPassword = await user.verifyPassword(password);

        if (!isValidPassword) {
          return done(null, false, { message: 'Invalid password' });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);


// JWT Strategy

// jwt strategy options
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

// jwt strategy
passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
      const user = await getUserById(payload.user_id);
      if (!user) {
          return done(null, false);
      }
      return done(null, user);
  } catch (error) {
      return done(error, false);
  }
}));




// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/patient/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {

        const birthdate = profile._json.birthday;
        
        // Check if the user already exists
        let user = await getUserByGoogleId(profile.id)

        if (!user) {
          // Create a new user if not found
          user = await createUser({
            first_name: profile.name.givenName,
            last_name: profile.name.familyName,
            email: profile.emails[0].value,
            googleId: profile.id,  // Use Google's unique ID
            birth_date: birthdate,
            joined_at: new Date(),
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
