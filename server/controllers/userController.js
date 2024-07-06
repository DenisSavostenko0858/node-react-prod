const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Basket} = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'});
} 

class UserController {
    async registerUser(req, res, next) {
        const {email, password, role} = req.body;
        if(!email ||!password){
            return next(ApiError.badRequest('Неккоректный email или пароль'));
        }
        const newUser = await User.findOne({where: {email}});
        if (newUser){
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        }
        const hashedPassword = await bcrypt.hash(password, 6);
        const user = await User.create({email, role, password: hashedPassword});
        const basket = await Basket.create({userId: user.id});
        const token = generateJwt(user.id, user.email, user.role)

        return res.json(token)
    }

    async loginUser(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        
        if(!user){
            return next(ApiError.internal('Пользователь не найден'));
        }
        let camparePassword = bcrypt.compareSync(password, user.password);
        
        if(!camparePassword){
            return next(ApiError.internal('Неверный пароль'));
        }
        
        const token = generateJwt(user.id, user.email, user.role);

        return res.json({token});
    }

    async chekUser(req, res, next) {
       const token = generateJwt(req.user.id, req.user.email, req.user.role);
       return res.json({token}); 
    }
}

module.exports = new UserController();