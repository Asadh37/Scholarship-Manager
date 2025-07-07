const express = require('express');
const router = express.Router();
const institutionController = require('../controllers/institute.controller');

// Routes for institution registration, login, CRUD operations, etc.
router.post('/register', institutionController.register);
router.post('/login', institutionController.login);
router.post('/getScholarships', institutionController.getScholarships)
router.post('/getstudents', institutionController.getStudents)
// router.get('/', institutionController.getAllInstitutions);
// router.get('/:id', institutionController.getInstitutionById);
// router.put('/:id', institutionController.updateInstitution);
// router.delete('/:id', institutionController.deleteInstitution);

module.exports = router;
