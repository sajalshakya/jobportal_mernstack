
import React, { useState } from 'react'
import axios from 'axios';
import ErrorMessage from '../components/ErrorMessage';
import { useNavigate } from "react-router-dom";
import Spinner from '../components/Spinner';

const EmployerLogin = () => {
  const navigate = useNavigate();

  const[is_submitting, setIsSubmitting]= useState(false)
  const[error, setError] = useState(null)
  const [payload, setPayload] = useState({
    company_email:"email@email.com",
  })

  const handleChange = (event) => {
    
    setPayload({...payload, [event.target.name]: event.target.value })
    setError([...error.filter(el => el.param !==event.target.name),{param:[event.target.name], msg: ""}])

  }

  const handleSubmit = (event) => {
    setIsSubmitting(true)
    event.preventDefault();
    console.log();
    axios.post('http://localhost:8000/api/employer-login',payload).then(res => {
      console.log({ res });
      navigate("/")
    }).catch(err =>{ 
      console.log({ err });
      setIsSubmitting(false)
      if(err.response.status === 401){
        setError(err.response.data.msg)  
      }else if(err.response.status === 400){
        setError(err.response.data.errors[1].msg)  
      }
    })

  }
  
  
  return (
    <div>
        <h1>Login</h1>
        {
          error
          &&
          <div class="alert alert-danger" role="alert">
            {error}
          </div>
        }
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="company_email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="company_email" name = "company_email" onChange={handleChange} value={payload.company_email}/>

          </div>
          <div className="mb-3">  
            <label htmlFor="passowrd" className="form-label">Passowrd</label>
            <input type="password" className="form-control" id="password" name = "password" onChange={handleChange} />

          </div>
          <button type="submit"  className="btn btn-primary" disabled = {is_submitting? true: false}>{
            is_submitting
            &&
            <Spinner/> 
          }
          Submit</button>
        </form>
    </div>
  )
}
export default EmployerLogin;