// 1- require mongoose
const mongoose = require("mongoose");
//2- connect to DB
const connectDB  = async  () => {
  try {
    await mongoose.connect(process.env.Mongo_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("The Database is Connected.....");
  } catch (error) {
    console.log("Error with connection with database" ,error );
  }
};
module.exports = connectDB