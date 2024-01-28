import Form from "../models/formModel.js";

const createForm = async(req,res)=>{
    try {
        const form = await Form.create(req.body);
res.status(201).render("ugurlu")
    } catch (error) {
        res.status(500).json({
            succeded:false,
            error
        })
    }
};














const getAllForms = async(req,res)=>{
    try {
        const forms = await Form.find({})
        res.status(200).render('forms',{
            forms
        })

    } catch (error) {
           res.status(500).json({
            succeded:false,
            error
        })
    }
}



const getForm = async(req,res)=>{
    try {
        const forms = await Form.findById({_id : req.params.id})
        res.status(200).render('form',{
            form
        })

    } catch (error) {
           res.status(500).json({
            succeded:false,
            error
        })
    }
}


export {createForm,getAllForms,getForm};
