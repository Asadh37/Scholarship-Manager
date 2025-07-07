import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
const Scholarships = () => {
  const [scholarship, setScholarship] = useState([])
  useEffect(()=>{
    const getScholarships = async () => {
      try{
        const scholarships = await axios.post('http://localhost:8010/institute/getScholarships');
    setScholarship([...scholarships.data])
    
      } catch(err){
        console.log(err);
      }
    }
    getScholarships()
  },[])
  console.log(scholarship);
  return (
    <>
  <header>
    <div className="logo">
      <img src="/images/lng.png" alt="Logo" />
    </div>
    <div className="">
      <div className="header-links">
      <Link to='/'>Home</Link>
        <Link to='/scholarships'>Scholarships</Link>
        <Link to='/contact'>Contact Us</Link>
        <a href="C:\Users\SAJIDA\Desktop\Html Files\HTMl\home.html">About</a>
        {/* <a href="C:\Users\SAJIDA\Desktop\Html Files\HTMl\year.html">Years</a> */}
      </div>
      <div className="dropdown">
        <button style={{color:'white'}} className="dropbtn">More</button>
        <div className="dropdown-content">
        <Link to="/studentlogin">Student Register/Login</Link>
        <Link to="/institutelogin">Institute Register/Login</Link>
        </div>
      </div>
    </div>
  </header>
  <div className="container">
    {scholarship.map((sch)=>(
      <div className="scholarship">
        <div className="">
        <h2>{sch.name}</h2>
        <p>description: {sch.desc} <br /> <span>lastdate: {sch.deadline}</span> <br /> <span>Total Amount: {sch.amount} <br /> <span>Total Students: {sch.numberofstudents}</span></span> <br /> <button onClick={()=>alert("Applied Sucessfully")}>Quick Apply</button></p>
        </div>
      </div>
      
    ))}
    
  </div>
</>

  )
}

export default Scholarships