import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const navItems = <>
        <li className='text-2xl font-bold font-Lato'><NavLink to='/' className={({isActive})=> isActive ? "text-green-500" : ""}>Home</NavLink></li>
        <li className='text-2xl font-bold font-Lato'><NavLink to='/login' className={({isActive})=> isActive ? "text-green-500" : ""}>Login</NavLink></li>
        <li className='text-2xl font-bold font-Lato'><NavLink to='/register' className={({isActive})=> isActive ? "text-green-500" : ""}>Register</NavLink></li>
    </>

        const { user, logout } = useContext(AuthContext);
        const [showName, setShowName] = useState(false);

    return (
        <div>
            <div className="navbar bg-base-100">
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
                    <a className="btn btn-ghost text-xl">ShopEase</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navItems}
                    </ul>
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
                            <span className='hidden lg:inline' >{user?.email}</span>
                            <a onClick={logout} className="btn btn-info font-bold text-lg">Logout</a>

                        </> :
                            <Link to='/login'><button className='rounded-lg text-lg bg-slate-300 p-2 font-bold btn btn-info'>Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;