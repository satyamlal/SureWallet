const express = require("express");
const app = express();
const zod = require("zod");

const router = express.Router();

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

router.post("/signup", (req, res) => {
  const body = req.body;
});

module.exports = { router };
