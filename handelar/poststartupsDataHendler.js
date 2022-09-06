'use strict';
const {mainsectorModel, admainModel} = require('../Models/Schemh')


  function poststartupsDataHendler(req,res){
// need to parse
// maddleware to decode any request body to json
    console.log("data",req.body)
console.log("data",req.query)
console.log(req.query,"body")
let{startupName ,
      LogoImage,
      city,
      founderName,
      numberOfEmployees,
      yearOfEstablishment,
      websiteURL,
      emailAddress,
      Sectors,
      mainSectorName}=req.body
// console.log(Sectors)
mainsectorModel.findById(mainSectorName,(err,data)=>{
    if(err){
        res.send(err)
    }else{
        console.log(data)

data.sectors?.map(sectoritem=>{
if(sectoritem._id.toString()===Sectors){
    console.log(sectoritem)
    sectoritem.startup?.push({
                    startupName:startupName,
                    LogoImage:LogoImage,
                     city:city, 
                      founderName:founderName, 
                      numberOfEmployees:numberOfEmployees, 
                      yearOfEstablishment:yearOfEstablishment,
                       websiteURL:websiteURL,
                        emailAddress:emailAddress,
                        approved: true
              
            })
    data.save()
    res.send(sectoritem.startup)
}
})

}
}) 


}

module.exports=poststartupsDataHendler;
