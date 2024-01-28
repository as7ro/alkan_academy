import mongoose from "mongoose";

const { Schema } = mongoose;

const formSchema = new Schema({
    adSoyad: {
        type: String,
        required: true,
        trim:true
    },
    cinsiyet: {
        type: String,
        enum: ['erkek', 'kadın'],
    },
    vatandaslik: {
        type: String,
        enum: ['azerbaycan', 'diger'],
    },
    unvan: {
        type: String,
        trim:true
    },
    dogumTarihi: {
        type: Date,
        
    },
    ehliyet: {
        type: String,
        enum: ['var', 'yok'],
    },
    email: {
        type: String,
        required: true,
        trim:true
    },
    mobile: {
        type:String,
        trim:true
    },

    azeriDilBilgisi: {
        type: String,
        enum: ['azeriPis', 'azeriOrta', 'azeriIyi'],
    },
    turkceDilBilgisi: {
        type: String,
        enum: ['turkcePis', 'turkceOrta', 'turkceIyi'],
    },
    ruscaDilBilgisi: {
        type: String,
        enum: ['ruscaPis', 'ruscaOrta', 'ruscaIyi'],
    },
    ingilizceDilBilgisi: {
        type: String,
        enum: ['ingilizcePis', 'ingilizceOrta', 'ingilizceIyi'],
    },
    isYeriVarMi: {
        type: String,
        enum: ['evet', 'hayir'],
    },
    voenVarMi: {
        type: String,
        enum: ['evet', 'hayir'],
    },
    istenenVezifeler: [String],
    ihtiyacDuyulanKurslar: [String],
    eyaniTehsil: {
        type: String,
        enum: ['evet', 'hayir'],
    },
    isTecrube: {
        type: String,
        enum: ['evet', 'hayir'],
    },
    tehsilSeviyesi: {
        type: String,
        enum: ['ali', 'orta', 'peseTehsili'],
    },
    tehsilMuessisesi: {
        type: String,
        trim:true
    },
    ixtisas: {
        type: String,
        trim:true
    },
    kaynak: {
        type: String,
        enum: ['sosialMedia', 'tuib',  'jobBossAz'],
    },
    tecrubeTeyidi: {
        type: Boolean,
        required: true,
    },

    
});

const Form = mongoose.model("Form", formSchema)

export default Form;