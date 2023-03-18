import React, { useState } from 'react'
import axios from 'axios';
import ErrorMessage from '../components/ErrorMessage';

const EmployerSignup = (props) => {

  const[error, setError] = useState([])

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
    person_contact: 1234556789,
    terms: false
  })

  const handleChange = (event) => {
    
    setPayload({...payload, [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value })
    setError([...error.filter(el => el.param !=event.target.name),{param:[event.target.name], msg: ""}])

  }

  const handleSubmit = (event) => {


    event.preventDefault();
    console.log();
    axios.post('http://localhost:8000/api/employer-signup',payload).then(res => {
      console.log({ res });
    }).catch(err =>{ 
      console.log({ err });
      if(err.response.status === 400){
        setError(err.response.data.errors)      
      }
    })

  }

  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="company_email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="company_email" name = "company_email" onChange={handleChange} value={payload.company_email}/>
            <ErrorMessage errors={error} name="company_email" />
          </div>
          <div className="mb-3">  
            <label htmlFor="passowrd" className="form-label">Passowrd</label>
            <input type="password" className="form-control" id="password" name = "password" onChange={handleChange} />
            <ErrorMessage errors={error} name="password" />
          </div>
          <div className="mb-3">
            <label htmlFor="company_name" className="form-label">Company Name </label>
            <input type="text" className="form-control" id="company_name" name = "company_name" onChange={handleChange} value={payload.company_name}/>
            <ErrorMessage errors={error} name="company_name" />
          </div>
          <div className="mb-3">
            <label htmlFor="website" className="form-label">Website</label>
            <input type="text" className="form-control" id="website" name = "website" onChange={handleChange} value={payload.website}/>
            <ErrorMessage errors={error} name="website" />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" name = "address" onChange={handleChange} value={payload.address}/>
            <ErrorMessage errors={error} name="address" />
          </div>
          <div className="mb-3">
            <label htmlFor="company_contact" className="form-label">Company Contact</label>
            <input type="number" className="form-control" id="company_contact" name = "company_contact" onChange={handleChange} value={payload.company_contact}/>
            <ErrorMessage errors={error} name="company_contact" />
          </div>
          <div className="mb-3">
            <label htmlFor="company_industry" className="form-label">Company Industry</label>
            <select className="form-select" aria-label="Default select example" onChange={handleChange} value={payload.company_industry}>
              <option value="Account">Account</option>
              <option value="Bank">Bank</option>
              <option value="IT">IT</option>
              <option value="Government">Government</option>
            </select>
            <ErrorMessage errors={error} name="company_industry" />
          </div>
          
          <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" name = "description" onChange={handleChange} value={payload.description} rows="3"></textarea>
            <ErrorMessage errors={error} name="description" />
          </div>
          <div className="mb-3">
            <label htmlFor="person_name" className="form-label">Contact Person Name</label>
            <input type="text" className="form-control" id="person_name" name = "person_name" onChange={handleChange} value={payload.person_name}/>
            <ErrorMessage errors={error} name="person_name" />
          </div>
          <div className="mb-3">
            <label htmlFor="person_email" className="form-label">Contact Person Email</label>
            <input type="text" className="form-control" id="person_email" name = "person_email" onChange={handleChange} value={payload.person_email}/>
            <ErrorMessage errors={error} name="person_email" />          
          </div>
          <div className="mb-3">
            <label htmlFor="person_contact" className="form-label">Mobile</label>
            <input type="text" className="form-control" id="person_contact" name = "person_contact" onChange={handleChange} value={payload.person_contact}/>
            <ErrorMessage errors={error} name="person_contact" />
          </div>
          <div className="mb-3">
          <input className="form-check-input" type="checkbox" value="" name="terms" id="terms" checked={payload.terms} onChange={handleChange}/>
          <label className="form-check-label" htmlFor="termsandcondition">
             agree to terms & condition
          </label>
          </div>
          <button type="submit"  className="btn btn-primary" disabled={payload.terms? false:true}>Submit</button>
        </form>
    </div>
  )
}
export default EmployerSignup;