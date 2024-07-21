const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const router = require("./routes/Card.js");
const Users = require("./routes/Users.js");

app.use('/api',router);
app.use('/user',Users);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
