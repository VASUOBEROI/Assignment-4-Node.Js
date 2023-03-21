const path=require('path');    // Node-Core Module.

const express=require('express');  // Prod-Dependencies
const bodyparser=require('body-parser'); // Prod-Dependencies.

const mainRouter=require('./routes/mainRouter');

const app=express();


// Setting up the Template-Engine
app.set('view engine','ejs');
app.set('views','views');    


// Middleware to Parse Incoming Requests.
app.use(bodyparser.urlencoded({extended:false}));

// Middleware to Serve Static Css/Js Files.
app.use(express.static(path.join(__dirname,'public')));

app.use(mainRouter);





// Route Handler for All Requests 
app.use('/',(req,res,next)=>{
  res.status(404).send('<h1>Page Not found </h1>');
})



app.listen(3000);
// listening on Port 3000