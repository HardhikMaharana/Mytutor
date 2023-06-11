const mongoose=require('mongoose');
const Teacherdata=require('./teacherdata.js')

mongoose.connect('mongodb://localhost:27017/Teacherdatabase')
.then(()=>{console.log("succsesst")})
.catch((err)=>{console.log(err)})
