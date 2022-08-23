'use strict';
// http://localhost:5001/deletSectorsDataHendler?sectorid=62ffb810528105ee33ef10e6&mainSector=62ffb810528105ee33ef10e7&idx=0
const {mainsectorModel, admainModel} = require('../Models/Schemh')


async function deletSectorsDataHendler(req, res) {

    let sectorid = req.query.sectorid;
        let mainSectorid = req.query.mainSectorid;
    console.log(sectorid, mainSectorid)
    

    mainsectorModel.findById(mainSectorid,(err,data)=>{
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