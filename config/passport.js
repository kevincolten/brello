var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

var User = require('../models/UserModel');

passport.use(new LocalStrategy(
  function(username, password, done) {
    // Find user in database by username, let's always keep usernames lowercase
    User.findOne({ username: username.toLowerCase() }, function (err, user) {
      if (err) { return done(err); } // return error if one
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' }); // can't find user
      }
      // this will hash the entered password, and compare it with the hashed version in the database
      bcrypt.compare(password, user.password, function(err, match) {
        if (!match) {
          return done(null, false, { message: 'Incorrect password.' }); // if not a match
        }

        return done(null, user); // Yay! passed authentication
      });
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
