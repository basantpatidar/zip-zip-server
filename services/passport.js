const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

//"user" is the "existingUser" anything which pulled out of db
passport.serializeUser((user, done) => {
  //user.id is the same Id as of MongoDB -> collection -> record
  //its a sortcut to unique Id of a record
  done(null, user.id);
});

//we are usind this to get the user from db with unique id which was stored as cookie using "serializeUser"
passport.deserializeUser((id, done) => {
  //serching for user in db records using "findById" method of mongoose
  User.findById(id).then(user => {
    done(null, user);
  });
});

// First and second properties are API Keys while third is callback where we will recieve accessToken from Google
// The second parameter as arrow function gets the callback data from Google

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //we have the recode with the profile ID in out db so we dont need to save it to db.
          //when everything is done then we call 'done' with first argument null if as everything is fine while
          //second argument "existingUser" to let passport know the user.
          done(null, existingUser);
        } else {
          //we need to save our profile ID is its not there in db
          //using promise using "done"
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
