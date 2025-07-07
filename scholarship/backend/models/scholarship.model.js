const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
  // institution: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Institution',
  // },
  name: {
    type: String,
    required: true
  },
  amount:{
    type:Number,
    required:true
  },
  numberofstudents:{
    type: Number,
    required: true
  },
  deadline:{
    type: Date,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
  
  // Add more fields as needed
});

module.exports = mongoose.model('Scholarship', scholarshipSchema);
