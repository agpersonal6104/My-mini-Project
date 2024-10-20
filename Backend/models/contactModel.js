const { model, Schema } = require('../connections');

const contactSchema = new Schema({
    firstName: {type:String, required: true},
    lastName : {type : String, required : true},
    email : {type : String,required: true},
    phoneNumber : {type : String, required:true},
    details: {type:String, required:true},
    createdAt :  {type :  Date, default : Date.now}
})

module.exports = model('contacts', contactSchema);