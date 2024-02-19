const express = require("express");
const app = express();
const dotenv = require("dotenv");
var cors = require('cors')

dotenv.config();
app.use(cors());



app.use(express.json());
const userRoutes = require(`./Routes/userRoutes`);
app.use('/users', userRoutes)
require('./Connectdb')

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT || 5000}`
  );
});
