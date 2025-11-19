const express = require("express");
const dotenv = require("dotenv");

const contactRoute = require("./routes/Contact");

const cors = require('cors');



dotenv.config();


const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://localhost:5173",
      /\.vercel\.app$/   // allow all vercel preview deployments
    ],
    credentials: true,
  })
);






app.use("/api/v1/contact", contactRoute);


// Start server
const PORT = process.env.PORT;
app.listen(PORT, async () => {
  console.log(`🚀 Server Running At PORT - ${PORT}`);
});
