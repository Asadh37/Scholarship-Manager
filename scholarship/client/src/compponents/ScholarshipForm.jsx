import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
const ScholarshipForm = () => {
  const [scholarshipform, setScholarshipData] = useState({
    name:"",
    amount:"",
    numberofstudents:"",
    deadline:"",
    desc:"",
  });
  

  const handleSubmit = async(e) => {
    e.preventDefault()
    const {name, amount, numberofstudents, deadline, desc} = scholarshipform
    if(name && amount && numberofstudents && deadline && desc){
      await axios.post("http://localhost:8010/scholarship/create", scholarshipform)
      .then(res=>alert(`${res.data.message}`)).catch(rej=>alert(rej?.response?.data?.message))
    }else{
      alert("invalied input")
    }

}


  const handleChange = (event) => {
    const { name, value } = event.target;
    setScholarshipData({ ...scholarshipform, [name]: value });
    
  };
  

  return (
    <>
    <header>
    <div className="logo">
    <img src="/images/lng.png" alt="Logo" />
    </div>
  </header>
  <div className="container">
    <h1 style={{color:'black'}}>Create A Scholarship</h1>
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
      
      <input type="submit" defaultValue="Login" />
    </form>
    
  </div>
    </>
  )
}

export default ScholarshipForm