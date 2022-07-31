const connectDB = () => {
  const mongoose = require("mongoose");
  const MONGO_URL =
    "mongodb+srv://aryan:ermal@cluster0.7ifht.mongodb.net/RestaurentData?retryWrites=true&w=majority";

  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("connection: success");
    })
    .catch((err) => console.log(err));
};
exports.connectDB = connectDB;
