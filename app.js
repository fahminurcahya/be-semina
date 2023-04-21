var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var app = express();
const authCMSRouter = require("./app/api/v1/auth/router");
const categoriesRouter = require("./app/api/v1/categories/router");
const imagesRouter = require("./app/api/v1/images/router");
const talentsRouter = require("./app/api/v1/talents/router");
const organizersRouter = require("./app/api/v1/organizers/router");
const eventsRouter = require("./app/api/v1/events/router");
const ordersRouter = require("./app/api/v1/orders/router");
const participantsRouter = require("./app/api/v1/participants/router");
const paymentsRouter = require("./app/api/v1/payments/router");
const refreshTokenRouter = require("./app/api/v1/refreshToken/router");

const v1 = "/api/v1/cms";

const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handler-error");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// gunakan categories router
app.use(v1, categoriesRouter);
app.use(`${v1}/organizers`, organizersRouter);
app.use(`${v1}/images`, imagesRouter);
app.use(`${v1}/talents`, talentsRouter);
app.use(`${v1}/events`, eventsRouter);
app.use(`${v1}/orders`, ordersRouter);
app.use(`${v1}/payments`, paymentsRouter);
app.use(`${v1}/auth`, authCMSRouter);
app.use(`${v1}/refreshToken`, refreshTokenRouter);
app.use("/api/v1", participantsRouter);

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
