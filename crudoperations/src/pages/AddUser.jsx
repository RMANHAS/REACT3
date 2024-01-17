import React, { useState } from 'react'
import Layouts from '../component/layout/Layouts'
import axios from 'axios'

export default function AddUser() {

  const [name,setName]=useState("")
  const [email,setemail]=useState('')
  const [city,setcity]=useState('')
  


async function handleSubmit(e){
e.preventDefault()
console.log('hello')
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
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
  </div>

</form>
</div>
        </div>
      </div>
   

    </Layouts>
  )
}
