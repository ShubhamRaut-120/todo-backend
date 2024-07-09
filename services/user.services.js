const usermodel = require('../model/user.model')
const jwt = require('jsonwebtoken')

class UserServices{
    static async registerUser(email, password){
        try{
            const createuser = new usermodel({email, password});
            return await createuser.save();
        }catch(err){
            throw err
        }
    }

    static async checkuser(email){
        try{
            return await usermodel.findOne({email})
        }catch (err){
            throw err
        }
    }

    static async generateToken(tokenData, secretkey, jwt_expire){
        return jwt.sign(tokenData, secretkey, {expiresIn: jwt_expire});
    }
}

module.exports = UserServices;