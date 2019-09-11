const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//I have made authRoutes a arrow function at "./routes/authRoutes" and calling
//that function from here because authRoutes.js requires 'app' and this the way to import 'app'.
//require statement here is returning a function and second set of parenthesis immediately invokes the function with App as an argument.
//"app" has both the route using below line of code.
require("./routes/authRoutes")(app);

//Do not change in future
const PORT = process.env.PORT || 5000;
app.listen(PORT);
