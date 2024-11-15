import React from 'react'
import Template from '../Components/Template'
import signupImg from "../assets/signup.png"

function Signup({setIsLoggedIn}) {
  return (
    <Template 
        title="Join the millions learning to code with Studynotion"
         desc1="Buid skills for today,tommorow and beyond"
        desc2="Education to future proof your carrer"
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        />
  )
}

export default Signup