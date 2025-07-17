import React from 'react';
const Card1 = ({ title, description, imageUrl, bgColorClass }) => {
  return (
    <div className={`${bgColorClass} rounded-xl shadow-md overflow-hidden flex items-center relative w-96`}>
      <div className="p-6 w-[70%] text-white relative z-10"> 
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
      </div>

      <img
        src={imageUrl}
        alt={title}
        className={` absolute bottom-0 right-0 max-h-56 object-contain ranslate-y-1/4`} 
        style={{ opacity: 0.9 }}
      />
    </div>
  );
};

export default Card1;