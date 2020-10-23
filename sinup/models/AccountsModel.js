const mongoose = require('mongoose')


//user : { firstname , lastname , email , password }
//setup schema 
var UserSchema = mongoose.Schema({
    f_name :{type:String,require:true},
    l_name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    add_date:{type:Date,default:Date.now}
})

//Export Accounts Model
var Accounts = module.exports = mongoose.model('accounts',UserSchema); 

module.exports.get = (callback,limit)=>{
    Accounts.find(callback).limit(limit);
}