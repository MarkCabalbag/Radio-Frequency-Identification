const app = require("./app.js");
const { port } = require("./config/env.js");
const { connectDB } = require("./config/connectDB.js");

const start = async () => {
  await connectDB();
  app.listen(port, () => console.log(`server is running in port ${port}`));
};

start();