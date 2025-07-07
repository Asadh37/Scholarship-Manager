const express = require('express');
const router = express.Router();
const scholarshipController = require('../controllers/scholarship.controller');

// Routes for scholarship CRUD operations, application, etc.
router.post('/create', scholarshipController.createScholarship);
// router.get('/', scholarshipController.getAllScholarships);
// router.get('/:id', scholarshipController.getScholarshipById);
router.put('/:id', scholarshipController.updateScholarship);
router.delete('/:id', scholarshipController.deleteScholarship);
// router.post('/:id/apply', scholarshipController.applyForScholarship);
// router.get('/:id/applications', scholarshipController.getApplicationsForScholarship);

module.exports = router;
