const express=require('express');
const bodyparser=require('body-parser');
const path=require('path');
const Studentdata=require('./database/studentdata')
const Teacherdata=require('./database/teacherdata')
require("./database/mongoose_connection")

const port=8000;

const app=express();

app.use(express.static("public"));

app.use(bodyparser.urlencoded({
  extended:true
})
)

app.use(express.json());

let mainfolder=path.join(__dirname,"../")

app.get('/',(req,res)=>{
res.sendFile(mainfolder+"/index.html")
})
app.get('/index.html',(req,res)=>{
res.sendFile(mainfolder+"/index.html")
})

app.get('/register.html',(req,res)=>{
  res.sendFile(mainfolder+"/register.html")
})

app.get('/login.html',(req,res)=>{
  res.sendFile(mainfolder+"/login.html")
})

app.get('/teachers.html',(req,res)=>{
  res.sendFile(mainfolder+"/teachers.html")
})

app.get('/Teacher-register.html',(req,res)=>{
  res.sendFile(mainfolder+"/Teacher-register.html")
})

app.get('/5-9th.html',(req,res)=>{
  res.sendFile(mainfolder+"/5-9th.html")
})

app.get('/10th.html',(req,res)=>{
  res.sendFile(mainfolder+"/10th.html")
})

app.get('/11-12th.html',(req,res)=>{
  res.sendFile(mainfolder+"/11-12th.html")
})

app.get('/individual.html',(req,res)=>{
  res.sendFile(mainfolder+"/individual.html")
})



app.post("/register.html",(req,res)=>{
  let reqstddata= new Studentdata(req.body);
  reqstddata.save();
  res.send("regsuccess");
} )

app.post("/Teacher-register.html",(req,res)=>{
  let reqteadata= new Teacherdata(req.body);
  reqteadata.save();
  res.send("regsuccess");
} )

app.listen(port,()=>{
  console.log('listening on port 8000')
})
