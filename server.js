const express = require("express");
const mongoose = require("mongoose");

require("./model");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/peaceful-bastion", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api"));
app.use(require("./routes/htmlroutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});