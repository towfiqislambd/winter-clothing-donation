import { FaBars } from "react-icons/fa6";
import logo from "../assets/logo.png"
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    return (
        <nav className="navbar border-b sticky top-0 z-10 bg-white">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FaBars className="text-3xl" />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-3 py-4 shadow gap-2 font-medium">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/donation-campaigns'>Donation Campaigns</NavLink></li>
                            <li><NavLink to='/how-to-help'>How to Help</NavLink></li>
                            {
                                user && <li><NavLink to='/details'>Details</NavLink></li>
                            }
                            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/">
                        <img className="w-12 hidden md:block" src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2 font-medium gap-2">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/donation-campaigns'>Donation Campaigns</NavLink></li>
                        <li><NavLink to='/how-to-help'>How to Help</NavLink></li>
                        {
                            user && <li><NavLink to='/details'>Details</NavLink></li>
                        }
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-3 items-center">
                    {
                        user ? <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="Profile" /> : <FaUserCircle className="text-4xl w-10 h-10 rounded-full" />
                    }
                    {
                        user ? <Link onClick={signOutUser} className="bg-orange-500 text-white px-5 py-2 rounded font-medium">Log Out</Link> :
                            <Link to='/login' className="bg-orange-500 text-white px-5 py-2 rounded font-medium">Login</Link>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;