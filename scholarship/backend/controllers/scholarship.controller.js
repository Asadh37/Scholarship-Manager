const Scholarship = require('../models/scholarship.model');

// Controller functions
const getAllScholarships = async (req, res) => {
  try {
    const scholarships = await Scholarship.find();
    res.json(scholarships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createScholarship = async (req, res) => {
  console.log(req.body);
      // Extract input values from request body
      const { name, amount, numberofstudents, deadline, desc } = req.body;

      // Perform validation on input values
      if (!name || !amount || !numberofstudents || !deadline || !desc) {
          return res.status(400).json({ message: 'All fields are required' });
      }
  
      // Create new Scholarship instance
      const newScholarship = new Scholarship({
          name,
          amount,
          numberofstudents,
          deadline,
          desc
      });
  
      // Save the scholarship to the database
      newScholarship.save()
          .then(scholarship => {
              res.status(201).json({ message: 'Scholarship created successfully', scholarship });
          })
          .catch(error => {
              res.status(500).json({ message: 'Failed to create scholarship', error });
          });
}
const deleteScholarship = async(req, res) =>{
  try {
    const { id } = req.params;
    console.log(id);
    const scholarship = await Scholarship.findById(id);

    if (!scholarship) {
      return res.status(404).json({ message: 'Scholarship not found' });
    }

    await scholarship.deleteOne();
    res.status(200).json({ message: 'Scholarship deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
    
    
}
  

const updateScholarship = async(req, res) => {
  try{
    const { id } = req.params;
    const { name, amount, numberofstudents, deadline, desc } = req.body;
    const scholarship = await Scholarship.findByIdAndUpdate(id, { name, amount, numberofstudents, deadline, desc});

    res.json({ message: 'Scholarship Updated successfull' });
    
  }catch(error){
    res.status(500).json({ message: error.message });
  }
}

  

// Implement other controller functions (getScholarshipById, updateScholarship, deleteScholarship) similarly

module.exports = {
  getAllScholarships,
  createScholarship,
  deleteScholarship,
  updateScholarship
  // Add other controller functions here
};
