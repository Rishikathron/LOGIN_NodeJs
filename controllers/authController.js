const userModel = require('../models/Users.js');

const getallUsers = async (req,res) =>{
    try{
        console.log("Inside users");  
        const userData = await userModel.find();      
        res.status(200).json(userData);
    }
    catch(err){ res.status(400).json({message : err}); }
}

const loginUser = async (req,res)=>{
    try{
        if(req.query?.name != null && req.query?.password != null){
            const userData = await userModel.findOne({UserName : req.query.name});
            if(userData != null){
                
                if(userData.Password == req.query?.password){
                    res.status(200).json({message : "Logged in Successfully"});
                }
                else{
                    res.status(400).json({message : "Password missmatch"})
                }
            }
            else{
                res.status(400).json({message : "Please check the userName"})
            }
        }
        else{
            res.status(400).json({message : "UserName and Password Field should not be Empty"})
        }
    }
    catch(err){ res.status(400).json({message : err}); }
    
};

const registerUser = async (req,res)=>{
    try{
        const userData = new userModel({
            UserName : req.body.name,
            Password : req.body.password,
            Email : req.body.email,
            Contact : req.body.contact
        });
        const newUser = await userData.save();
        res.status(200).json({message : `User ${req.body.name} is Registered Successfully`})
    }
    catch(err){res.status(400).json({message : err})}   
    
}

module.exports = {getallUsers,registerUser,loginUser}
