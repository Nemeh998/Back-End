'use strict'

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const server = express();
// middleware
server.use(express.json())
server.use(cors());
const PORT = process.env.PORT || 3002;
// ===============================================
// handler
const homeHandler = require('./handelar/homeHandler')
server.get("/", homeHandler);
const getDataHendler = require('./handelar/getdataHandler')
server.get("/getDataHendler", getDataHendler);
const poststartupsDataHendler = require('./handelar/poststartupsDataHendler')
server.post("/postDataHendler", poststartupsDataHendler)
const postSectorsDataHendler = require('./handelar/postSectorsDataHendler')
server.post("/postSectorsDataHendler", postSectorsDataHendler)
const deletSectorsDataHendler = require('./handelar/deletSectorsDataHendler')
server.delete("/deletSectorsDataHendler", deletSectorsDataHendler)
const deletStartUpDataHendler=require('./handelar/deletStartUpDataHendler')
server.delete("/deletStartUpDataHendler",deletStartUpDataHendler)
// ================================================
// Schema
const {mainsectorModel, admainModel} = require('./Models/Schemh')

// =============================================
// seed 

function seedadminuser() {
    const adman = new admainModel({
        email: '98nemh@gmailcom',
        pass: '1234',


    })
    const mainsector = new mainsectorModel({
        mainSectorName: 'JORDAN MAP',
        sectors: [
            {
                subSectorname: "data",
                subSectorLogo: "data",
                subDesignColor: "data",
                subParentCategoryName: "data",
                startup: [{
                    startupName: 'addd',
                    LogoImage: 'data2',
                    city: 'data2',
                    founderName: 'data2',
                    numberOfEmployees: 1,
                    yearOfEstablishment: 1,
                    websiteURL: 'data2',
                    emailAddress: 'data2'
                }]
            },
            {
                subSectorname: "newcompany",
                subSectorLogo: "newcompany",
                subDesignColor: "newcompany",
                subParentCategoryName: "newcompany",
                startup: [{
                    startupName: 'new2',
                    LogoImage: 'new2',
                    city: 'new2',
                    founderName: 'new2',
                    numberOfEmployees: 1,
                    yearOfEstablishment: 1,
                    websiteURL: 'new2',
                    emailAddress: 'new2'
                }, {
                    startupName: 'new2',
                    LogoImage: 'new2',
                    city: 'new2',
                    founderName: 'new2',
                    numberOfEmployees: 1,
                    yearOfEstablishment: 1,
                    websiteURL: 'new2',
                    emailAddress: 'new2'
                }],
            }
        ]

    })
    adman.save();
    mainsector.save()
}

// seedadminuser()

// npm stat after seed
server.listen(PORT, () => {
    console.log(`listing to port ${PORT}`)
})


