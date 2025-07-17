import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCog, FaKey, FaFileAlt, FaShoppingCart, FaWpforms, FaBox } from 'react-icons/fa'
import HeroStyle from '../hero/css/hero.module.css' // replace with your actual CSS module path
import Table from '../between/Table'
import Profile from './profile/Profile'

function Dashboard() {
    const categories = [
        {
          name: 'Profile Manager',
          icon: FaUserCog,
          link: '/profile-manager'
        },
        {
          name: 'Password Manager',
          icon: FaKey,
          link: '/password-manager'
        },
        {
          name: 'Tender Manager',
          icon: FaFileAlt,
          link: '/tender-manager'
        },
        {
          name: 'Purchase Manager',
          icon: FaShoppingCart,
          link: '/purchase-manager'
        },
        {
          name: 'Application Manager',
          icon: FaWpforms,
          link: '/application-manager'
        },
        {
          name: 'Item Manager',
          icon: FaBox,
          link: '/item-manager'
        }
      ]

  return (
    <div className='mt-[100px] items-center block xl:flex'>
    <div className='w-full xl:w-[60%]'>
    <Table></Table>
    </div>
{/* <Profile></Profile> */}
      <div className="flex flex-wrap gap-4 justify-center">
      {categories.map((category, index) => (
        <Link to={category.link} key={index} className='sm:max-w-[200px] w-full '>
          <div
            className={`
              group ${HeroStyle.group} min-h-[55px] sm:min-h-[100px] bg-[var(--box1)]
              flex flex-row sm:flex-col justify-start sm:justify-center items-center gap-[12px]
              min-w-[200px] py-0 sm:py-[20px] rounded-lg
              transition-colors duration-300 flex-shrink-0 shadow-sm
            `}
          >
            <category.icon className="
              text-blue-600 text-[35px] 
              transition-colors duration-300
              group-hover:text-white
              sm:text-[70px]
              ml:p-0
              ml-[22px]
            " />

            <span className="
              mt-2 text-sm font-medium text-[var(--placeholderClr)]
              transition-colors duration-300
              group-hover:text-white
              text-center px-1
            ">
              {category.name}
            </span>
          </div>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Dashboard
