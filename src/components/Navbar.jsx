import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import websiteLogo from '../assets/images.png'
import { FaHome } from "react-icons/fa";
import { MdProductionQuantityLimits } from 'react-icons/md';
import { AiOutlineLogin } from 'react-icons/ai';
import { RiLogoutCircleLine } from 'react-icons/ri';

const Navbar = () => {
    const navItems = <>
        <li className='text-2xl font-bold font-Lato'><NavLink to='/' className={({isActive})=> isActive ? "text-[#6A0DAD]" : ""}><FaHome />Home</NavLink></li>
        <li className='text-2xl font-bold font-Lato'><NavLink to='/products' className={({isActive})=> isActive ? "text-[#6A0DAD]" : ""}><MdProductionQuantityLimits />Products</NavLink></li>
        <li className='text-2xl font-bold font-Lato'><NavLink to='/login' className={({isActive})=> isActive ? "text-[#6A0DAD]" : ""}>Login</NavLink></li>
        <li className='text-2xl font-bold font-Lato'><NavLink to='/register' className={({isActive})=> isActive ? "text-[#6A0DAD]" : ""}>Register</NavLink></li>
    </>

        const { user, logout } = useContext(AuthContext);
        const [showName, setShowName] = useState(false);

        //Theme implement:
        const [theme, setTheme] = useState('light')

        useEffect(() => {
            localStorage.setItem('theme', theme)
            const localTheme = localStorage.getItem('theme')
            document.querySelector('html').setAttribute('data-theme', localTheme)
        }, [theme])

        //Handle theme:
        const handleTheme = e => {
            console.log(e.target.value);
            if (e.target.checked) {
                setTheme('dark')
            } else {
                setTheme('light')
            }
        }

    return (
        <div>
            <div style={{ background: 'linear-gradient(90deg, #ff7e5f, #feb47b)' }} className="navbar bg-base-100 shadow-lg ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <div className='flex'>
                    <p className='text-blue-600 text-3xl font-extrabold'><span className='text-3xl font-extrabold text-[#0A1172]'>Shop</span>Ease</p>
                    <img className='w-12 h-12' src={websiteLogo} alt="logo" />
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navItems}
                    </ul>
                </div>
                <div className='hidden lg:block'>
                    <label className="cursor-pointer grid place-items-center">
                        <input onClick={handleTheme} type="checkbox"
                            value="dark"
                            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
                <div className="navbar-end">
                {
                        user ? <>

                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" onMouseEnter={() => setShowName(true)}
                                onMouseLeave={() => setShowName(false)}>
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                </div>
                            </div>
                            {showName && <span className="tooltip tooltip-open tooltip-bottom" data-tip={user?.displayName} ></span>}
                            <span className='hidden lg:inline ml-2 mr-2 font-bold' >{user?.email}</span>
                            <a onClick={logout} className="btn btn-info font-bold text-lg"><RiLogoutCircleLine />Logout</a>

                        </> :
                            <Link to='/login'><button className='rounded-lg text-lg bg-slate-300 p-2 font-bold btn btn-info'><AiOutlineLogin />Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;