//localhost:5001/getDataHendler?email1=JORDAN MAP
const {mainsectorModel,admainModel}=require('../Models/Schemh')
function getDataHendler (req,res){
mainsectorModel.find({approved:true},function(error,mainSectordata){
    console.log(mainSectordata)
    if(error){
        console.log('error in getting data',error)
    res.states(400).json(error)
        } else{
            console.log(mainSectordata,"get data") 
    
   mainSectordata.forEach((mainSector)=> {
    if(mainSector.sectors && mainSector.sectors.length > 0){
        mainSector.sectors.forEach((sector)=> {
            if(sector.startup && sector.startup.length > 0){
                sector.startup = sector.startup.filter((start)=> start.approved);
            }
            
   });
    }
    });
    
    res.send(mainSectordata)
        }

}
)
}
module.exports=getDataHendler;