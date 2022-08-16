
'use strict';
const {mainsectorModel, admainModel} = require('../Models/Schemh')

 async function deletStartUpDataHendler(req,res) {

    let sectorid = req.query.sectorid;
    let mainSectorid = req.query.mainSectorid;
    let startupid = req.query.startupid;


    mainsectorModel.findById(mainSectorid,(err,data)=>{
        if(err){
            res.send(err)
        }else{
            console.log(data)

data.sectors.map(sectoritem=>{
    if(sectoritem._id.toString()===sectorid){
        console.log(sectoritem)
        sectoritem.startup.splice(sectorid,1)
        data.save()
        res.send(sectoritem.startup)
    }
})

    }
}) 
    
}

module.exports = deletStartUpDataHendler;








