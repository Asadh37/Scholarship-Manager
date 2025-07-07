import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import {useLocation, useNavigate} from 'react-router-dom'
const InstituteForm = () => {
  const navigate = useNavigate()
  
  const [instituteFormData, setInstituteFormData] = useState({
    institutename:"",
    email:"",
    password:"",
    type:"",
    location:"",
  });

  const handleSubmit = async(e) => {
    e.preventDefault()
    const {institutename, email, password, type, location} = instituteFormData
    if(institutename && email && password && type && location){
      await axios.post("http://localhost:8010/institute/register", instituteFormData)
      .then(res=>alert(`${res.data.message}`)).catch(rej=>alert(rej?.response?.data?.message))
      navigate('/institutelogin')
    }else{
      alert("invalied input")
    }

}


  const handleChange = (event) => {
    const { name, value } = event.target;
    setInstituteFormData({ ...instituteFormData, [name]: value });
    
  };
  


  return (
    
    <>
  <header>
    <div className="logo">
    <img src="/images/lng.png" alt="Logo" />
    </div>
  </header>
  <div className="container">
    <h1 style={{color:'black'}}>Institute Registeration</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="institutename"
        placeholder="Institute Name"
        required="" value={instituteFormData.institutename} onChange={handleChange}
      />
      <input type="email" name="email" placeholder="Email" required="" value={instituteFormData.email} onChange={handleChange}/>
      <input
        type="password"
        name="password"
        placeholder="Password"
        required="" value={instituteFormData.password} onChange={handleChange}
      />
      <input
        type="text"
        name="type"
        placeholder="Institute Type"
        required="" value={instituteFormData.type} onChange={handleChange}
      />
      <input type="text" name="location" placeholder="Location" required="" value={instituteFormData.location} onChange={handleChange} />
      
      <input type="submit" defaultValue="Login" />
    </form>
    <div className="signup-link">
      Already have an account? <Link 
      to="/institutelogin">Login</Link>
    </div>
  </div>
</>

    
    
  )
}

export default InstituteForm