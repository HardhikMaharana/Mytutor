const mongoose=require('mongoose');
const Studentdata=require('./studentdata.js')

mongoose.connect('mongodb://localhost:27017/Studentdatabase')
.then(()=>{console.log("succsess")})
.catch((err)=>{console.log(err)})
