const UserServices = require('../services/user.services');

exports.register = async(req, res, next)=>{
    try{
        const {email, password} = req.body; 
        const successres = await UserServices.registerUser(email, password);
        res.json({status: true, success: "User Registerd Successfully"});
    }catch(error){
        throw error;
    }
}

exports.login = async(req, res, next)=>{
    try{
        const {email, password} = req.body; 
        const user = await UserServices.checkuser(email);
        console.log("----------user----------", user);

        if (!user){
            throw new Error("User does not exist");
        }
        const isMatch = await user.comparePassword(password);
        if (isMatch == false){
            throw new Error("Password InValid")
        }

        let tokenData = {
            _id: user._id,
            email: user.email
        };

        const token = await UserServices.generateToken(tokenData, "todoapp", "1h");

        res.status(200).json({
            status: true,
            token: token
        });

    }catch(error){
        throw error;
    }
}
