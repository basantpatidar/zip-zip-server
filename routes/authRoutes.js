const passport = require("passport");

// Route handler for Google OAuth flow
module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  //Access code from Google will be available at this route
  app.get("/auth/google/callback", passport.authenticate("google"));
};
