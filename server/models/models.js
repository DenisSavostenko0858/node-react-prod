const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'user'},
});

const Basket = sequelize.define('Basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const BasketProduct = sequelize.define('BasketProduct', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Product = sequelize.define('Product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0 },
    img: {type: DataTypes.STRING, allowNull: false},
});

const Type = sequelize.define('Type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const Brand = sequelize.define('Brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const Rating = sequelize.define('Rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
});

const ProductInfo = sequelize.define('Info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
});

const TypeBrand = sequelize.define('Type_Brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
}); 

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Type.hasMany(Product);
Product.belongsTo(Type);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasMany(ProductInfo);
ProductInfo.belongsTo(Product);

Type.belongsToMany(Brand, {through: TypeBrand} );
Brand.belongsToMany(Type, {through: TypeBrand} );

module.exports = {
    User, 
    Basket, 
    BasketProduct, 
    Product, 
    Type, 
    Brand, 
    Rating, 
    ProductInfo, 
    TypeBrand
};