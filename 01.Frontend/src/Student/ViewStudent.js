import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function ViewStudent() {

  const [student,setStudent]=useState({
    usn:"",
    name:"",
    email:""
  })

  const {id}=useParams();

  const loadStudent=async()=>{
      const load=await axios.get(`http://localhost:8080/student/${id}`)
      setStudent(load.data)
  }
  

  useEffect(()=>{
      loadStudent(); 
  },[]);

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
          <h2 className='text-center m-4'>Student Details</h2>
          <div className='card'>
            <div className='card-header'>
              Details of student id : <b>{student.id}</b>
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <b>USN :</b> {student.usn}
                <li className='list-group-item'>
                <b>Name : </b>{student.name}
              </li>
              <li className='list-group-item'>
                <b>Email :</b> {student.email}
              </li>
              </li>
            </ul>
          </div>
          <Link className='btn btn-primary my-2 mt-4' to={"/"}>
            Home
          </Link>

        </div>
      </div>
    </div>
  )
  }
