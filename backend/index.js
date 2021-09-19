const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "../frontend")));
app.listen(port, () => console.log(`Server is running on port ${port}...`));