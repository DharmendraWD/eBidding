import React, { useState } from 'react';

// This would typically come from an API or a prop
const initialParticipationData = [
  { id: 1, description: 'Medicine', checked: false },
  { id: 2, description: 'Medical Supplies (Surgicallab Items & Chemicals)', checked: false },
  { id: 3, description: 'Stationery/Office Supplies', checked: true },
  { id: 4, description: 'Office Equipment', checked: true },
  { id: 5, description: 'Printing/Publication', checked: true },
  { id: 6, description: 'Medical Equipment', checked: false },
  { id: 7, description: 'Repair & Maintenance of Vehicle', checked: true },
  { id: 8, description: 'Repair & Maintenance of office equipment', checked: true },
  { id: 9, description: 'Advertising', checked: false },
  { id: 10, description: 'Fuel', checked: false },
  { id: 11, description: 'Travel & Transportation', checked: true },
];

const Participation = () => {
  const [participationItems, setParticipationItems] = useState(initialParticipationData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCheckboxChange = (id) => {
    setParticipationItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleSubmit = () => {
    // In a real application, you'd send this data to a backend
    console.log('Submitting participation:', participationItems);
    setShowSuccessMessage(true);
    // Optionally hide the message after a few seconds
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-[var(--box1)] min-h-screen">
      {showSuccessMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline ml-2">Vendor Participation has been saved successfully.</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setShowSuccessMessage(false)}>
            <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 2.65a1.2 1.2 0 1 1-1.697-1.697L8.303 10l-2.651-2.651a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-2.651a1.2 1.2 0 1 1 1.697 1.697L11.697 10l2.651 2.651a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>
      )}

      <div className="bg-[var(--mainbg)] rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Participation List</h2>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Submit Participation
          </button>
        </div>

        {/* List Header for larger screens */}
        <div className="hidden md:grid md:grid-cols-12 lg:grid-cols-12 gap-4 py-3 px-4 bg-[var(--box1)] rounded-t-lg font-semibold text-[var(--mainColor)] text-sm">
          <div className="col-span-1">ID</div>
          <div className="col-span-9 lg:col-span-10">Description</div>
          <div className="col-span-2 lg:col-span-1 flex justify-end">Check</div>
        </div>

        {/* Participation Items */}
        <div className="divide-y divide-gray-200">
          {participationItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 py-4 px-4 hover:bg-[var(--menuHoverClr)] transition-colors duration-200 ease-in-out"
            >
              {/* ID */}
              <div className="col-span-1 text-sm font-medium text-[var(--mainColor)] md:flex md:items-center">
                <span className="md:hidden text-[var(--mainColor)] font-normal mr-2">ID:</span>
                {item.id}
              </div>

              {/* Description */}
              <div className="col-span-1 md:col-span-9 lg:col-span-10 text-sm text-[var(--mainColor)] md:flex md:items-center">
                <span className="md:hidden text-[var(--mainColor)] font-normal mr-2">Description:</span>
                {item.description}
              </div>

              {/* Checkbox */}
              <div className="col-span-1 md:col-span-2 lg:col-span-1 flex items-center justify-end">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="
                    h-5 w-5 text-blue-600 rounded border-gray-300
                    focus:ring-blue-500 cursor-pointer
                    // Custom styling for checked state (optional, browser handles basic appearance)
                    // checked:bg-blue-600 checked:border-transparent checked:ring-blue-500
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Participation;