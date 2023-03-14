import React, { useState } from 'react'
import axios from 'axios';
const EmployerSignup = (props) => {
  const [payload, setPayload] = useState({
    company_email:"email@email.com",
    password: "password",
    company_name:"name",
    website: "www.website.com",
    address: "address",
    company_contact: 123456790,
    company_industry: "IT",
    description: "description",
    person_name: "name",
    person_email: "email@email.com",
    person_contact: 1234556789
  })

  const handleChange = (event) => {
    
    setPayload({...payload, [event.target.name]: event.target.value })

  }

  const handleSubmit = (event) => {


    event.preventDefault();
    console.log();
    axios.post('https://jobportal-mernstack.onrender.com/api/employer-signup',payload).then(res => {
      console.log({ res });
    }).catch(err =>{ 
      console.log({ err });
    })

  }

  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="company_email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="company_email" name = "company_email" onChange={handleChange} value={payload.company_email}/>
          </div>
          <div className="mb-3">
            <label htmlFor="passowrd" className="form-label">Passowrd</label>
            <input type="password" className="form-control" id="passowrd" name = "passowrd" onChange={handleChange} value={payload.passowrd}/>
          </div>
          <div className="mb-3">
            <label htmlFor="company_name" className="form-label">Company Name </label>
            <input type="text" className="form-control" id="company_name" name = "company_name" onChange={handleChange} value={payload.company_name}/>
          </div>
          <div className="mb-3">
            <label htmlFor="website" className="form-label">Website</label>
            <input type="text" className="form-control" id="website" name = "website" onChange={handleChange} value={payload.website}/>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" name = "address" onChange={handleChange} value={payload.address}/>
          </div>
          <div className="mb-3">
            <label htmlFor="company_contact" className="form-label">Company Contact</label>
            <input type="number" className="form-control" id="company_contact" name = "company_contact" onChange={handleChange} value={payload.company_contact}/>
          </div>
          <div className="mb-3">
            <label htmlFor="company_industry" className="form-label">Company Industry</label>
            <select class="form-select" aria-label="Default select example" onChange={handleChange} value={payload.company_industry}>
              <option value="Account">Account</option>
              <option value="Bank">Bank</option>
              <option value="IT">IT</option>
              <option value="Government">Government</option>
            </select>
          </div>
          
          <div class="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" name = "description" onChange={handleChange} value={payload.description} rows="3"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="person_name" className="form-label">Contact Person Name</label>
            <input type="text" className="form-control" id="person_name" name = "person_name" onChange={handleChange} value={payload.person_name}/>
          </div>
          <div className="mb-3">
            <label htmlFor="person_email" className="form-label">Contact Person Email</label>
            <input type="text" className="form-control" id="person_email" name = "person_email" onChange={handleChange} value={payload.person_email}/>
          </div>
          <div className="mb-3">
            <label htmlFor="person_contact" className="form-label">Mobile</label>
            <input type="text" className="form-control" id="person_contact" name = "person_contact" onChange={handleChange} value={payload.person_contact}/>
          </div>
          <div className="mb-3">
          <input class="form-check-input" type="checkbox" value="" id="termsandcondition"/>
          <label class="form-check-label" for="termsandcondition">
             agree to terms & condition
          </label>
          </div>
          <button type="submit"  className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
export default EmployerSignup;