'use strict';
const {mainsectorModel, admainModel} = require('../Models/Schemh')


  function poststartupsDataHendler(req,res){
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
      Sectors,
      mainSectorName}=req.body
console.log(Sectors)
mainsectorModel.findById(mainSectorName,(err,data)=>{
    if(err){
        res.send(err)
    }else{
        console.log(data)

data.sectors.map(sectoritem=>{
if(sectoritem._id.toString()===Sectors){
    console.log(sectoritem)
    sectoritem.startup.push({
                    startupName:startupName,
                    LogoImage:LogoImage,
                     city:city, 
                      founderName:founderName, 
                      numberOfEmployees:numberOfEmployees, 
                      yearOfEstablishment:yearOfEstablishment,
                       websiteURL:websiteURL,
                        emailAddress:emailAddress
              
            })
    data.save()
    res.send(sectoritem.startup)
}
})

}
}) 


}

module.exports=poststartupsDataHendler;
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