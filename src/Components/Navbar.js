import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast"
import "../index.css"


function Navbar({isLoggedIn,setIsLoggedIn}) { 

     
    return (
        <div className="flex flex-row justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">

            <Link to='/'>
                <img src={logo} alt="logo" width={160} height={32} loading="lazy"></img>
            </Link>

            <nav className="text-white flex gap-x-6">
                <ul className="flex gap-3">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/">About</Link>
                    </li>

                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-3">
                {   !isLoggedIn  && 
                    <Link to="/login">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log in</button>
                    </Link>
                }

                {   !isLoggedIn &&
                    <Link to="/signup">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Sign up</button>
                    </Link>
                }

                {   isLoggedIn &&
                    <Link to="/">
                        <button  className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out!")
                        }}>Log out</button>
                    </Link>
                }

                {   isLoggedIn && 
                    <Link to="/dashboard">
                        <button  className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
                    </Link>
                }

            </div>
        </div>
    )
}

export default Navbar;