import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../Redux/PopupSlice/PopupSlice';

function InstructionPopup({togglePopupState, children}) {
    let dispatch = useDispatch();


  return (
    <div className={togglePopupState ? 'fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50' : 'hidden'}>
    <div className="bg-white p-6 rounded-lg shadow-lg overflow-auto max-w-[90%] max-h-[80%] animate-fade-in lg:max-h-[90%]">
        <p className='float-right hover:scale-125 p-2 cursor-pointer hover:text-red-400' onClick={() => dispatch(togglePopup())}>X</p>
 
        {children}
    </div>
  </div>
  )}

export default InstructionPopup



