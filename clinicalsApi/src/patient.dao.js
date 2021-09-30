import mongoose from 'mongoose';
import patientSchema from './patient.model';

patientSchema.statics = {
    get : function(query,cb){
        this.find(query,cb);
    },
    create : function(data,cb){
        const patient = new this(data);
        patient.save();
    },
    update : function(query,Updatedata,cb){
        this.findOneAndUpdate(query,{$set:Updatedata},cb);
    },
    delete : function(query,cb){
        this.findOneAndDelete(query,cb);
    }
}

const patientModel = mongoose.model("Patient",patientSchema,'patient');
module.exports = patientModel;