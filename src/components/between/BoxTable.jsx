import React from 'react';
import { FaHourglassHalf, FaBox, FaUser, FaCalendarAlt, FaAngleRight } from 'react-icons/fa';
import { VscFolderActive } from "react-icons/vsc";
const processingItems = [
  {
    id: '#3937202507060009',
    itemsCount: 1,
    user: 'nurenure',
    dateTime: '2025-07-06 05:33 PM',
    amount: '200.00',
    status: 'Processing',
  },
  {
    id: '#7475202507060012',
    itemsCount: 1,
    user: 'nurenure',
    dateTime: '2025-07-06 05:56 PM',
    amount: '5,500,000.00',
    status: 'Processing',
  },
  {
    id: '#6926202507060013',
    itemsCount: 1,
    user: 'nurenure',
    dateTime: '2025-07-06 05:57 PM',
    amount: '200.00',
    status: 'Processing',
  },
  {
    id: '#4637202507060015',
    itemsCount: 1,
    user: 'gyanesah',
    dateTime: '2025-07-06 09:13 PM',
    amount: '100.00',
    status: 'Processing',
  },
  {
    id: '#4878202507060016',
    itemsCount: 3,
    user: 'gyanesah',
    dateTime: '2025-07-06 09:14 PM',
    amount: '3,100.00',
    status: 'Processing',
  },
];

const BoxTable = () => {
  return (
    // Main background using var(--mainbg)
    <div className="p-1 sm:p-2 md:p-3 bg-[var(--mainbg)] min-h-screen w-full lg:w-[40%]">
      <div className="max-w-4xl mx-auto bg-[var(--box1)] rounded-xl shadow-lg-custom border border-[var(--placeholderClr2)] overflow-hidden">
        {/* Header Section */}
        <div className="flex items-center justify-between p-1 border-b border-[var(--placeholderClr2)]">
          <div className="flex items-center space-x-3">
          <VscFolderActive />
            <h2 className="text-l md:text-xl font-semibold text-[var(--mainColor)]">
              Active Tender(<span className="text-[var(--accentBlue)]">{processingItems.length}</span>) {/* Count color */}
            </h2>
          </div>
        </div>

        {/* List Items */}
        {/* Individual items using var(--box2) for background, though it's white like box1 in this example */}
        <div className="divide-y p-1">
          {processingItems.map((item) => (
   <div
   class="w-full m-1 max-w-[500px] mx-auto bg-[var(--mainbg)]  dark:bg-zinc-900"
 >
   <div class="flex justify-between items-center px-1">
     <div class="flex items-center">
       <div class="mx-3">
         <h3 class="text-lg leading-none py-1 font-medium text-gray-700 dark:text-gray-200">
           Timro Mann
         </h3>
         <p class="text-gray-500 py-1 leading-none dark:text-gray-400 mb-0">Dibbya Subba</p>
       </div>
     </div>
     <div class="flex flex-col items-center">
      <p className='mb-0 leading-none py-1'>djsdskjd</p>
      <p className='mb-0 leading-none py-1'>djsdskjd</p>
     </div>
   </div>
   <div class="px-4">
     <div class="flex items-center">
     <div
       class="flex justify-between w-full text-sm text-gray-500 dark:text-gray-400"
     >
       <div class="flex w-full justify-between">
       <p className='mb-0'> 00:03 </p><p className='mb-0'> 3:35 </p>
       </div>
     </div>
   </div>
 </div>
 </div>
 
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxTable;