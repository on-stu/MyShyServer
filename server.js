const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const api = require("./router/api");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

mongoose.connect(
  "mongodb+srv://admin:ehdgoanf1!@youtubeclone.dbev2.mongodb.net/MyShyDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) {
      console.error(err);
    }
    console.log("mongoDb is connected");
  }
);

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api", api);
//서버 사이드 렌더링
app.use("/", express.static(__dirname + "/build"));

app.listen(PORT, () => {
  console.log(`server is running on `, PORT);
});
