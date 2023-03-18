const Router = require('express').Router;
const router = Router();

router.get('/', function(req,res){
	res.render('./notes/create')
})

module.exports = router