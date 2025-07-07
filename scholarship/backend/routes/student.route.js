const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

// Routes for student registration, login, CRUD operations, etc.
router.post('/register', studentController.register);
router.post('/login', studentController.login);
// router.get('/', studentController.getAllStudents);
// router.get('/:id', studentController.getStudentById);
// router.put('/:id', studentController.updateStudent);
// router.delete('/:id', studentController.deleteStudent); 

module.exports = router;
