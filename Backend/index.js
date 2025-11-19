const express = require("express");
const dotenv = require("dotenv");

const contactRoute = require("./routes/Contact");

const cors = require('cors');



dotenv.config();


const app = express();

app.use(express.json());

app.use(cors());






app.use("/api/v1/contact", contactRoute);


// Start server
const PORT = process.env.PORT;
app.listen(PORT, async () => {
  console.log(`🚀 Server Running At PORT - ${PORT}`);
});
