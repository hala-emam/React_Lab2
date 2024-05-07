import React, { useState } from 'react'

import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
function Login() {
    const [showPassword, setShowPassword] =useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

       const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
     const login=(user)=>{
       console.log(user)
     }
    return (
        <>
        <div className="container ">
          <form className="w-75 h-100 mt-5 bg-primary p-3" onSubmit={handleSubmit(login)} >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="text"
                className={`form-control }`}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                {...register('email', { required: true ,pattern: /^[A-Za-z]{3,20}[0-9]{1,6}(@)(gmail| yahoo)(.com)$/i})}
              />
              {errors.email &&  <p  className="text-danger">Invalid email</p>}
             
              
            </div>
            <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <div className="input-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="form-control"
                                {...register('password', {
                                    required: true,
                                    minLength: 8,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                })}
                            />
                              <span
                                className="input-group-text"
                                onClick={togglePasswordVisibility}
                                style={{ cursor: 'pointer' }}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {errors.password && (
                            <p className="text-danger">
                                Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 special character, 1 number, and be at least 8 characters long.
                            </p>
                        )}
             </div>
  
            <button type="submit" className="btn btn-danger">
              Login
            </button>
          </form>
        </div>
      </>
    )
}

export default Login
