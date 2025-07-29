import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCog, FaKey, FaFileAlt, FaShoppingCart, FaWpforms, FaBox } from 'react-icons/fa'
import HeroStyle from '../hero/css/hero.module.css' // replace with your actual CSS module path
import Table from '../between/Table'
import Profile from './profileManager/profile/Profile'
import Instructions from './Instructions'
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '../../Redux/PopupSlice/PopupSlice';
import InstructionPopup from '../utilities/InstructionPopup'
import HeadingXl from '../utilities/HeadingXl'
import IdeaIcon from '../utilities/IdeaIcon'
import BoxTable from '../between/BoxTable'
function Dashboard() {
    const categories = [
  
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

      const dispatch = useDispatch();
      const isPopupOpen = useSelector((state) => state.popup); // assuming reducer key is 'popup'
    
// Dashboard instruction data popoup 
// Dashboard instructionData
const instructionData = [
  {
    "id": 1,
    "text": "The Dashboard gives you an overview of tender activities."
  },
  {
    "id": 2,
    "text": "Use the Search bar to filter tenders based on categories."
  },
  {
    "id": 3,
    "text": "Download tender documents for offline use."
  },
  {
    "id": 4,
    "text": "Export your tender list to Excel format for reporting."
  },
  {
    "id": 5,
    "text": "Apply for tenders directly from the Active Tenders page."
  }
];


  return (
    <div className='mt-[100px] items-center block'>
      <div className='flex items-center gap-4'>
        <HeadingXl text={"Tender Notice"}></HeadingXl>
        <div className='lg:absolute lg:right-[10px]'>
          <IdeaIcon></IdeaIcon>
        </div>
      </div>
<div className='flex-col lg:flex-row flex'>  
<div className='w-[full] lg:w-[60%]'>
<Table></Table>
</div>
<BoxTable></BoxTable>
</div>
<div className='flex justify-center flex-wrap gap-[6px] overflow-hidden '>
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
     <div className="p-4">
      {isPopupOpen ? (
        <>
     <InstructionPopup togglePopupState={isPopupOpen}>
     <Instructions instructionData={instructionData}/>

     </InstructionPopup>
        </>

      ) : (
        ""
      )}
    </div>
     
    </div>
  )
}

export default Dashboard
