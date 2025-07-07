import React from 'react'
import "../asssets/css/landing.css"
import { Link } from 'react-router-dom'
const Contactus = () => {
  return (
    <>
    <body>
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
    <div className="containerr">
  <h1>Contact Us</h1>
  <ul className="contact-info">
    <li>
      <img src="/images/email.png" alt="Email" />
      <a href="mailto:info@example.com">info@example.com</a>
    </li>
    <li>
      <img src="/images/phone.jpg" alt="Phone" />
      <a href="tel:+1234567890">+1 (234) 567-890</a>
    </li>
    <li>
      <img src="images/Linkedin.png" alt="LinkedIn" />
      <a href="https://www.linkedin.com/in/example">LinkedIn Profile</a>
    </li>
    <li>
      <img src="images/instagram.jpg" alt="Instagram" />
      <a href="https://www.instagram.com/example">Instagram Profile</a>
    </li>
    <li>
      <img src="images/X.png" alt="X Profile" />
      <a href="https://www.example.com/xprofile">X Profile</a>
    </li>
  </ul>
</div>

</body>

    
    </>
  )
}

export default Contactus