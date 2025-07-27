require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

module.export = {
  JWT_SECRET: JWT_SECRET,
};
