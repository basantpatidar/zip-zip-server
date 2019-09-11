if (process.env.NODE_ENV === "production") {
  //We are in production Environment
  module.exports = require("./prod");
} else {
  // We are in dev Environment

  module.exports = require("./dev");
}
