import { useState } from "react"
import React from 'react'
import axios from "axios"
import {useLocation, useNavigate} from 'react-router-dom'
const UpdateScholarship = () => {
    const {state} = useLocation();
    console.log(state);
    const [scholarshipform, setScholarship] = useState({
        amount:state.amount,
        deadline: state.deadline,
        desc: state.desc,
        name: state.name,
        numberofstudents: state.numberofstudents
    })
    const navigate = useNavigate()
    const location = useLocation()
    const sholarshipId = location.pathname.split("/")[2]
    console.log((sholarshipId));

    const handleChange = (e)=>{
        setScholarship(prev=>({...prev, [e.target.name]:e.target.value}))
      };

      const handleSubmit = async e =>{
        e.preventDefault();
    
        try{
           await axios.put("http://localhost:8010/scholarship/"+ sholarshipId, scholarshipform).then(res=>alert(`${res.data.message}`));
           navigate("/institute")
        }catch(err){
          alert(err)
        }
    
      }
  return (
   <>
    <div className="container">
    <h1 style={{color:'black'}}>Update Scholarship</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Scholarship Name"
        required="" value={scholarshipform.name} onChange={handleChange}
      />
      <input type="number" name="amount" placeholder="Total Amount" required="" value={scholarshipform.amount} onChange={handleChange}/>
      
      <input
        type="number"
        name="numberofstudents"
        placeholder="Number of Students"
        required="" value={scholarshipform.numberofstudents} onChange={handleChange}
      />
      <label htmlFor="deadline">Deadline</label>
      <input type="date" name='deadline' placeholder='deadline' value={scholarshipform.deadline} onChange={handleChange}/>
      <input type="text" name='desc' placeholder='description' value={scholarshipform.desc} onChange={handleChange} />
      
      <input type="submit" defaultValue="Update" />
    </form>
    
  </div>
   
   </>
  )
}

export default UpdateScholarship