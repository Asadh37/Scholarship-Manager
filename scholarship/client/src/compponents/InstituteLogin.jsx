import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import {useLocation, useNavigate} from 'react-router-dom'
const InstituteLogin = () => {
  const navigate = useNavigate()
  const [instituteLoginData, setInstituteLoginData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInstituteLoginData({ ...instituteLoginData, [name]: value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
    const {email, password} = instituteLoginData
    if(email && password){
      await axios.post("http://localhost:8010/institute/login",instituteLoginData)
      .then(res=>alert(`${res.data.message}`));
      navigate("/institute",{state:{instituteLoginData}})
    }else{
      alert("Invalied Input")
    }
  }
  return (
    <>
    
    <>
  <header>
    <div className="logo">
      <img src="images/lng.png" alt="Logo" />
    </div>
  </header>
  <div className="container">
    <h1 style={{color:'black'}}>Institute Login</h1>
    <form onSubmit={handleSubmit}>
      
      <input type="email" name="email" placeholder="Email" required="" value={instituteLoginData.email}  onChange={handleChange}/>
      <input
        type="password"
        name="password"
        placeholder="Password"
        required="" value={instituteLoginData.password} onChange={handleChange}
      />
      <input type="submit" defaultValue="Login" />
      
    </form>
    <div className="signup-link">
      Don't have an account? <Link 
      to="/register/institute">Register</Link>
    </div>
  </div>
</>

    </>
  )
}

export default InstituteLogin