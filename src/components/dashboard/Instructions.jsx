import React from 'react';
import IdeaIcon from '../utilities/IdeaIcon';
import { CiCircleQuestion } from "react-icons/ci";

const Instructions = ({ instructionData = [] }) => {
  return (
    <>
      <div className="flex items-center space-x-3 mb-6">
      <CiCircleQuestion className='text-[25px] text-[blue]'/>
        <h2 className="text-2xl font-bold text-gray-900">Instructions</h2>
      </div>

      <p className="text-md text-gray-700 mb-6">
        Welcome to the Tender Management System. If Vendor Registration is verified, you can access the following information:
      </p>

      <ul className="space-y-4 list-disc list-inside text-gray-700 text-base">
        {instructionData.map((instruction) => (
          <li key={instruction.id}>
            {instruction.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Instructions;
