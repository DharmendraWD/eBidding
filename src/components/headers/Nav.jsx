// File: App.jsx
import React, { useEffect, useState } from 'react';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import Theme from '../../../src/theme/Theme';
import { useTheme } from '../../theme/Theme';
import { Link } from 'react-router-dom';

const NavMenus = [
    {
        name: 'Home',
        link: '/',
        submenu: [] // No submenu here
    },

    {
        name: "Auctions",
        link: "/auctions",
        submenu: [
            {
                name: "Upcoming Auctions",
                link: "/auctions/upcoming"
            },
            {
                name: "Past Auctions",
                link: "/auctions/past"
            }
        ]
    },

    {
        name: "About Us",
        link: "/blog",
        submenu: []
    }
];


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState('');

  const toggleSubmenu = (item) => {
    setSubmenuOpen((prev) => (prev === item ? '' : item));
  };

  return (
    <div className="font-sans ">
      {/* Navbar */}
      <nav className="bg-[var(--mainbg)]  shadow fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div className="text-xl font-bold text-indigo-600"><Link to="/">AMDA</Link></div>
            </div>

         <div className="hidden md:flex space-x-4 items-center">
  {NavMenus.map((item, i) => (
    <div key={i} className="relative group">
      <button className="text-[var(--mainColor)] text-sf14 hover:text-indigo-600  flex items-center gap-1">
        {item.name}
        {item.submenu && item.submenu.length > 0 && <FaChevronDown size={9} />}
      </button>

      {item.submenu && item.submenu.length > 0 && (
        <div className="absolute top-full left-0 mt-2 w-40 bg-[var(--mainbg)]  border border-[var(--menuHoverClr)] rounded shadow-lg scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 origin-top">
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
              {/* <button className="text-sm px-4 py-2 rounded-lg border border-[var(--btnBg)] text-[var(--btnBg)] hover:brightness-90">Login</button>
              <button className="text-sm px-4 py-2 rounded-lg bg-[var(--btnBg)] text-[var(--btnClr)] hover:brightness-90">Sign Up</button> */}
    <Theme></Theme>

            </div>

            <div className="md:hidden flex gap-4 items-center">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 text-xl">
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
              <Theme></Theme>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
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
            {/* <div className="flex flex-col py-2">
              <button className="mb-2 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg">Login</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Sign Up</button>
            </div> */}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
