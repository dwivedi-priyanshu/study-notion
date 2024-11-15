import React from 'react'
import Template from '../Components/Template'
import loginImg from "../assets/login.png"

function Login({setIsLoggedIn}) {
  return (
    <Template
        title="Welcome Back"
        desc1="Buid skills for today,tommorow and beyond"
        desc2="Education to future proof your carrer"
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
        />
  )
}

export default Login