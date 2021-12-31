const express=require('express');
const { render } = require('express/lib/response');
const app =express()
const path=require('path')
const hbs=require('hbs');
const port=process.env.PORT || 3000;

// public static path
// console.log(path.join(__dirname,"../public"));

// nodemon app.js -e js,hbs

const static_path=path.join(__dirname,"../public");
const templates_path=path.join(__dirname,'../templates/views');
const partial_path=path.join(__dirname,"../templates/partials")
// console.log(templates_path);

app.set('view engine', 'hbs');
app.set('views',templates_path);
hbs.registerPartials(partial_path);
app.use(express.static(static_path));



app.get("",(req,res)=>{
    // res.send("Welcome to my page");
    res.render('index.hbs');

});

app.get("/about",(req,res)=>{
    // res.send("Welcome to my about page");
    res.render('about.hbs');
});

app.get("/weather",(req,res)=>{
    // res.send("Welcome to my weather page");
    res.render('weather.hbs');
});

app.get("*",(req,res)=>{
    res.render('404error',{
        errorMsg:'Oops! page not found'
    })
});
app.listen(port,()=>{
    console.log('Listening to port ', port);
});