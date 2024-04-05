import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { useTitle } from '../customHook/customHooks'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {

  const navigate = useNavigate()

  const title = useTitle()
  const [userData, setUserData] = useState({
    user_name: "",
    email: "",
    mobile: "",
    password: "",
    repassword: ""
  })


  // for user register data  collect
  function getUserInfo(e) {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  // user register function
  async function RegisterUser(e) {
    e.preventDefault()
    if (userData.password !== userData.repassword) {
      toast("password not match")
    } else {

      let Obj = { ...userData }

      delete Obj.repassword
      try {

        let response = await fetch("http://localhost:8082/api/v1/user/register", {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(userData)
        })

        response = await response.json()

        if (response.status) {
          e.target.reset()
          toast(response.msg)
        } else {
          toast(response.msg)
        }

      } catch (error) {
        console.log(error.message);
      }

    }

  }

  // user login data collect

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  function getLoginAData(e) {
    const { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })
  }

  console.log(loginData);
  // user login function 

  async function loginUser(e) {
    e.preventDefault()

    try {
     let response = await fetch("http://localhost:8082/api/v1/user/login",{
      method : "POST",
      headers : {
        'Content-Type':'application/json'
      },
      body : JSON.stringify(loginData)
     })
     response = await response.json()
    console.log(response);
     if(response.status){
      localStorage.setItem('user_data',JSON.stringify(response.data))
      localStorage.setItem("id",response.data._id)
      toast(response.msg)
      navigate("/")
     }

    } catch (error) {
      console.log(error);
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
                        required
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
                        required
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
                        required
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
                        required
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
                        required
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
                <form onSubmit={loginUser}>
                <div className="row">
                  <div className="col-md-6">
                    <label>E-mail / Username</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="E-mail / Username"
                      onChange={getLoginAData}
                      name='email'
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Password</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Password"
                      onChange={getLoginAData}
                      name='password'
                      required
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Login End */}
    </>

  )
}
