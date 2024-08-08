const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    groupId: {
        type: Number,
        required: false
    },
    programId: {
        type: Number,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    rating: {
        type: Object,
        required: false
    },
    deleted: {
        type: Boolean,
        default: false
    }
})
const productModel = mongoose.model('product', productSchema)
module.exports = productModel;