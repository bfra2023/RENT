import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'
import '../styles/logsign.css'

function Signup() {

  const [values, setValues] = useState({ name: '', email: '', password: ''});
  const [errors, setErrors] = useState({});

  const navigate = useNavigate()

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }


const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(Validation(values))
    if(errors.name === '' && errors.email === '' && errors.password === ''){
        axios.post('http://localhost:5000/signup', values)
            .then(res => {
              navigate('/login')
            }).catch(err => {
              console.log(err)
            })
    }
}

  return (
    <div className = 'body'>
      <div className = 'bg-white w-25 p-3 rounded'>
        <h2>Sign up</h2>
        <form action = '' onSubmit = {handleSubmit}>
            <div className = 'mb-3'>
                <label htmlFor = 'name'><strong>Name</strong></label>
                <input 
                    type = 'text'
                    name = 'name' 
                    placeholder = 'Enter name' 
                    className = 'form-control'
                    onChange = {handleInput} 
                />

                {errors.name && <span className = 'text-danger'> {errors.name}</span>}
            </div>
            
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

            <button type = 'submit' className = 'btn btn-primary  w-100 '>Sign up</button>
            
            <p>Agree terms and services</p>

             <Link to = '/' className = 'btn btn-default border  w-100 bg-light  text-decoration-none'>Log in</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup