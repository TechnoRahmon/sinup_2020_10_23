

const Router = require('express').Router();// import express router 
const accountControlller = require('../controllers/accountControlller') // import accountControlller 

//set default API response
Router.get('/',(req,resp)=>{
    
    resp.json({
        status:'Working',
        message:'This is the /api/ route!'
    })
})



// account routes

Router.route('/accounts')
.get(accountControlller.viewall)
    .post(accountControlller.new)
Router.route('/accounts/:account_id')
    .get(accountControlller.view)
    .patch(accountControlller.update)
    .put(accountControlller.update)
    .delete(accountControlller.delelte)

//export Router
module.exports = Router; 