const productModel = require('../shema/product.shema');
class ProductService {
    async createProduct(programId, title, price, description, category, image, rating) {
        try {
            const productData = new productModel({
                programId: programId,
                title: title,
                price: price,
                description: description,
                category: category,
                image: image,
                rating: rating,
            }
            );
            const product = await productData.save();
            return product;
        }
        catch (error) {
            console.log("Error Creating User", error.message);
            throw error;
        }
    }


    async getProduuct(groupId) {
        try {
            const productData = await productModel.find({ groupId: groupId });
            return productData;
        }
        catch (error) {
            console.log("Error getting User", error.message);
            throw error;
        }
    }
    async updateProduct(programId, price, data) {
        try {
            const productData = await productModel.findOneAndUpdate(
                { programId: programId, price, price },
                { $set: data },
                { new: true }
            );
            return productData;
        }
        catch (error) {
            console.log("Error getting user", error.message);
            throw error;
        }
    }

    // async deleteProduct(programId){
    //     try{
    // const productData=await productModel.findOneAndDelete({programId});
    // return productData;
    //     }
    //     catch(error){
    //         console.log("Error getting user",error.message);
    //         throw error;
    //     }
    // }

    async softDeleteProduct(programId) {
        try {
            const productData = await productModel.findOneAndUpdate(
                { programId: programId },
                { $set: { deleted: true } },
                { new: true }
            );

            return productData;
        } catch (error) {
            console.log("Error Deleting Product", error.message);
            throw error;
        }
    }

    async getProducts() {
        try {
            const products = await productModel.find({ deleted: false });
            return products;
        }
        catch (error) {
            console.log("Error getting products", error.message);
            throw error;
        }
    }
    async getProductByCatogory(groupId, programId, category) {
        try {
            const query = { groupId: parseInt(groupId) };
            if (programId) {
                query.programId = parseInt(programId);
            }
            if (category) {
                query.category = category;
            }
            const data = await productModel.find(query);
            return data;
        }
        catch (error) {
            console.log("Error Getting Products by Catogary", error.message);
            throw error;
        }

    }
}

module.exports = new ProductService();