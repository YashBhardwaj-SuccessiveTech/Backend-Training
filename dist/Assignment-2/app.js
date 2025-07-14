const express = require("express");
const app = express();
const data = require("./mockData");
app.get("/users", (req, res) => {
    res.send(data);
});
export {};
