const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");

require("dotenv").config({ path: "./config/.env" });

// 4- parse data
app.use(express.json());

// 3- routes
const user = require("./routes/User");
app.use("/", user);


// 2- connect DB

connectDB();

// 1- run server

const PORT = process.env.PORT || process.env.port;

app.listen(PORT, (err) => {
  err
    ? console.log("Server connection failed", err)
    : console.log(`Server is running on Port ${PORT}`);
})