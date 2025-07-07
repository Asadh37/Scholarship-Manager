const mongoose = require('mongoose');

const institutionSchema = new mongoose.Schema({
  institutename: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password:{
    type:String,
    required: true,
},
type:{
  type: String,
  required:true
},
location:{
  type: String,
  required: true
}

  // Add more fields as needed
});

module.exports = mongoose.model('Institution', institutionSchema);
