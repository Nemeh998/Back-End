
'use strict';

const {mainsectorModel, admainModel} = require('../Models/Schemh')


function postSectorsDataHendler(req, res)
{
    // need to parse
    // maddleware to decode any request body to json
    console.log("data", req.body)
    console.log("data", req.query)

    let { LogoImage, city, emailAddres, founderName, numberOfEmployees, startupName, websiteURL, yearOfEstablishment, Sectors } = req.body


    mainsectorModel.findById({ _id: Sectors }, (error, SectorsData) =>
    {
        if (error)
        {
            res.send('cant find sectors')
        }
        else
        {

            console.log(SectorsData)
            // if (Sectors)
            //     console.log(SectorsData, 'befor save Data')

            // SectorsData[0].Sectors.push({
            //     startupName: startupName,
            //     LogoImage: LogoImage,
            //     city: city,
            //     founderName: founderName,
            //     numberOfEmployees: numberOfEmployees,
            //     yearOfEstablishment: yearOfEstablishment,
            //     websiteURL: websiteURL,
            //     emailAddress: emailAddres


            // })
            // SectorsData[0].save();
            // res.send(SectorsData[0].Sectors)
            // console.log(SectorsData, 'befor save Data')
        }
    })
}
module.exports = postSectorsDataHendler;