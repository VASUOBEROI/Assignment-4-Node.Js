const express=require('express');

const router=express.Router();

const products=[];
router.get('/',(req,res,next)=>{
  res.render('landingPage.ejs',{pageTitle:'Main-Page'});
})



router.get('/users',(req,res,next)=>{

})

router.post('/users',(req,res,next)=>{
products.add(req.body.name);

res.redirect('/');
})

module.exports=router;