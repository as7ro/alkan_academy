import User from "../models/userModel.js";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.redirect('/login')
    } catch (error) {

        let errors2 = {}

        if(error.name==="ValidationError"){
            Object.keys(error.errors).forEach((key) => {
                errors2[key]=error.errors[key].message;
            });
        }

        console.log("ERRORS 2ffadsfa",errors2)

        res.status(400).json(errors2)
    }
};

const loginUser = async (req, res) => {
    try {
       const {username,password} = req.body

       const user = await User.findOne({username})

        let same  = false

        if(user){
            same = await  bcrypt.compare(password, user.password)
        }else{

           return res.status(401).json({
                succeded: false,
                error:"istifadeci tapilmadi"
            })
        }

        if(same){

            const token = createToken(user._id)
            res.cookie("jwt",token,{
                httpOnly:true,
                maxAge:1000*60*60*24,
            })


            res.redirect("/users/dashboard")
        }else{
            res.status(401).json({
                succeded: false,
                error:"passwords are not matched",
            })
        }

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
};



const createToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: "1d",
    })
}




const getDashboardPage = (req, res) => {
    res.render("dashboard")
}

export { createUser, loginUser,getDashboardPage};
