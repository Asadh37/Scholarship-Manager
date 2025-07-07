const studentModel = require('../models/student.model');
const Student = require('../models/student.model');
var bcryptjs = require('bcryptjs')
var jwt = require('jsonwebtoken');
var bcryptjs
const ApiError = require("../utils/ApiError")
// Controller functions
const register = async (req, res) => {
  const { fullname, email, rollno, password, qualification, date, previousMarks } = req.body;
  const existedUser = await Student.findOne({
    $or: [{rollno}, {email}]
  })
  if(existedUser){
    return res.status(409).json({ message: 'User Already Exists' });
  }
  if (!fullname || !email || !rollno || !password || !qualification || !date || !previousMarks) {
    return res.status(400).json({ message: 'All fields are required' });
}

const newStudent = await new Student({
  fullname,
  email,
  rollno,
  password,
  qualification,
  date,
  previousMarks
});
newStudent.save()
.then(student => {
    res.status(201).json({ message: 'Student registered successfully', student });
})
.catch(error => {
    res.status(500).json({ message: 'Failed to register user', error });
    console.log(error);
});
};

const login = async (req, res) => {
      // Extract email and password from request body
      const { email, password } = req.body;
      console.log(req.body);

      // Perform validation on input values
      if (!email || !password) {
          return res.status(400).json({ message: 'Email and password are required' });
      }
  
      // Find user by email in the database
      Student.findOne({ email })
          .then(user => {
              // Check if user exists
              if (!user) {
                  return res.status(404).json({ message: 'User not found' });
              }
  
              // Compare password
              bcryptjs.compare(password, user.password)
                  .then(match => {
                      if (!match) {
                          return res.status(401).json({ message: 'Invalid password' });
                      }
  
                      // If password matches, generate JWT token
                      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
  
                      res.status(200).json({ message: 'Login successful', token });
                  })
                  .catch(error => {
                      res.status(500).json({ message: 'Internal server error', error });
                  });
          })
          .catch(error => {
              res.status(500).json({ message: 'Internal server error', error });
          });
}

const logout = async (req, res) => {
  // Implement user logout logic
};

module.exports = {
  register,
  login,
  logout,
};
