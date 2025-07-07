const Institute = require('../models/institute.model');
const Scholarships = require('../models/scholarship.model')
const Student = require("../models/student.model")
var bcryptjs = require('bcryptjs')
var jwt = require('jsonwebtoken');
var bcryptjs
const ApiError = require("../utils/ApiError")
// Controller functions
const register = async (req, res) => {
  // Extract input values from request body
    const { institutename, email, password, type, location } = req.body;

    // Perform validation on input values
    if (!institutename || !email || !password || !type || !location) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if institute with the same email already exists
    Institute.findOne({ email })
        .then(existingInstitute => {
            if (existingInstitute) {
                return res.status(400).json({ message: 'Institute with this email already exists' });
            }

            // Hash password
            bcryptjs.hash(password, 10)
                .then(hashedPassword => {
                    // Create new Institute instance
                    const newInstitute = new Institute({
                        institutename,
                        email,
                        password: hashedPassword,
                        type,
                        location
                    });

                    // Save the institute to the database
                    newInstitute.save()
                        .then(institute => {
                            res.status(201).json({ message: 'Institute registered successfully', institute });
                        })
                        .catch(error => {
                            res.status(500).json({ message: 'Failed to register institute', error });
                        });
                })
                .catch(error => {
                    res.status(500).json({ message: 'Failed to hash password', error });
                });
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal server error', error });
        })
};

const login = async (req, res) => {
  console.log(req.body);
  // Extract email and password from request body
    const { email, password } = req.body;

    // Perform validation on input values
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find institute by email in the database
    Institute.findOne({ email })
        .then(institute => {
            // Check if institute exists
            if (!institute) {
                return res.status(404).json({ message: 'Institute not found' });
            }

            // Compare password
            bcryptjs.compare(password, institute.password)
                .then(match => {
                    if (!match) {
                        return res.status(401).json({ message: 'Invalid password' });
                    }

                    // If password matches, generate JWT token
                    const token = jwt.sign({ instituteId: institute._id }, 'your-secret-key', { expiresIn: '1h' });

                    res.status(200).json({ message: 'Login successful', token });
                })
                .catch(error => {
                    res.status(500).json({ message: 'Internal server error', error });
                });
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal server error', error });
        });

};

const logout = async (req, res) => {
  // Implement user logout logic
};

const getScholarships = async(req, res) =>{
    const scholarships = await Scholarships.find();
    res.status(200).json(scholarships);
}

const getStudents = async(req, res)=>{
    const students = await Student.find();
    res.status(200).json(students)
}
module.exports = {
  register,
  login,
  logout,
  getScholarships,
  getStudents
};
