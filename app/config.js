const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: "1m",
  jwtRefreshTokenSecret: process.env.JWT_SECRET_REFRESH_TOKEN,
  jwtRefreshTokenExpiration: "3m",
  email: process.env.GMAIL,
  password: process.env.PASSWORD,
};
