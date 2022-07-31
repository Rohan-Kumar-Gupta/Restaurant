const express = require("express");
const cors = require("cors");
const gallery = require("./api/Gallery");

const { connectDB } = require("./config/database");
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

//Middlewares: Connecting different Routes
app.use("/api/gallery", gallery);

app.get("/", (req, res, err) => {
  res.status(500).send(err);
});

//Connect to the DataBase
connectDB();

//Listen to the PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server running at port 5000");
  }
});
