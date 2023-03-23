const express=require('express');

const router=express.Router();

const products=[];
router.get('/',(req,res,next)=>{
  res.render('landingPage.ejs',{pageTitle:'Main-Page'});
})



router.get('/users',(req,res,next)=>{
res.render('outputPage.ejs',{pageTitle:'All Users',users:products});
})

router.post('/users',(req,res,next)=>{
products.push(req.body);
console.log(req.body.name);
res.redirect('/users');
})

module.exports=router;