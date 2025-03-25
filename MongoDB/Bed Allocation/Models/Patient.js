import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    roomNumber:{
        type: Number,
        required: true
    },
    bedNumber:{
        type: Number,
        required: true
    }
})

export const Patient =  mongoose.model('Patient', PatientSchema);