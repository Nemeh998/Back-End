
'use strict';
const {mainsectorModel, admainModel} = require('../Models/Schemh')

 async function deletStartUpDataHendler(req,res) {

    let sectorid = req.query.sectorid;
    let mainSectorid = req.query.mainSectorid;
    let startupid = req.query.startupid;
    let idx = req.query.idx;
    console.log(startupid, "startupid")
    console.log("sectorid")

let main=mainsectorModel.findById(mainSectorid)
console.log('======================================================')
let sub=main.collection('sectors')
const a={_id:sectorid}
let qury=sub.find(a)

let a7=qury.collection('startup')
let find2=a7.findOneAndDelete({_id:startupid})
console.log(a7)
console.log("=======================")
// console.log(qury)
// console.log(sub)
// data.sectors.map(sectorsItem=>{
//     if(sectorsItem._id.toString()===sectorid){

//        //  console.log(sectorsItem,"sectorsItem")

//         sectorsItem.startup.map(startupItem=>{
//            if(startupItem._id.toString()===startupid){
//                console.log(startupItem,"startupItem")
//             const rm=startupItem[idx].remove()
//                }
//         })
//     }
   
// })
         
    //     }

    // })
    
    
}

module.exports = deletStartUpDataHendler;








