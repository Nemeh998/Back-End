'use strict';
const {mainsectorModel, admainModel} = require('../Models/Schemh')


  function poststartupsDataHendler(req,res){
// need to parse
// maddleware to decode any request body to json
    console.log("data",req.body)
console.log("data",req.query)

let { mainSectorName,subDesignColor,addsubSectorname,subSectorLogo}=req.body


let a= mainsectorModel.findById(mainSectorName)
let b=a.collation('sectors');
let c=b.find({_id:Sectors})
// .startup= new startup=({
//                   startupName:startupName,
//                   LogoImage:LogoImage,
//                    city:city, 
//                     founderName:founderName, 
//                     numberOfEmployees:numberOfEmployees, 
//                     yearOfEstablishment:yearOfEstablishment,
//                      websiteURL:websiteURL,
//                       emailAddress:emailAddres
//     })

// startup.save();

console.log(c)
}

module.exports=poststartupsDataHendler;
// if(error){
//     res.send('cant find sectors')
// }
// else{

// if(Sectors)
    // console.log(SectorsData,'befor save Data')
    
//         SectorsData[0].Sectors.push({
//             startupName:startupName,
//             LogoImage:LogoImage,
//              city:city, 
//               founderName:founderName, 
//               numberOfEmployees:numberOfEmployees, 
//               yearOfEstablishment:yearOfEstablishment,
//                websiteURL:websiteURL,
//                 emailAddress:emailAddres
      
        
    // })
//          SectorsData[0].save();
//         res.send(SectorsData[0].Sectors)
//         console.log(SectorsData,'befor save Data')
// }