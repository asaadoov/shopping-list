const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const items = require("./routes/api/items");

// bodyparser middleware
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// connect DB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.info("MongoDB is connected..."))
  .catch(error => console.error(error));

// use routes
app.use("/api/items", items);

const PORT = process.env.PORT || 2098;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
