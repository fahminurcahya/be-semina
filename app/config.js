const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: "2h",
  email: process.env.GMAIL,
  password: process.env.PASSWORD,
};
