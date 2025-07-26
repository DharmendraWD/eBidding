import React, { useEffect, useState } from 'react';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { useTheme } from '../../theme/Theme';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {logoutUser}  from '../../Redux/auth/authSlice';
import Theme from '../../../src/theme/Theme';
import { toast } from 'react-toastify';

const NavMenus = [
  { name: 'Home', link: '/', submenu: [] },
  {
    name: 'Auctions',
    link: '/auctions',
    submenu: [
      { name: 'Upcoming Auctions', link: '/auctions/upcoming' },
      { name: 'Past Auctions', link: '/auctions/past' },
    ],
  },
  { name: 'About Us', link: '/blog', submenu: [] },
];



const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

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
    <div className="font-sans">
      <nav className="bg-[var(--mainbg)] shadow fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div className="text-xl font-bold text-indigo-600">
                <Link to="/">AMDA</Link>
              </div>
            </div>

            <div className="hidden md:flex space-x-4 items-center">
              {NavMenus.map((item, i) => (
                <div key={i} className="relative group">
                  <button className="text-[var(--mainColor)] text-sf14 hover:text-indigo-600 flex items-center gap-1">
                    {item.name}
                    {item.submenu?.length > 0 && <FaChevronDown size={9} />}
                  </button>

                  {item.submenu?.length > 0 && (
                    <div className="absolute top-full left-0 mt-2 w-40 bg-[var(--mainbg)] border border-[var(--menuHoverClr)] rounded shadow-lg scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 origin-top">
                      {item.submenu.map((submenuItem, j) => (
                        <a
                          key={j}
                          className="block text-sf14 px-4 py-2 text-[var(--mainColor)] hover:bg-[var(--menuHoverClr)]"
                          href={submenuItem.link}
                        >
                          {submenuItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Theme />
              {auth.isAuthenticated && (
                <IoLogOut
                  className="text-[23px] cursor-pointer text-[var(--mainColor)] hover:text-red-600 transition"
                  onClick={() => setShowLogoutModal(true)}
                />
              )}
            </div>

            <div className="md:hidden flex gap-4 items-center">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 text-xl">
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
              <Theme />
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t animate-slide-in px-4 py-2">
            {['Home', 'Auction', 'Pages', 'Blog', 'Contact'].map((item, i) => (
              <div key={i} className="relative">
                <button
                  onClick={() => toggleSubmenu(item)}
                  className="w-full text-left py-2 font-medium text-gray-800 flex justify-between items-center"
                >
                  {item} {(item === 'Auction' || item === 'Pages') && <FaChevronDown size={12} />}
                </button>
                {(submenuOpen === item && (item === 'Auction' || item === 'Pages')) && (
                  <div className="pl-4">
                    <a className="block py-1 text-sm text-gray-700 hover:bg-gray-100" href="#">Browse Bid</a>
                    <a className="block py-1 text-sm text-gray-700 hover:bg-gray-100" href="#">Bid Details</a>
                    <a className="block py-1 text-sm text-gray-700 hover:bg-gray-100" href="#">Bid History</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

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
  );
};

export default Nav;
