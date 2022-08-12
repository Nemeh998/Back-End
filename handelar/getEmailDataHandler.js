const {mainsectorAdmain,admainModel}=require('../Models/Schemh')
function getEmailDataHendler (req,res){
    // find(object, callback function)
    let email1=req.query.mainSectorName1
    admainModel.find({email:email1},function(error,email){
    if(error){
        console.log('error in getting data',error)
    
        } else{
            console.log(email) 
    
    res.send(mainsector[0])
        }

}
)
}
module.exports=getDataHendler;