const express = require('express');
const cors = require('cors');
const app = (express());
const PORT = 1234;
const product = require('./route/product.route');
require('./db.connection');
app.use(express.json());
app.use(cors());
app.use('/product', product);
app.get('/', (req, res) => {
    return res.json({ message: "Fake Data" })
})
app.get('/data', (req, res) => {
    const { limit, page, name } = req.query;
    res.json({ limit, page, name });
})
app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id })
});
app.post('/item',(req,res)=>{
    const body=req.body;
    res.json({body})
})
app.listen(PORT, () => {
    console.log("Server Running on Port", PORT);

});
module.exports = app;