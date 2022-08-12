//localhost:5001/getDataHendler?email1=JORDAN MAP
const {mainsectorModel,admainModel}=require('../Models/Schemh')
function getDataHendler (req,res){
mainsectorModel.find({},function(error,mainSectordata){
    console.log(mainSectordata)
    if(error){
        console.log('error in getting data',error)
    
        } else{
            console.log(mainSectordata,"get data") 
    
    res.send(mainSectordata)
        }

}
)
}
module.exports=getDataHendler;