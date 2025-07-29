import React, { useState } from 'react'
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import {logoutUser}  from '../../Redux/auth/authSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';



function NavProfile() {
    const [submenuOpen, setSubmenuOpen] = useState('');
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
      const toggleSubmenu = (item) => {
        setSubmenuOpen((prev) => (prev === item ? '' : item));
      };
  

    const handleLogoutConfirm = () => {
        toast.success('Logged out successfully!');
        setTimeout(() => {
      dispatch(logoutUser());
      navigate('/');
    }, 1000)
        setShowLogoutModal(false);
      };
    


  return (
    <div>
       <div className="hidden md:flex space-x-4 items-center">        
       <div className="relative group inline-block">
  {/* Trigger area */}
  <div className="cursor-pointer">
    <img
      className="w-[40px] rounded-full mx-auto"
      src="https://randomuser.me/api/portraits/women/82.jpg"
      alt=""
    />
    <button className="text-[var(--mainColor)] text-sf14 hover:text-indigo-600 flex items-center gap-1">
      Dharmendra
      <FaChevronDown size={9} />
    </button>
  </div>

  {/* Dropdown menu */}
  <div className="absolute top-full left-0 mt-2 w-40 bg-[var(--mainbg)] border border-[var(--menuHoverClr)] rounded shadow-lg opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top z-50">
    <Link
      to={"dashboard"}
      className="block text-sf14 pl-4 py-1 text-[var(--mainColor)] hover:bg-[var(--menuHoverClr)]"
    >
      Dashboard
    </Link>

    <Link
      to={"profile-manager"}
      className="block text-sf14 pl-4 py-1 text-[var(--mainColor)] hover:bg-[var(--menuHoverClr)]"
    >
      Profile Manager
    </Link>

    <Link
      to={"password-manager"}
      className="block text-sf14 pl-4 py-1 text-[var(--mainColor)] hover:bg-[var(--menuHoverClr)]"
    >
      Change Password
    </Link>

    <div
      className="flex gap-2 items-center pl-4 py-1 cursor-pointer text-[var(--mainColor)] hover:text-red-600 transition"
      onClick={() => setShowLogoutModal(true)}
    >
      <p className="mb-0">Log Out</p>
    </div>
  </div>
</div>

       
            </div>
            {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-sm animate-fade-in">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Confirm Logout</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleLogoutConfirm}
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavProfile
