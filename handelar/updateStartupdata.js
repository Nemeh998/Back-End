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
    
    sectoritem.startup.splice(itemstartupid,1,{   
        startupName:startupName,
            LogoImage:LogoImage,
             city:city, 
              founderName:founderName, 
              numberOfEmployees:numberOfEmployees, 
              yearOfEstablishment:yearOfEstablishment,
               websiteURL:websiteURL,
                emailAddress:emailAddress})
        data.save()
        res.send(sectoritem.startup)
    }
    
   
 
}
)
}

    

}) 


  }
module.exports=updateStartupdata;
// if(error){
//     res.send('cant find sectors')
// }
// else{

// if(Sectors)
    // console.log(SectorsData,'befor save Data')
    
//         SectorsData[0].Sectors
//          SectorsData[0].save();
//         res.send(SectorsData[0].Sectors)
//         console.log(SectorsData,'befor save Data')
// }