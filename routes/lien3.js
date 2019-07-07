var express = require('express');
var router = express.Router();

router.get('/' , function(req,res,next){
    res.render('lien3');
});
module.exports = router;