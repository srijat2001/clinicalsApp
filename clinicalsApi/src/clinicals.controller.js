import dao from './clinicals.dao';
import mongodb from 'mongodb';
import mongoose from 'mongoose';

exports.getOne = (req,res)=>{
    dao.get({patient:req.params.patientId},(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
}

exports.create = (req,res)=>{
    const clinical = req.body;
    dao.create(clinical,(err,result)=>{
        if(err) throw err;
        res.send("Clinical Data created");
    })
}
exports.getAll = (req,res)=>{
    dao.get({},(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
}
exports.delete = (req,res)=>{
    dao.delete({patient:req.params.patientId},(err,result)=>{
        if(err) throw err;
        res.send("Deleted Successfully");
    })
}