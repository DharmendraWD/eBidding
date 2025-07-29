import React, { useEffect, useState } from 'react';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { useTheme } from '../../theme/Theme';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Theme from '../../../src/theme/Theme';
import { toast } from 'react-toastify';
import NavProfile from './NavProfile';






const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);



  const NavMenus = [
    { name: 'Home', link: '/', submenu: [] },
  
    // Conditionally add this object only if authenticated
    ...(auth.isAuthenticated
      ? [
          {
            name: 'Manager Settings',
            submenu: [
              { name: 'Tender Manager', link: '/tender-manager' },
              { name: 'Purchase Manager', link: '/purchase-manager' },
              { name: 'Item Manager', link: '/item-manager' },
              { name: 'Application Manager', link: '/application-manager' },
            ],
          },
        ]
      : []),
  
    { name: 'About', link: '/about', submenu: [] },
  ];

  return (
    <div className="font-sans">
      <nav className="bg-[var(--mainbg)] shadow fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-[10px] md:px-4">
          <div className="flex justify-between items-center h-[3rem] md:h-16">
            <div className="flex items-center gap-8">
              <div className="text-xl font-bold text-indigo-600">
                <Link to="/">Company Name</Link>
              </div>
            </div>

            <div
  className={
    menuOpen
      ? "flex w-full left-0 z-[99] bg-[var(--mainbg)] md:py-[0] py-[6px] px-[11px] flex absolute flex-row justify-between items-start"
      : "hidden md:flex flex-row  space-x-4 items-center"
  }
>
              <div   className={
    menuOpen
      ? "flex w-full mt-[22px] md:mt-0 flex-col justify-between items-start"
      : "hidden md:flex flex-row  space-x-4 items-center"
  }>
              {NavMenus.map((item, i) => (
                <div key={i} className="relative group">
                  <button className="text-[var(--mainColor)] text-sf14 hover:text-indigo-600 flex items-center gap-1">
                    {item.name}
                    {item.submenu?.length > 0 && <FaChevronDown size={9} />}
                  </button>

                  {item.submenu?.length > 0 && (
                    <div className="absolute md:min-w-[210px] top-full z-[99] md:w-auto w-max left-0 mt-2 w-40 bg-[var(--mainbg)] border border-[var(--menuHoverClr)] rounded shadow-lg scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 origin-top">
                      {item.submenu.map((submenuItem, j) => (
                        <Link
                          key={j}
                          className="block text-sf14 px-4 py-2 text-[var(--mainColor)] hover:bg-[var(--menuHoverClr)]"
                          to={submenuItem.link}
                        >
                          {submenuItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              </div>
              <div className={
    menuOpen
      ? "mt-[40px]"
      : "hidden"
  } onClick={() => setMenuOpen(!menuOpen)}><FaTimes className='text-[24px]' /></div>
            </div>

<div className='flex gap-4 items-center'>
              <Theme className="text-[22px]"/>
            <div className="md:flex items-center space-x-4">
              {auth.isAuthenticated && (
                <>
                <NavProfile></NavProfile>
                </>
              )}
            </div>

            <div className="flex md:hidden gap-4 items-center">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 text-xl">
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
            </div>
          </div>
        </div>

      
      </nav>

      
    </div>
  );
};

export default Nav;
