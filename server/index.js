const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();
const db = require("./config/database")
const conn = require('./models/index')
const product = require('./routes/productRoutes')

app.use(express.json());
app.use(cors());

app.use('/api/product',product)



app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
