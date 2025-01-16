const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const productsRouter = require("./routes/products");
const cartRouter = require("./routes/cart");

dotenv.config();

//Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static('./public/images'));

//Routes
app.use("/api", productsRouter);
app.use("/api", cartRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Listening on port http://localhost:${port}`);
});
