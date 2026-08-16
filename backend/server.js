const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

require("dotenv").config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://mukilan-portfolio-gamma.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("CORS Origin:", origin);

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS blocked: ${origin}`));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Portfolio Backend is running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});