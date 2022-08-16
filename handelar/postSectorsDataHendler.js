
'use strict';

const {mainsectorModel, admainModel} = require('../Models/Schemh')


async function postSectorsDataHendler(req, res) {
    // need to parse
    // maddleware to decode any request body to json
    console.log("data", req.body)
    console.log("data", req.query)

    let {subSectorname,
        subSectorLogo,
        subDesignColor,
        mainSectorid} = req.body
    // 

    console.log(subSectorname, subSectorLogo, subDesignColor, mainSectorid)
    mainsectorModel.findById(mainSectorid, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            console.log(data)

            data.sectors.push({
                subSectorname: subSectorname,
                subSectorLogo: subSectorLogo,
                subDesignColor: subDesignColor,
                mainSectorid: mainSectorid

            })

            data.save()
            res.send(data.sectors)



        }
    })

}
module.exports = postSectorsDataHendler;
