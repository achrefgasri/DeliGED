// 1-require express
const express = require("express");
// 2- instance of express
app = express();
// 5- require and config dotenv
require("dotenv").config({ path: 'config/.env' });
// 6- connect the DB
const connectDB = require("./config/connectDB");
connectDB();
// 7- bodyparser middleware
app.use(express.json());
//3- port
const port = process.env.PORT ;
// 4- create server
app.listen(port, (error) =>
  error
    ? console.log("Can not run server!!!")
    : console.log(`Server is running on port ${port}`)
);
// 8- require routes
const authRouter = require("./routes/auth");
app.use("/api/auth/", authRouter);


