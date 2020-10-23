//import book model 
Account = require('../models/AccountsModel'); 
const path = require('path')



//Handle view all accounts 

exports.viewall=(req,res)=>{
    Account.get((err,account)=>{
        if(err){
            res.json({
                status:"error",
                message:err,
            })
        }
        res.json({
            status:"success",
            message:"account retrieved successfully",
            data : account
        })
    })
}
//user : { firstname , lastname , email , password }
//Handle Create book actions 

exports.new = (req,res)=>{
    var account = new Account(); 
    account.f_name= req.body.f_name? req.body.f_name: account.f_name ; 
    account.l_name = req.body.l_name; 
    account.email = req.body.email; 
    account.password = req.body.password; 

    //save the Account and check for err 
    account.save((err)=>{
        if (err) res.json(err)
        let dir =path.normalize(__dirname+'/..')
        res.sendFile(dir+'/routes/res.html')
    })
}


//Handle view Account info 

exports.view = (req,res)=>{

    Account.findById(req.params.account_id,(err,account)=>{
        if(err)res.send(err)

        res.json({
            message:"1 account found!",
            data:account,
        })
    })
}

//Handle update Account info 


exports.update=(req,res)=>{
    Account.findById(req.params.account_id,(err,account)=>{
        if(err)res.send(err)
        account.f_name= req.body.f_name? req.body.f_name: account.f_name ; 
        account.l_name = req.body.l_name; 
        account.email = req.body.email; 
        account.password = req.body.password; 

        //save the update and check for error 
        account.save((err)=>{
            if(err)res.json(err)

            res.json({
                message:"account info updated!",
                data :account
            })
        })
    })
}

//Handle delete Account 

exports.delelte = (req,res)=>{
    Account.deleteOne({
        _id:req.params.account_id
    },(err,account)=>{
        if (err)res.send(err)
        res.json({
            status:"success",
            message:"account deleted!",
            
        })
    })
}