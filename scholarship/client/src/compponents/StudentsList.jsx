import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "../asssets/css/table.css"
const StudentsList = () => {
  
  const [students, setStudents] = useState([])
  useEffect(()=>{
    const getStudents = async() => {
      try{
        const studentss = await axios.post("http://localhost:8010/institute/getstudents")
        setStudents([...studentss.data])
        console.log(students);
      }catch(err){
        console.log(err);
      }
    }
    getStudents()
  },[])
  console.log(students);
  return (
    <>
    <div className="container">
  <h1>List of Students applied</h1>
  <table className="rwd-table">
    <tbody>
      
      <tr>
        <th>Student Name</th>
        <th>Rool Number</th>
        <th>Email</th>
        <th>Qualification</th>
        <th>Appllied Date</th>
        <th>Previous Percentage</th>
      </tr>
      {students.map((stu, index)=>(
        <tr key={index}> 
        <td data-th="Supplier Code">{stu.fullname}</td>
        <td data-th="Supplier Name">{stu.rollno}</td>
        <td data-th="Invoice Number">{stu.email}</td>
        <td data-th="Invoice Date">{stu.qualification}</td>
        <td data-th="Due Date">{stu.date}</td>
        <td data-th="Net Amount">{stu.previousMarks}</td>
      </tr>
      ))}
    </tbody>
  </table>

</div>

    
    </>
  )
}

export default StudentsList