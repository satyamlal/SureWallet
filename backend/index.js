import "./db.js";

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const app = express();

const mainRouter = require("./routes/index.js");
const userRouter = require("/routes/user.js");

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);
app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
