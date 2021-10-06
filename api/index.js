const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
dotenv.config();
const cors = require("cors");

//routes import
const domainDetailRoutes = require("./routes/domainDetail");

//MONGO_LOCAL_URL, MONGO_REMOTE_URL

const PORT = 8000;

mongoose
  .connect(process.env.MONGO_LOCAL_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

//routes
app.use("/api/domain", domainDetailRoutes);

app.listen(PORT, () => {
  console.log(`BACKEND IS READY ON ${PORT} PORT`);
});
