const { model, Schema } = require('../connections');

const mySchema = new Schema({
    email : {type : String, unique : true},
    password : {type : String, required : true},
    city : {type : String, default : 'Unknown'},
    createdAt :  {type :  Date, default : Date.now}
})

module.exports = model('users', mySchema);