const mongoose = require('mongoose');


const studentschema=new mongoose.Schema({
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
  teach:{
    type:String,
    required:true
  },
  time:{
    type:String,
    required:true
  }

})

const Studentdata=new mongoose.model('Studentdata',studentschema);
module.exports=Studentdata;
