import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const InstituteHomePage = () => {
  const {state} = useLocation();
  console.log(state);
  const [scholarship, setScholarship] = useState([])
  const [students, setStudents] = useState([])

  const handleDelete = async (id)=>{
    try {
      await axios.delete("http://localhost:8010/scholarship/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    
    const getScholarships = async () => {
      try{
        const scholarships = await axios.post('http://localhost:8010/institute/getScholarships');
    setScholarship([...scholarships.data])
    console.log(scholarship);
      } catch(err){
        console.log(err);
      }
    }
    getScholarships()
  },[])
  return (
    <>
    <div className="logo">
      <img src="/images/lng.png" alt="Logo" />
    </div>
    <div className="">
      <div style={{color:"white"}} className="header-links">
        <a style={{color:"white"}} href="C:\Users\SAJIDA\Desktop\Html Files\HTMl\home.html">Home</a>
        
        <Link style={{color:"white"}} to='/scholarshipform'>Create scholarship</Link>
        <Link style={{color:"white"}} to='/studentslist'>Applied Students</Link>
  
    </div>
    <div style={{display:'grid'}} className="">
      {
        scholarship.map((sch, index)=>(
          <div key={index} style={{width:'280px', height:"400px", backgroundColor:'purple', borderRadius:'10px' ,color:'white', margin:"10px", padding:"20px 10px"}} className="">
      <h3>{sch.name}</h3><hr />
      <p style={{overflow:'clip'}}>{sch.desc}</p>
      <hr />
      <p>{Date(sch.deadline) }</p>
      <hr />
      <p>{sch.amount}</p>
      <hr />
      <p>total students applied: 123</p>

      <button style={{padding:' 8px 12px', margin:'5px', cursor:'pointer', backgroundColor:'lightgreen'}}><Link to={`/update/${sch._id}`} state={sch}>Edit</Link></button>
      <button onClick={()=>{
        handleDelete(sch._id)
      }} style={{padding:'8px 12px', margin:'5px', cursor:'pointer', backgroundColor:'red'}}> Delete</button>
      </div> 
        ))
      }
      </div>
    
    </div>
    </>
  )
}

export default InstituteHomePage