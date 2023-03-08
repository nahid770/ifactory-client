import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import logo from '../../../Images/logo.png'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='max-w-[1224px] mx-auto'>
            {/* Desktop version */}
            <div className='md:flex justify-between items-center hidden h-20'>
            
                <div className='w-32'>
                    <img className='' src={logo} alt="" />
                </div>
                <div>
                    <ul className='flex justify-center items-center'>
                        <li><Link className='mr-8 font-roboto text-md  text-[#09031b] font-semibold ' to={'/'}> Home</Link></li>
                        <li><Link className='mr-8 font-roboto text-md text-[#060213] font-semibold  ' to={'/about'}> About us</Link></li>
                        <li><Link className='mr-8 font-roboto text-md text-[#060213] font-semibold   ' to={'/services'}> Services</Link></li>
                        <li><Link to={'/all'} className='mr-8 font-roboto text-md text-[#060213] font-semibold  ' > Projects</Link></li>
                        <li><Link className='mr-8  font-roboto text-md text-[#060213f6] font-semibold  ' to={'/contact'}> Contact</Link></li>
                        {/* {
                        user && 
                        <li><Link className='mr-8  font-Poppins text-md text-[#060213] font-semibold  ' to={'/dashboard'}> Dashboard</Link></li>
                        }

                        {user ? <Link onClick={handleSignout} className='px-7 py-2 rounded-full bg-[#896EFF] text-white font-poppins text-md hover:bg-[#5E37DA] transition-all duration-500 '>Sign Out</Link> 
                        :
                        <Link to={'/login'}  className='px-7 py-2 rounded-full bg-[#896EFF] text-white font-poppins text-md hover:bg-[#5E37DA] transition-all duration-500 '>Login</Link>
                        } */}
                    </ul>
                    
                </div>
            </div>
            {/* Mobile Version */}
            <div className='flex justify-between items-center relative'>
                <div className='w-24 mt-2 md:hidden'>
                    <img className='' src={logo} alt="" />
                </div>

                <div className='flex items-center gap-5 md:block'>
                {/* --- User Dashboard --- */}
               {/* {
                user &&  <div >
                <label htmlFor="my-drawer-2" className="drawer-button lg:hidden"><BiUserCircle ></BiUserCircle></label>
                </div>
               } */}

                {/* --- Menu --- */}
                <div>
                   <div onClick={()=> setOpen(!open)} className='md:hidden'>
                    {
                        open ? <MdClose ></MdClose> : <HiMenu></HiMenu>
                    }
                   </div>
                
                

                <ul className={`nav flex flex-col gap-5 justify-center items-center md:hidden md:pb-0 pb-6 absolute md:static md:z-auto z-50 right-0 w-2/3 py-5 md:py-0 md:w-auto rounded-md shadow-md  mt-8 md:mt-0 bg-white ${open ? 'top-30' : 'top-[-600px]'}`}>
                        <li><Link className='mr-8 font-Poppins text-lg  text-[#060213] font-semibold ' to={'/'}> Home</Link></li>
                        <li><Link className='mr-8 font-Poppins text-lg  text-[#060213] font-semibold ' to={'/aboutus'}> About Us</Link></li>
                        <li><Link className='mr-8 font-Poppins text-lg  text-[#060213] font-semibold ' to={'/service'}> Services</Link></li>
                        <li><a href='#pricing1' className='mr-8 font-Poppins text-lg  text-[#060213] font-semibold ' > Pricing</a></li>
                        <li><Link className='mr-8  font-Poppins text-lg  text-[#060213] font-semibold ' to={'/contact'}> Contact</Link></li>

                        {/* {
                        user && 
                        <li><Link className='mr-8 text-lg  font-Poppins text-md text-[#060213] font-semibold  ' to={'/dashboard'}> DashBoard</Link></li>
                        }
                        {
                        user ? <img className='mr-3 w-10 rounded-full shadow-sm' src={user.photoURL} alt="" /> : ' '
                        }

                        {user ? <Link onClick={handleSignout} className='px-7 py-2 rounded-full bg-[#896EFF] text-white font-poppins text-md hover:bg-[#5E37DA] transition-all duration-500 mr-6'>Sign Out</Link> 
                        :
                        <div className='text-center'>
                            <Link to={'/login'}  className='px-7 py-2 rounded-full bg-[#896EFF] text-white font-poppins text-md hover:bg-[#5E37DA] transition-all duration-500 '>Login</Link>
                        </div>
                        } */}
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;