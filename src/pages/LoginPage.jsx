import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { useTitle } from '../customHook/customHooks'
import { toast } from 'react-toastify'

export default function LoginPage() {

  const title = useTitle()
  const [userData,setUserData] = useState({
    user_name:"",
    email:"",
    mobile:"",
    password:"",
    repassword : ""
  })

  function getUserInfo(e){
     const {name,value} = e.target
      setUserData({...userData,[name]:value})
  }

console.log(userData);

 async function RegisterUser(e){
      e.preventDefault()
      if(userData.password !== userData.repassword){
         toast("password not match")
      }
     delete userData.repassword
     try {

      let response = await fetch("http://localhost:8082/api/v1/user/register",{
        method : "POST",
        headers : {
          'Content-Type':"application/json",
          'Accept' : "*/*"
        },
        body : JSON.stringify(userData)
      })

      response = await response.json()
    
      if(!response.status){
        toast("user registration failed")
      }

      toast(response.msg)

      e.target.reset()
     } catch (error) {
      console.log(error.message);
     }
      

  }

  useEffect(() => {
    title("Login")
  }, [title])
  return (
    <>
      <BreadCrumb />
      {/* Login Start */}
      <div className="login">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="register-form">
                <form onSubmit={RegisterUser}>
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Name</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="User Name"
                        name='user_name'
                        onChange={getUserInfo}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>E-mail</label>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="E-mail"
                        name='email'
                        onChange={getUserInfo}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Mobile No</label>
                      <input
                        className="form-control"
                        type="tel"
                        placeholder="Mobile No"
                        name='mobile'
                        onChange={getUserInfo}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Password</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Password"
                        name='password'
                        onChange={getUserInfo}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Retype Password</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Password"
                        name='repassword'
                        onChange={getUserInfo}
                      />
                    </div>
                    <div className="col-md-12">
                      <button className="btn">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login-form">
                <div className="row">
                  <div className="col-md-6">
                    <label>E-mail / Username</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="E-mail / Username"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Password</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="newaccount"
                      />
                      <label className="custom-control-label" htmlFor="newaccount">
                        Keep me signed in
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className="btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Login End */}
    </>

  )
}
