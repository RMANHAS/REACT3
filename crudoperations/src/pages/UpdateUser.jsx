import React, { useState } from 'react'
import Layouts from '../component/layout/Layouts'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function UpdateUser() {

  
  const {id}= useParams()
  const users = useSelector(state=>state.users.users)
  const existingUser =users.find(u=>u.id == id)

  console.log(existingUser)
 
  const [name,setName]=useState(existingUser.name)
  const [email,setemail]=useState(existingUser.email)
  const [city,setcity]=useState(existingUser.city)
  


async function handleUpdate(e){
e.preventDefault()
// console.log('hello')
const result = await axios.post(` http://localhost:3030/users`,{name,city,email})
console.log(result)

  }

  return (
    <Layouts > 
      <div className="row table-border ">
        <div className="col-md-4 offset-4">
          <div className='card p-3'>
        <form>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" value={name}  onChange={(e)=>setName(e.target.value)} />
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>setemail(e.target.value)} />
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">city</label>
    <input type="text" className="form-control" value={city} onChange={(e)=>setcity(e.target.value)} />
  
  </div>

  <div className="mb-3 form-check">
  <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
  </div>

</form>
</div>
        </div>
      </div>
   

    </Layouts>
  )
}
