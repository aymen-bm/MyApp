var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.get('/',function(req,res){
      res.render('addtxt');

});
var failMsg="EMPTY TEXT";
var listInp =[];
router.post('/', function(req,res,next){

    var x = req.body.userTxt;
    if(x == ""){
  res.render('addtxt',{failMsg:failMsg,listInp:listInp});
    }
    else
   listInp.push(x);
  res.render('addtxt',{listInp:listInp});

});
router.get('/delete/:index',function(req,res){
 if (req.params.index != '') {
 listInp.splice(req.params.index, 1);
  res.render('addtxt',{listInp:listInp}); }});

    
    
     
module.exports = router;
    
     