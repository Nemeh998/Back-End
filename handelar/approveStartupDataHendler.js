'use strict';
const {mainsectorModel, admainModel} = require('../Models/Schemh')


  function approveStartupDataHendler(req,res){
// need to parse
// maddleware to decode any request body to json
    console.log("data",req.body)
console.log("data",req.query)
let{
      item1id,
      itemstartupid,
      itemsectorsid, 
      }
      =  req.body
    //   console.log('==============================')
    //   console.log(item1id,"item1id",itemstartupid,"itemstartupid","itemsectorsid",itemsectorsid ,"idx",idx)
console.log('==========================================')
mainsectorModel.findById(item1id,(err,data)=>{
    if(err){
        res.send(err)
    }else{
        // console.log(data)

data.sectors.map(sectoritem=>{
if(sectoritem._id.toString()===itemsectorsid){
    
    sectoritem.startup.forEach((startup)=> {
        if(startup._id.toString() == itemstartupid){
            startup.approved = true;
            data.save();
            res.send(sectoritem.startup);
        }
    })
    
}
    
   
 
})
} 

}) 
// res.send();
  }
module.exports=approveStartupDataHendler;
