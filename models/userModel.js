import mongoose from "mongoose";
import bcrypt, { hash } from"bcrypt";
import validator from "validator";


const { Schema } = mongoose;

const userSchema = new Schema({

    username: {
        type: String,
        required: [true,"İstifadəçi adını qeyd edin!"],
        lowercase:true,
        validate: [validator.isAlphanumeric,"Yalnız alphanumeric xarakterlər!"]
    },
    email: {
        type: String,
        required: [true,"Email ünvanını qeyd edin!"],
        unique: true,
        validate: [validator.isEmail,"Düzgün email daxil edin!"]
    },
    password: {
        type: String,
        required: [true,"Şifrə qeyd edin!"],
        minLength: [4, "At least 4 characters"]
    }



},
    {
        timestamps: true
    })


userSchema.pre("save",function(next){
    const user = this
    bcrypt.hash(user.password, 10, (err,hash)=>{
        user.password = hash;
        next()
    })

})

const User = mongoose.model('User', userSchema);

export default User;