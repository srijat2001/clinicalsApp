import dao from './patient.dao';

exports.getAll = (req,res)=>{
    dao.get({},(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
}
exports.getOne = (req,res)=>{
    dao.get({_id:req.params.id},(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
}
exports.create = (req,res)=>{
    const data = req.body;
    dao.create(data,(err,result)=>{
        if(err) throw err;
        res.send("Patient Data created");
    })
}
exports.update = (req,res)=>{
    const patient = {
        "age" : req.body.age
    }
    dao.update({_id:req.params.id},patient,(err,result)=>{
        if(err) throw err;
        res.send("Patient Data Updated");
    })
}
exports.delete = (req,res)=>{
    dao.delete({_id:req.params.id},(err,result)=>{
        if(err) throw err;
        res.send("Patient data deleted");
    })
}