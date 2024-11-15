import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from "./SignupForm"
import LoginForm from './LoginForm'
import { FcGoogle } from 'react-icons/fc'

function Template({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
    return (
        <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between'>

            <div className='w-11/12 max-w-[450px]' >
                <h1 className='text-richblack-5 font-semibold text-[1.875rem] loading-[2.375rem]'>{title}</h1>
                <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                    <span className='text-richblack-100'>{desc1}</span>
                    <br />
                    <span className='text-blue-100 italic'>{desc2}</span>
                </p>

                {formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

                <div className='flex w-full items-center mt-5'>
                    <div className='h-[1px] bg-richblack-700 w-full'></div>
                    <p className='text-richblack-700 font-medium'>Or</p>
                    <div className='h-[1px] bg-richblack-700 w-full'></div>
                </div>

                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 -[12px] py-[8px] gap-x-2 mt-3 '>
                    <FcGoogle />
                    <p >Sign in with Google</p>
                </button>
            </div>

            <div className='relative w-11/12 max-w-[450px] '>
                <img src={frameImage} alt='pattern' width={558} height={504} loading='lazy' />

                <img className='absolute -top-4 right-4' src={image} alt='Students' width={558} height={504} loading='lazy' />
            </div>



        </div>
    )
}

export default Template