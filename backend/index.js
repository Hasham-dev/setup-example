const express = require("express");
const app = express();
const cors = require("cors"); // Import the cors package
const port = 5555;

const corsOptions = {
  origin: "http://example.com",
};

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World James!");
});

app.get("/signup", (req, res) => {
  res.json({
    name: "Sign up!",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
