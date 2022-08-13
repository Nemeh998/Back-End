'use strict';

const {mainsectorModel, admainModel} = require('../Models/Schemh')


async function deletSectorsDataHendler(req, res) {

    let sectorid = req.query.sectorid;//62f22dfd576a22d20767bb60
        let mainSector = req.query.mainSector;//62f22dfd576a22o20767bb60
    console.log(sectorid, mainSector)
    console.log("sectorid")

    mainsectorModel.findById(mainSector, (error, data) => {

console.log(data)
        if (error) {
            console.log('error in getting data', error)

        } else{


            // data.findOne(mainSector,(error,data)=>{
            //     console.log(data)
            // })
         //62f22dfd576a22d20767bb60=sectorid
                // item.findByIdAndRemove({_id:sectorid}, function(error, data) {
                //     console.log(data)
                
                
                // =============
            // })/
        }
    })



}


// .then(() => {

//     mainsectorModel.find({}, function(error, mainSectordata) {



//         console.log(mainSectordata)
//         if (error) {
//             console.log('error in getting data', error)

//         } else {
//             console.log(mainSectordata, "get data")

//             res.send(mainSectordata)
//         }
//     })

// })











module.exports = deletSectorsDataHendler