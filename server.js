const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "lorem-network", "..", "public");
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}!`);
});
