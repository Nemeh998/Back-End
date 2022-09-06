
'use strict';
const {mainsectorModel, admainModel} = require('../Models/Schemh')

 async function deletStartUpDataHendler(req,res) {

    let sectorsId = req.query.sectorsId;
    let mainSectorid = req.query.mainSectorid;
    let startupid = req.query.startupid;

console.log("startupid",startupid)
    mainsectorModel.findById(mainSectorid,(err,data)=>{
        if(err){
            res.send(err)
        }else{
            // console.log(data)

data.sectors.map(sectoritem=>{
    if(sectoritem._id.toString()===sectorsId){
        sectoritem.startup.splice(startupid,1)
        console.log( sectoritem.startup)

        data.save()
        res.send(sectoritem.startup)
    }
})

    }
}) 
    
}

module.exports = deletStartUpDataHendler;








