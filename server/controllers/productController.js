const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');
const {Product, ProductInfo} = require('../models/models')

class ProductController {
    async create(req, res, next) {
        try {
            const {name, price, BrandId, TypeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + '.jpeg';
            img.mv(path.resolve(__dirname, "..", "static", fileName));
    
            const product = await Product.create({
                name,
                price,
                BrandId,
                TypeId,
                img: fileName,
            });
            
            if(info){
                info = JSON.parse(info);
                info.forEach(i => {
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id,    
                    })
                });     
            }

            return res.json(product);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async getAll(req, res) {
        let {BrandId, TypeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;

        let products;
        if(!BrandId && !TypeId){
            products = await Product.findAndCountAll({ limit, offset });
        }
        if(BrandId &&!TypeId){
            products = await Product.findAndCountAll({where: {BrandId}}, limit, offset);
        }
        if(!BrandId && TypeId){
            products = await Product.findAndCountAll({where: {TypeId}}, limit, offset);
        }
        if(BrandId && TypeId){
            products = await Product.findAndCountAll({where: {BrandId, TypeId}}, limit, offset);
        }
        return res.json(products)
    }

    async getOne(req, res) {
        const {id} = req.params;
        const product = await Product.findOne({where: {id}, include: [{model: ProductInfo}]});
        return res.json(product);
    }
}

module.exports = new ProductController();