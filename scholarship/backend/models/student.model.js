const mongoose = require('mongoose');
var bcryptjs = require('bcryptjs')
const studentSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  date:{
    type: Date,
    default:Date.now
  },
  previousMarks:{
    type: Number,
    required: true
  },
  rollno:{
    type: Number,
    required: true
  }
  // Add more fields as needed
});

studentSchema.pre("save", async function(next) {

  if(!this.isModified("password")) return next(); //checks if password field of User model is modified

  this.password = await bcryptjs.hash(this.password, 10)
  next()

})

studentSchema.methods.isPasswordCorrect = async function(password){
  return await bcryptjs.compare(password, this.password)
}

studentSchema.methods.generateAccessToken = function(){
  return jwt.sign(
      {
          _id: this._id,
          email: this.email,
          username: this.username,
          fullName: this.fullName
      },
      process.env.ACCESS_TOKEN_SECRET, 
      {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
  )
}

studentSchema.methods.generateRefreshToken = function(){
  return jwt.sign(
      {
          _id: this._id,
          
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
          expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
  )
}

module.exports = mongoose.model('Student', studentSchema);
