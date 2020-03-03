const express = require("express");
const app = express();
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const videoRoutes = require("./routes/api/videolist");
app.use("/api/videolist", videoRoutes);

app.listen(PORT, () => {
  console.log(`server is running at: ${BACKEND_URL}:${PORT}`);
});
