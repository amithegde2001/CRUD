import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditStudent() {

  const navigate=useNavigate()
  const {id}=useParams()
  const [student,setStudent]=useState({
    "usn":"",
    "name":"",
    "username":"",
    "email":""
  })

  const{usn,name,username,email}=student

  const onInputChange=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value})
  }

  useEffect(()=>{
    loadStudent()
  },[]);

  const onSubmit= async (e)=>{
      e.preventDefault();
      await axios.put(`http://localhost:8080/student/${id}`,student)
      navigate("/");
  }

  const loadStudent=async()=>{
    const load=await axios.get(`http://localhost:8080/student/${id}`)
    setStudent(load.data)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
          <h2 className='text-center m-4'>Edit Student</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3'>
          <label htmlFor='usn' className='form-label'>Usn</label>
              <input
              type='text' 
              className='form-control' 
              placeholder='Enter the usn'
              name='usn' 
              value={usn}
              onChange={(e)=>onInputChange(e)}>
              </input>
              <label htmlFor='name' className='form-label'>Name</label>
              <input
              type='text' 
              className='form-control' 
              placeholder='Enter the name'
              name='name' 
              value={name}
              onChange={(e)=>onInputChange(e)}>
              </input>
              <label htmlFor='email' className='form-label'>Email</label>
              <input 
              type='text' 
              className='form-control' 
              placeholder='Enter the email'
              name='email' 
              value={email}
              onChange={(e)=>onInputChange(e)}
              >

              </input>
              <button type='submit' className='btn btn-primary text-center mt-4'>Add</button>
              <Link className='btn btn-danger text-center mt-4 ml-3' to={"/"}>Cancel</Link>
            
          </div>
          </form>
        
        </div>
      </div>
    </div>
  )
}
