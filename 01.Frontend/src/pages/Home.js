import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';



export default function Home() {
    const [students,setStudents]=useState([])

    useEffect(()=>{
        loadStudents();
    },[]);

    const {id}=useParams()

    const loadStudents= async()=>{
        const load= await axios.get("http://localhost:8080/students")
        setStudents(load.data)
    };

    const deleteStudent= async(id)=>{
      await axios.delete(`http://localhost:8080/student/${id}`)
      loadStudents()
    }

  return (
    <div className='container'>
        <div className='py-4'>
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Usn</th>
      <th scope="col">Name</th>
      <th scope="col">Email Id</th>
      <th scope='col'>Operation</th>
    </tr>
  </thead>
  <tbody>
    {
        students.map((student,count)=>(
            <tr>
            <th scope="row" key={count}>{count+1}</th>
            <td>{student.usn}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>
                <Link className='btn btn-primary btn-outline-light mx-2'
                to={`/viewstudent/${student.id}`}
                >View</Link>
                <Link className='btn btn-light mx-2'
                 to={`/editstudent/${student.id}`}
                 >Edit</Link>
                <button className='btn btn-danger mx-2'
                onClick={()=>
                  deleteStudent(student.id)
                }
                >Delete</button>
            </td>
          </tr>
        ))
    }
    
  </tbody>
</table>
        </div>
      
    </div>
  )
}
