import React, {useState} from 'react'
import '../asssets/css/landing.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useNavigate, useLocation} from "react-router-dom"
const StudentLogin = () => {
  const {state} = useLocation();
  console.log(state);
  const navigate = useNavigate()
  const [studentLoginData, setStudentLoginData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentLoginData({ ...studentLoginData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    const {email, password} = studentLoginData
    if(email && password){
      await axios.post("http://localhost:8010/students/login", studentLoginData)
      .then(res=>alert(`${res.data.message}`)).catch(rej=>alert(rej?.response?.data?.message))
      navigate('/', {state:{studentLoginData}})
    }else{
      alert("Invalied Input")
    }
  }
  return (
    <>
  <header>
    <div className="logo">
      <img src="images/lng.png" alt="Logo" />
    </div>
  </header>
  <div className="containerl">
    <h1 style={{ border: "2px solid #FFFFFF", padding: 5, color:'black' }}>Student Login</h1>
    <form  onSubmit={handleSubmit} >
      <input type="email" name="email" placeholder="Email" required="" value={studentLoginData.email} onChange={handleChange}/>
      <input
        type="password"
        name="password"
        placeholder="Password"
        required=""
        value={studentLoginData.password}
        onChange={handleChange}
      />
      <input type="submit" defaultValue="Login" />
    </form>
    <div className="signup-link">
      Don't have an account? <Link to="/register/student">Register</Link>
    </div>
  </div>
</>

  )
}

export default StudentLogin