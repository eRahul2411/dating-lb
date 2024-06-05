const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("view engine","hbs");
app.set("views","./views");

app.get("/home",(req,res)=>{
    res.render("home.hbs");
});

app.get("/contact",(req,res)=>{
    res.render("contact.hbs");
});

app.get("/about",(req,res)=>{
    res.render("about.hbs");
});
app.listen(5000,()=>{
    console.log("Listening...");
});