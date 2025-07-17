import React from 'react';
import HeroStyle from './css/hero.module.css';
import { RiAuctionLine } from "react-icons/ri";
import {
  FaGem, FaBuilding, FaVolleyballBall, FaCar, FaMusic, FaTshirt,
  FaPills, FaClipboard, FaFax, FaPrint, FaStethoscope, FaTools,
  FaWrench, FaBullhorn, FaGasPump, FaPlane, FaHandshake, FaEllipsisH, FaHardHat
} from 'react-icons/fa';
import HeadingXl from '../utilities/HeadingXl';
import Card1 from '../utilities/Card1';

const categories = [
  // Original screenshot icons
  { name: 'Jewellery', icon: FaGem },
  { name: 'Real Estate', icon: FaBuilding },
  { name: 'Sports', icon: FaVolleyballBall },
  { name: 'Vehicles', icon: FaCar },
  { name: 'Music', icon: FaMusic },
  { name: 'Clothes', icon: FaTshirt },

  // New icons you requested
  { name: 'Medicine', icon: FaPills },
  { name: 'Stationery/Office Supplies', icon: FaClipboard },
  { name: 'Office Equipment', icon: FaFax },
  { name: 'Printing/Publication', icon: FaPrint },
  { name: 'Medical Equipment', icon: FaStethoscope },
  { name: 'Repair & Maintenance of Vehicle', icon: FaTools },
  { name: 'Repair & Maintenance of office equipment', icon: FaWrench },
  { name: 'Advertising', icon: FaBullhorn },
  { name: 'Fuel', icon: FaGasPump },
  { name: 'Travel & Transportation', icon: FaPlane },
  { name: 'Consultancy (Legal Advice, Auditing, IT etc.)', icon: FaHandshake },
  { name: 'Others (Please specify)', icon: FaEllipsisH },
  { name: 'Construction', icon: FaHardHat },
];


// card 1 data 
const upComingAuction = [
    {
        heading:"Ancient Greek Goddess of...",
        para:"Inspire greatness and achievement with our stunning sculpture depicting the legendary goddess of victory, Nike.",
        img:"https://theme.bitrixinfotech.com/bidzone/assets/images/thumb-auction-img-1.png"
    },
    {
        heading:"Final Match Football Studs",
        para:"Experience the timeless charm of the vintage coffee bean grinder, meticulously crafteda rich and flavorful",
        img:"https://theme.bitrixinfotech.com/bidzone/assets/images/thumb-auction-img-3.png"
    },
    {
        heading:"Ancient Greek Goddess of...",
        para:"Inspire greatness and achievement with our stunning sculpture depicting the legendary goddess of victory, Nike.",
        img:"https://theme.bitrixinfotech.com/bidzone/assets/images/thumb-auction-img-1.png"
    },
      {
        heading:"Final Match Football Studs",
        para:"Experience the timeless charm of the vintage coffee bean grinder, meticulously crafteda rich and flavorful",
        img:"https://theme.bitrixinfotech.com/bidzone/assets/images/thumb-auction-img-3.png"
    },
]



const InfinteScrollBoxes = () => {
  const allCategories = [...categories, ...categories]; // Duplicate for infinite scroll

  return (
    <div>
        <HeadingXl text={"Live Auctions On"}></HeadingXl>
    <div id="scroll-wrapper" className="flex bg-[var(--mainbg)] justify-center items-center">
      <div className="relative w-full overflow-hidden">
        <div className="scroll-content">
          {allCategories.map((category, index) => (
            <div
              key={index}
              className=
              {`group ${HeroStyle.group}   min-h-[100px] bg-[var(--box1)] flex flex-col justify-center items-center gap-[12px]
              group
              min-w-[240px]
              
              flex flex-col items-center justify-center
          py-[20px]
         rounded-lg 

              transition-colors duration-300
              flex-shrink-0
              shadow-sm `}
            >
              {/* Icon */}
              <category.icon className="
                text-blue-600 text-5xl /* Default blue icon color */
                transition-colors duration-300
                group-hover:text-white /* Icon becomes white on div hover */
                text-[70px]
              " />

              {/* Text */}
              <span className="
                mt-2 text-sm font-medium text-[var(--placeholderClr)]
                transition-colors duration-300
                group-hover:text-white /* Text becomes white on div hover */
                text-center px-1
              ">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pure CSS for animation and hover effects.
        This content should ideally be in your global CSS file (e.g., src/index.css or src/App.css)
        after your Tailwind imports.
      */}
      <style>{`
        /* Animation for horizontal scrolling */
        .scroll-content {
          display: inline-flex;
          white-space: nowrap;
          animation: scroll-left 60s linear infinite; /* Adjust duration for speed */
          padding: 1rem 0; /* Consistent padding */
          gap: 20px;
        }

        .scroll-content:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* Scrolls 50% of the content width for seamless loop */
        }

      `}</style>
    </div>

<div>
    <HeadingXl text={"Upcoming Auctions"}></HeadingXl>
    <div className='flex flex-wrap justify-center lg:justify-between items-center gap-[20px]'>
    { upComingAuction.map((item, index) => (
        <Card1 key={index} title={item.heading} description={item.para} imageUrl={item.img} bgColorClass="bg-[var(--primaryClrInLightDarkInDark)]"></Card1>

    ))
}
        </div>
    </div>
    </div>
  );
};

export default InfinteScrollBoxes;; 
