'use strict';

const {mainsectorModel, admainModel} = require('../Models/Schemh')


async function deletSectorsDataHendler(req, res) {

    let sectorid = req.query.sectorid;//62f22dfd576a22d20767bb60
        let mainSector = req.query.mainSector;//62f22dfd576a22o20767bb60
    console.log(sectorid, mainSector)
    console.log("sectorid")

    mainsectorModel.findById(mainSector,(err,data)=>{
    if(err){
        res.send(err)
    }else{
        console.log(data,"data sector")

   data.sectors.splice(sectorid,1)
data.save()
res.send(data.sectors)
    }
})



}
module.exports = deletSectorsDataHendler