import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StudentForm from './compponents/StudentForm';
import InstituteForm from './compponents/InstituteForm';
import ScholarshipForm from './compponents/ScholarshipForm';
import Landing from './compponents/Landing';
import Contactus from './compponents/Contactus';
import StudentLogin from './compponents/StudentLogin';
import InstituteLogin from './compponents/InstituteLogin';
import Scholarships from './compponents/Scholarships';
import InstituteHomePage from './compponents/InstituteHomePage';
import StudentsList from './compponents/StudentsList';
import UpdateScholarship from './compponents/UpdateScholarship';
function App() {
  return (

    <Router>
      <Routes>
        
      <Route path='/studentslist' element={<StudentsList/>}></Route>

      <Route path="/update/:id" element={<UpdateScholarship/>}/>
      
        <Route path='/institute' element={<InstituteHomePage/>}></Route>
      <Route path='/scholarshipform' element={<ScholarshipForm/>}></Route>
        <Route path='/scholarships' element={<Scholarships/>}></Route>
        <Route path='/studentlogin' element={<StudentLogin/>}></Route>
        <Route path='/institutelogin' element={<InstituteLogin/>}></Route>
      <Route path="/" element={<Landing/>} />
      <Route path="/contact" element={<Contactus/>} />
        <Route path="/register/student" element={<StudentForm />} />
        <Route path="/register/institute" element={<InstituteForm />} />
        <Route path="/add/scholarship" element={<ScholarshipForm />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    
  );
}

export default App;
