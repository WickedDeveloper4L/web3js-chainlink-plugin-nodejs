const express = require("express");
const { pricesRouter } = require("./routes/pricesRouter");

const api = express.Router();

api.use("/prices", pricesRouter);

module.exports = {
  api,
};
