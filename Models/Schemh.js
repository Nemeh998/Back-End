// شغال ع هاد البورت 
// محجوز عليه 
// اخر سلاش اسم داتا بيس
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comp')



// creat collection
const admainSchemh = new mongoose.Schema({
    email: String,
    pass: String,
})
const startupsSchema = new mongoose.Schema({
    startupName: String,
    LogoImage: String,
    city: String,
    founderName: String,
    numberOfEmployees: Number,
    yearOfEstablishment: Number,
    websiteURL: String,
    emailAddress: String
})
const sectorsSchema = new mongoose.Schema({
    subSectorname: String,
    subSectorLogo: String,
    subDesignColor: String,
    subParentCategoryName: String,
    startup: [startupsSchema],
})

const mainsectorSchemh = new mongoose.Schema({
    mainSectorName: String,
    sectors: [sectorsSchema]
})
// like object
const admainModel = mongoose.model('admain', admainSchemh)
const startupsModel = mongoose.model('startups', startupsSchema)
const sectorsModel = mongoose.model('sectors', sectorsSchema)
const mainsectorModel = mongoose.model('mainsector', mainsectorSchemh)

module.exports = {
    mainsectorModel,
    admainModel
}