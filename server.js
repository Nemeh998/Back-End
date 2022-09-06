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
const getDataHendlerAdmin = require('./handelar/getdataHandlerAdmin')
server.get("/getDataHendlerAdmin", getDataHendlerAdmin);
const getDataHendler = require('./handelar/getdataHandler');
server.get("/getDataHendler", getDataHendler);
const poststartupsDataHendler = require('./handelar/poststartupsDataHendler')
server.post("/postDataHendler", poststartupsDataHendler)
const postSectorsDataHendler = require('./handelar/postSectorsDataHendler')
server.post("/postSectorsDataHendler", postSectorsDataHendler)
const poststartupsDataEndUserHendler = require('./handelar/poststartupsDataEndUserHendler')
server.post("/poststartupsDataEndUserHendler", poststartupsDataEndUserHendler)
const approveStartupDataHendler = require('./handelar/approveStartupDataHendler')
server.post("/approveStartupDataHendler", approveStartupDataHendler);
const deletSectorsDataHendler = require('./handelar/deletSectorsDataHendler')
server.delete("/deletSectorsDataHendler", deletSectorsDataHendler)
const deletStartUpDataHendler=require('./handelar/deletStartUpDataHendler')
server.delete("/deletStartUpDataHendler",deletStartUpDataHendler)
const updateStartupdata=require('./handelar/updateStartupdata')
server.put("/updateStartupdata",updateStartupdata)
const getUserDataHendler=require('./handelar/getUserDataHendler')
server.get('/getUserDataHendler',getUserDataHendler)

// ===============================================
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
        mainSectorName: 'JORDAN MAP'},
        )
    adman.save();
    mainsector.save()
}

// seedadminuser()

// npm stat after seed
server.listen(PORT, () => {
    console.log(`listing to port ${PORT}`)
})


