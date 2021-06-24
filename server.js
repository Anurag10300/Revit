const express = require("express");
const sql  = require("mysql");

const app  = express();

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/login',function(req,res){
    res.sendFile(__dirname+'/login.html');
});

app.listen(3000,function(){
    console.log("Active at 3000");
});
