const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const contactRoutes = require("./routes/contactRoutes");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.use(express.json());
app.use("/api", contactRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "Portfolio Backend is running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});