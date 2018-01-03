const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user.id);
  });
});

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
  },
  (accessToken, refreshToken, profile, done) => {
    console.log('profile', profile);
    User.findOne({ uid: profile.id, provider: 'google' }).then((existingUser) => {
      if (existingUser) {
        // we already have a record with the given profile ID
        console.log('***************');
        console.log('Existing User');
        console.log('***************');
        done(null, existingUser);
      } else {
        console.log('***************');
        console.log('New User');
        console.log('***************');
        // we don't have a user record with this ID, make a new record!
        new User({
          uid: profile.id,
          provider: 'google',
          name: profile.displayName,
        }).save().then(user => done(null, user));
      }
    });
  },
));