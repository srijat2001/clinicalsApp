import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    age : Number,
    clinicals : [
        {
            clinical : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Clinicals'
            }
        }
    ]
})

module.exports = PatientSchema;