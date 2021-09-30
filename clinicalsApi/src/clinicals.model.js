import mongoose from 'mongoose';

const clinicalSchema = new mongoose.Schema({
    componentName : String,
    componentvalue : String,
    patient : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Patient'
    }
})

module.exports = clinicalSchema;