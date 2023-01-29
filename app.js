var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();
const authCMSRouter = require("./app/api/v1/auth/router");
const categoriesRouter = require("./app/api/v1/categories/router");
const imagesRouter = require("./app/api/v1/images/router");
const talentsRouter = require("./app/api/v1/talents/router");
const organizersRouter = require("./app/api/v1/organizers/router");
const eventsRouter = require("./app/api/v1/events/router");

const v1 = "/api/v1/cms";

const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handler-error");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to api semina",
  });
});

// gunakan categories router
app.use(v1, categoriesRouter);
app.use(`${v1}/organizers`, organizersRouter);
app.use(`${v1}/images`, imagesRouter);
app.use(`${v1}/talents`, talentsRouter);
app.use(`${v1}/events`, eventsRouter);
app.use(`${v1}/auth`, authCMSRouter);

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
