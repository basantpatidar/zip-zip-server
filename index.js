const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ Hi: "React" });
});

//Do not change in future
const PORT = process.env.PORT || 5000;
app.listen(PORT);
