import React, {useState} from 'react'
import '../asssets/css/landing.css'
import { Link } from 'react-router-dom'
import axios from "axios"
import {useNavigate} from "react-router-dom"
const StudentForm = () => {
  const navigate = useNavigate()
  const [studentFormData, setStudentFormData] = useState({
    fullname:"",
    email:"",
    password:"",
    qualification:"",
    date:"",
    previousMarks:"",
    rollno:""
  });

  const handleSubmit = async(e) => {
      e.preventDefault()
  const {fullname, email, password, qualification, date, previousMarks, rollno} = studentFormData
if(fullname && email &&password &&rollno &&qualification && date && previousMarks){
  await axios.post("http://localhost:8010/students/register", studentFormData)
      .then(res=>alert(`${res.data.message}`)).catch(rej=>alert(rej?.response?.data?.message))
      
      navigate('/studentlogin')
}else{
  alert("Invalied Input")
}

  }
  
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentFormData({ ...studentFormData, [name]: value });
  };
  return (
    <>
    <>
  <header>
    <div className="logo">
      <img src="/images/lng.png" alt="Logo" />
    </div>
  </header>
  <div className="containerl">
    <h1 style={{color:'black'}}>Student Register</h1>
    
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullname" placeholder="Full Name" required="" value={studentFormData.fullname}  onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" required="" value={studentFormData.email}  onChange={handleChange} />
      <input
        type="number"
        name="rollno"
        placeholder="RollNumber"
        required="" value={studentFormData.rollno}  onChange={handleChange}  />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required="" value={studentFormData.password}  onChange={handleChange} />
      <input
        type="text"
        name="qualification"
        placeholder="Qualification"
        required="" value={studentFormData.qualification}  onChange={handleChange} />
      <input type="date" name="date" placeholder="Date of Birth" required="" value={studentFormData.date}  onChange={handleChange} />
      <input
        type="number"
        name="previousMarks"
        placeholder="Previous Educational Percentage"
        value={studentFormData.previousMarks}  onChange={handleChange}  />
        
      {/* <select name="identitycard" value={formData}  onChange={handleChange}>
        <option value="aadhar">Aadhar Card</option>
        <option value="passport">Passport</option>
        <option value="driverlicense">Driver's License</option>
      </select> */}
      <input type="submit" defaultValue="Sign Up" />
      <div className="signup-link">
      Already have an account? <Link 
      to="/studentlogin">Login</Link>
    </div>
    </form>
    
  </div>
</>

    
    </>
  )
}

export default StudentForm