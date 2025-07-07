import React, { useEffect } from 'react'
import '../asssets/css/landing.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
const Landing = () => {
  const {state} = useLocation();
  useEffect(()=>{
    
  },state)
  const navigate = useNavigate()
  console.log(state);
  return (
    <>
    
  <header>
    <div className="logo">
      <img src="/images/lng.png" alt="Logo" />
    </div>
    <div className="">
      <div className="header-links">
        <a href="C:\Users\SAJIDA\Desktop\Html Files\HTMl\home.html">Home</a>
        
        <Link to='/scholarships'>Scholarships</Link>
        <Link to='/contact'>Contact Us</Link>
        <a href="C:\Users\SAJIDA\Desktop\Html Files\HTMl\home.html">About</a>
        {/* <a href="C:\Users\SAJIDA\Desktop\Html Files\HTMl\year.html">Years</a> */}
      </div>
      {!state?(
        <div className="dropdown">
        <button style={{color:'white'}} className="dropbtn">More</button>
        <div className="dropdown-content">
        <Link to="/studentlogin">Student Register/Login</Link>
        <Link to="/institutelogin">Institute Register/Login</Link>
        </div>
      </div>
      ):<div className="dropdown"><button onClick={navigate("/studentlogin")} style={{padding:'10px'}}><Link to='studentlogin'>Logout</Link></button></div>}
      
      
    </div>
  </header>
  <section id="about">
    <div className="container">
      <h2>About</h2>
      <p>
        Our organization is dedicated to providing educational opportunities for
        female students, enabling them to achieve their academic and
        professional goals. Through our scholarship program, we aim to break
        barriers and empower young women to pursue excellence in their chosen
        fields.
      </p>
      <img
        src="/images/About.jpg"
        width={500}
        height={600}
        alt="About Image"
      />
    </div>
  </section>
  <section id="mission">
    <div className="container">
      <h2>Mission</h2>
      <p>
        Our mission is to empower and uplift young women through education by
        providing accessible and impactful scholarship opportunities. We are
        committed to fostering a supportive community where every girl has the
        chance to fulfill her potential and make a meaningful impact in her
        community and beyond.
      </p>
    </div>
  </section>
  <section id="student-counter">
    <div className="container">
      <h2>Student Counter</h2>
      {/* Live counter content goes here */}
      <p>
        Number of female students awarded scholarships:{" "}
        <span id="counter">0</span>
      </p>
      <img
        src="/images/studcount.jpg"
        alt="Student Counter Image"
      />
    </div>
  </section>
  <section id="sign-in-up">
    <div className="container">
      <h2>Register/Login</h2>
      {/* Sign in/sign up buttons */}
      
      <button style={{marginBottom:'10px'}}>
          <Link style={{color:'white'}} to='/register/student'>Student Login</Link>
        </button>
        <button>
          <Link style={{color:'white'}} to='/register/institute'>Institute Login</Link>
        </button>
      
      <div className="after-buttons">
        <p>
          Unlock exclusive benefits by signing up or logging in! Gain access to
          personalized recommendations, track your progress, and engage with a
          supportive community of learners. Don't miss out on the opportunity to
          take your learning experience to the next level. Join us today!
        </p>
      </div>
    </div>
  </section>
  <footer>
    <div className="container">{/* Footer content goes here */}</div>
  </footer>
  <footer>
    <h4>
      © 2024 Scholarship Team. All rights reserved. CC belongs to the team.
    </h4>
  </footer>
</>

    
  )
}

export default Landing