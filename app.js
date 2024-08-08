const express = require('express');
const cors = require('cors');
const app = (express());
const PORT = 1234;
const product=require('./route/product.route');
require('./db.connection');
app.use(express.json());
app.use(cors());
app.use('/product',product);
app.get('/', (req, res) => {
    return res.json({ message: "Fake Data" })
})
app.listen(PORT, () => {
    console.log("Server Running on Port", PORT);

});
module.exports = app;