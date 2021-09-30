import mongoose from 'mongoose';
import clinicalSchema from './clinicals.model';

clinicalSchema.statics = {
    get : function(query,cb){
        this.find(query,cb);
    },
    create : function(data,cb){
        const clinical = new this(data);
        clinical.save();
    },
    delete : function(query,cb){
        this.findOneAndDelete(query,cb);
    }
}

const clinicalModel = mongoose.model("Clinicals",clinicalSchema,"clinicals");
module.exports = clinicalModel;