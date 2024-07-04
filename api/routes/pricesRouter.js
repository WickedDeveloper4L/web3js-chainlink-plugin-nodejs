const { getEthPrice } = require("./getEthPrice");

const express = require("express");

const pricesRouter = express.Router();

pricesRouter.get("/eth-price", getEthPrice);

module.exports = {
  pricesRouter,
};
