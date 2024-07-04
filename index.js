const express = require("express");
const { api } = require("./api/api");

const PORT = 5000;
const app = express();

app.use("/api", api);

const startApp = async () => {
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
  });
};

startApp();
