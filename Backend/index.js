const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/UserRoutes");
const path = require("path");
const cors = require("cors");
dotenv.config();

// otp auth
const { generateOtp } = require("./utils/utils");
const sendOtp = require("./mailer");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 7000;

// Middleware to serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/", userRoutes);

// Mongo Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// otp requests
const users = {};

app.post("/send-otp", (req, res) => {
  const { email } = req.body;
  console.log("email received", email);
  const otp = generateOtp();

  // Save OTP to database or temporary storage
  users[email] = otp;

  sendOtp(email, otp)
    .then(() => {
      res.status(200).send("OTP sent successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Failed to send OTP", err);
    });
});

app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  // Verify OTP
  if (users[email] === otp) {
    delete users[email]; // OTP should be used only once
    res.status(200).send("User authenticated");
  } else {
    res.status(400).send("Invalid OTP");
  }
});
app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
