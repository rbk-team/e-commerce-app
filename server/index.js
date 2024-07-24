const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();
const data = require('../server/config/database.js')
const con = require('../server/models/index.js')
const routes = require('./routes/productRoutes.js')
const userRoute = require('./routes/userRoutes.js')
app.use(express.json());
app.use(cors());
app.use('/api/product',routes);
app.use('/api/user',userRoute);

app.use(express.static(__dirname + "/../client/src"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});