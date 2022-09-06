'use strict';
const {mainsectorModel, admainModel} = require('../Models/Schemh')


  function updateStartupdata(req,res){
// need to parse
// maddleware to decode any request body to json
    console.log("data",req.body)
console.log("data",req.query)
let{startupName ,
      LogoImage,
      city,
      founderName,
      numberOfEmployees,
      yearOfEstablishment,
      websiteURL,
      emailAddress,
      item1id,
      itemstartupid,
      itemsectorsid, 
      idx}=req.body
      console.log('==============================')
      console.log(item1id,"item1id",itemstartupid,"itemstartupid","itemsectorsid",itemsectorsid ,"idx",idx)
console.log('==========================================')
mainsectorModel.findById(item1id,(err,data)=>{
    if(err){
        res.send(err)
    }else{
        // console.log(data)

data.sectors.map(sectoritem=>{
if(sectoritem._id.toString()===itemsectorsid){
    
    sectoritem.startup.forEach((startup)=>{   

        if(startup._id.toString() == itemstartupid){
            startup.startupName=startupName,
            startup.LogoImage=LogoImage,
            startup.city=city, 
            startup.founderName=founderName, 
            startup.numberOfEmployees=numberOfEmployees, 
            startup.yearOfEstablishment=yearOfEstablishment,
            startup.websiteURL=websiteURL,
            startup.emailAddress=emailAddress,
            startup.approved= true
    
        
            data.save()
            res.send(sectoritem.startup)
        }


        })
    
   
 
    }
    })

}

}) 


  }
module.exports=updateStartupdata;
// // Update Cat
// function updateCat(req, res) {
//     const id = req.params.id;
//     const {data} = req.body;

//     CatModel.findByIdAndUpdate(id, data, {new: true}).then(record => {
//         res.send(record);
//     }).catch(err => {
//         console.log(err)
//         res.status(500).send(err.message);
//     })