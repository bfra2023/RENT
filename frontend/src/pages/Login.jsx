import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'
import '../styles/logsign.css'

function Login() {

  const [values, setValues] = useState({ email: '', password: ''});
  const [errors, setErrors] = useState({});

  const navigate = useNavigate()

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }


const handleSubmit = (event) => {
  event.preventDefault()
  setErrors(Validation(values))
  if(errors.email === '' && errors.password === ''){
    axios.post('http://localhost:5000/login', values)
        .then(res => {
          if(res.data === 'Success'){
            navigate('/home')
          } else{
            alert('No record existed')
          }
        }).catch(err => {
          console.log(err)
        })
}
}

  return (
    
    <div className = 'body'>
      <div className = 'bg-white w-25 p-3 rounded'>
        <form action = '' onSubmit = {handleSubmit}>
            <div className = 'mb-3'>
                <label htmlFor = 'email'><strong>Email</strong></label>
                <input 
                    type = 'email' 
                    name = 'email'
                    placeholder = 'Enter email' 
                    className = 'form-control' 
                    onChange = {handleInput}
                />

                {errors.email && <span className = 'text-danger'> {errors.email}</span>}
            </div>
            
            <div className = 'mb-3'>
                <label htmlFor = 'password'><strong>Password</strong></label>
                <input 
                    type = 'password' 
                    name = 'password' 
                    placeholder = 'Enter password' 
                    className = 'form-control'
                    onChange = {handleInput} 
                />

                {errors.password && <span className = 'text-danger'> {errors.password}</span>}
            </div>

            <button type = 'submit' className = 'btn btn-primary  w-100 '>Log in</button>
            
            <p>Agree terms and services</p>

            <Link to = '/signup' className = 'btn btn-default border  w-100 bg-light  text-decoration-none'>Create account</Link>
        </form>
      </div>
    </div>
    
  )
}

export default Login