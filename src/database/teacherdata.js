const mongoose = require('mongoose');


const teacherschema=new mongoose.Schema({
  name:{
    type:String,
  },
  email:{
    type:String,
    unique:true
  },
  num:{
    type:Number,
    required:true
  },
  addr:{
    type:String,
    required:true
  },
  qual:{
    type:String,
    required:true
  },
  qual:{
    type:String,
    required:true
  },
  exp:{
    type:String,
    required:true
  },
  ssub:{
    type:String,
    required:true
  },

})

const Teacherdata=new mongoose.model('Teacherdata',teacherschema);
module.exports=Teacherdata;
