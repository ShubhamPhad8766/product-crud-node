const express = require('express');
const router = express.Router();
const ProductService = require('../services/product.service');
router.post('/product', async (req, res) => {
    const { programId, groupId, title, price, description, category, image, rating } = req.body;
    try {
        const data = await ProductService.createProduct(programId, groupId, title, price, description, category, image, rating);
        res.json(data);
    }
    catch (error) {
        console.log("Error Handling User", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
router.get('/product/:groupId', async (req, res) => {
    try {
        const groupId = req.params.groupId;
        const product = await ProductService.getProduuct(groupId);

        // const product = await ProductService.getProduuct();
        res.send(product);
    }
    catch (error) {
        throw error;
    }
});
router.put("/product/:programId/:price", async (req, res) => {
    try {
        const { programId, price } = req.params;
        const data = req.body;
        const product = await ProductService.updateProduct(programId, price, data);
        if (!product) {
            res.status(400).json({ message: "User not found" })
        }
        else {
            res.send(product)
        }
    }
    catch (error) {
        console.log("Error handlind User", error.message)
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// router.delete('/product/:programId', async (req, res) => {
//     try {
//         const { programId } = req.params;
//         const product = await ProductService.deleteProduct(programId);
//         res.send({ message: "Product Delete SucessFully", product });
//     }
//     catch (error) {
//         throw error;
//     }
// });
router.delete('/product/:programId', async (req, res) => {
    const { programId } = req.params;
    try {
        const productData = await ProductService.softDeleteProduct(programId);
        if (!productData) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.send({ message: 'Product deleted sucessfully', productData });
    }
    catch (error) {
        res.status(500).send({ message: "Internal Server error" });
        throw error;
    }
});

router.get('/product', async (req, res) => {
    try {
        const products = await ProductService.getProducts();
        res.send(products);
    }
    catch (error) {
        console.error("Error getting Products", error.message);
        res.status(500).send({ message: "Internal Server error" });
    }
});
router.get('/produacts/data/:groupId', async (req, res) => {
    try {
        const groupId = req.params.groupId;
        const { programId, category } = req.query;
        const product = await ProductService.getProductByCatogory(groupId, programId, category);
        res.send(product);
    }
    catch (error) {
        console.log("Error Getting Product", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
})
module.exports = router;