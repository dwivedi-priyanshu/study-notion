import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from "react-hot-toast"

function LoginForm({setIsLoggedIn}) {
    const navigate=useNavigate()
    const [formData, setformData] = useState({ email: "", password: "" })
    const [showPassword,setshowPassword]=useState(false)

    function changeHandler(event) {
        setformData((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }

    function sumbitHandler(event){
        event.preventDefault()
        setIsLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard")


    }
    return (
        <form onSubmit={sumbitHandler}
        className='flex flex-col w-full gap-y-4'
        >
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200 '>*</sup></p>
                <input
                    required
                    type='text'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter email id'
                    name="email"
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200 '>*</sup></p>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter password'
                    name='password'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />

                <span className='absolute right-3 top-[38px] cursor-pointer'
                 onClick={()=>setshowPassword(prev=>!prev)}>
                    {showPassword ?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to="#">
                <p className='text-xs mt-1 text-blue-100 ml-auto'>Forgot Password</p>
                </Link>
            </label>

            <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign In</button>

        </form>
    )
}

export default LoginForm