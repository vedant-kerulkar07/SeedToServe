import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "@/assets/images/logo.png";

const Topbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="w-full bg-[#FFFBE8] border-b border-[#e5e1b0] text-[#1f2937] px-6 py-2 shadow-md transition-all duration-300 rounded-2xl">

            <div className="flex items-center justify-between relative">

                {/* Left: Logo */}
                <div
                    className="flex items-center cursor-pointer"
                    onClick={() => navigate("/dashboard")}
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-10 h-10 rounded-full object-cover shadow-md ring-2 ring-[#d4c44b] hover:ring-[#c3b538] transition-all duration-300"
                    />
                </div>

                {/* Center: Hamburger (Mobile) */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-[#1f2937] text-xl focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Right: Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-6 font-medium">
                    <Link to="/dashboard">
                        <li className="hover:text-[#000000] transition">Dashboard</li>
                    </Link>

                    <Link to="/dashboard/transaction">
                        <li className="hover:text-[#000000] transition">Shop</li>
                    </Link>

                    <Link to="/dashboard/analytics">
                        <li className="hover:text-[#000000] transition">Analytics</li>
                    </Link>

                    <Link to="/dashboard/profile">
                        <li className="hover:text-[#000000] transition">Profile</li>
                    </Link>

                    <Link to="/dashboard/notifications">
                        <li className="hover:text-[#000000] transition">
                            <IoMdNotificationsOutline className="sm:w-5 sm:h-5" />
                        </li>
                    </Link>

                    <button
                        className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                    >
                        Log out
                    </button>
                </ul>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <ul className="md:hidden mt-3 flex flex-col space-y-3 text-[#1f2937] font-medium bg-[#FFFDF0] border border-[#e5e1b0] rounded-xl shadow-lg p-4">
                    <Link to="/dashboard">
                        <li className="hover:text-[#000000] transition">Dashboard</li>
                    </Link>

                    <Link to="/dashboard/transaction">
                        <li className="hover:text-[#000000] transition">Shop</li>
                    </Link>

                    <Link to="/dashboard/analytics">
                        <li className="hover:text-[#000000] transition">Analytics</li>
                    </Link>

                    <Link to="/dashboard/profile">
                        <li className="hover:text-[#000000] transition">Profile</li>
                    </Link>

                    <Link to="/dashboard/notifications">
                        <li className="hover:text-[#000000] transition">
                            <IoMdNotificationsOutline className="sm:w-5 sm:h-5" />
                        </li>
                    </Link>

                    <div className="pt-2 border-t border-[#e5e1b0]">
                        <button
                            className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 transition"
                        >
                            Log out
                        </button>
                    </div>
                </ul>
            )}
        </header>
    );
};

export default Topbar;
