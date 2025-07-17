import React, { useState } from 'react';

const CapacityInformation = () => {
  const [capacityData, setCapacityData] = useState({
    q302_address: '',
    q302_contactPerson: '',
    q302_contactNo: '',
    q303_answer: '', // Example options: 'Yes', 'No', 'N/A'
    q304_answer: '', // Example options: 'Yes', 'No', 'Partially'
    q305_answer: '', // Example options: 'Yes', 'No'
    q306_avgTimeResponse: '',
    q307_avgTimeDelivery: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCapacityData((prevData) => ({ ...prevData, [name]: value }));
    setSubmitStatus(null); // Clear status on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send capacityData to your backend
    console.log('Submitting Capacity Information:', capacityData);

    // Basic validation (can be more robust)
    const isValid = Object.values(capacityData).every(value => value !== '');

    if (isValid) {
      setSubmitStatus('success');
      // Optionally reset form after submission:
      // setCapacityData({ /* reset to initial empty state */ });
    } else {
      setSubmitStatus('error');
    }

    setTimeout(() => setSubmitStatus(null), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Capacity Information</h2>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Submit Capacity
          </button>
        </div>

        {/* Submission Feedback Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline ml-2">Capacity information submitted successfully.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={() => setSubmitStatus(null)}>
              <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 2.65a1.2 1.2 0 1 1-1.697-1.697L8.303 10l-2.651-2.651a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-2.651a1.2 1.2 0 1 1 1.697 1.697L11.697 10l2.651 2.651a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline ml-2">Please fill all fields.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={() => setSubmitStatus(null)}>
              <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 2.65a1.2 1.2 0 1 1-1.697-1.697L8.303 10l-2.651-2.651a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-2.651a1.2 1.2 0 1 1 1.697 1.697L11.697 10l2.651 2.651a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>
        )}

        {/* Questions List */}
        <form onSubmit={handleSubmit} className="space-y-6"> {/* Use form to allow submission with Enter */}

          {/* Question 3.02: Location of Branch offices */}
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <div className="flex items-start mb-3">
              <span className="text-gray-800 font-bold text-lg mr-3">3.02</span>
              <p className="text-gray-800 text-lg leading-tight">Location of Branch offices (For International organization only):</p>
            </div>
            <div className="space-y-3 pl-8"> {/* Indent for sub-fields */}
              <div>
                <label htmlFor="q302_address" className="block text-gray-600 text-sm font-medium mb-1">Address:</label>
                <input
                  type="text"
                  id="q302_address"
                  name="q302_address"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  value={capacityData.q302_address}
                  onChange={handleInputChange}
                  placeholder="Enter Address"
                />
              </div>
              <div>
                <label htmlFor="q302_contactPerson" className="block text-gray-600 text-sm font-medium mb-1">Contact Person:</label>
                <input
                  type="text"
                  id="q302_contactPerson"
                  name="q302_contactPerson"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  value={capacityData.q302_contactPerson}
                  onChange={handleInputChange}
                  placeholder="Enter Contact Person"
                />
              </div>
              <div>
                <label htmlFor="q302_contactNo" className="block text-gray-600 text-sm font-medium mb-1">Contact No.:</label>
                <input
                  type="text" // Can be type="tel" or "number" if strict numeric
                  id="q302_contactNo"
                  name="q302_contactNo"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  value={capacityData.q302_contactNo}
                  onChange={handleInputChange}
                  placeholder="Enter Contact No."
                />
              </div>
            </div>
          </div>

          {/* Question 3.03: Supply of goods/services be as Per national/international standard? */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
            <span className="text-gray-800 font-bold text-lg md:col-span-1">3.03</span>
            <label htmlFor="q303_answer" className="text-gray-800 text-lg md:col-span-1">Will the supply of goods/services be as Per national/international standard?</label>
            <div className="md:col-span-1">
              <select
                id="q303_answer"
                name="q303_answer"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none bg-white pr-8" // appearance-none for custom arrow
                value={capacityData.q303_answer}
                onChange={handleInputChange}
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="N/A">N/A</option>
              </select>
              {/* Custom arrow for select, if needed, you'd add a pseudo-element or SVG here */}
            </div>
          </div>

          {/* Question 3.04: Do you have enough technical skills to deliver the supply? */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
            <span className="text-gray-800 font-bold text-lg md:col-span-1">3.04</span>
            <label htmlFor="q304_answer" className="text-gray-800 text-lg md:col-span-1">Do you have enough technical skills to deliver the supply?</label>
            <div className="md:col-span-1">
              <select
                id="q304_answer"
                name="q304_answer"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none bg-white pr-8"
                value={capacityData.q304_answer}
                onChange={handleInputChange}
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Partially">Partially</option>
              </select>
            </div>
          </div>

          {/* Question 3.05: Do you have appropriate equipment/infrastructure/facilities to deliver the supply? */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
            <span className="text-gray-800 font-bold text-lg md:col-span-1">3.05</span>
            <label htmlFor="q305_answer" className="text-gray-800 text-lg md:col-span-1">Do you have appropriate equipment/infrastructure/facilities to deliver the supply?</label>
            <div className="md:col-span-1">
              <select
                id="q305_answer"
                name="q305_answer"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none bg-white pr-8"
                value={capacityData.q305_answer}
                onChange={handleInputChange}
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          {/* Question 3.06: What is your average time (in days) to respond to request for proposal/quotation? */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
            <span className="text-gray-800 font-bold text-lg md:col-span-1">3.06</span>
            <label htmlFor="q306_avgTimeResponse" className="text-gray-800 text-lg md:col-span-1">What is your average time (in days) to respond to request for proposal/quotation?</label>
            <div className="md:col-span-1">
              <input
                type="number" // Assuming numeric input for days
                id="q306_avgTimeResponse"
                name="q306_avgTimeResponse"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                value={capacityData.q306_avgTimeResponse}
                onChange={handleInputChange}
                placeholder="Enter days"
              />
            </div>
          </div>

          {/* Question 3.07: What is your average time (in days) to deliver the goods/services the receipt of Purchase Order? */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
            <span className="text-gray-800 font-bold text-lg md:col-span-1">3.07</span>
            <label htmlFor="q307_avgTimeDelivery" className="text-gray-800 text-lg md:col-span-1">What is your average time (in days) to deliver the goods/services the receipt of Purchase Order?</label>
            <div className="md:col-span-1">
              <input
                type="number" // Assuming numeric input for days
                id="q307_avgTimeDelivery"
                name="q307_avgTimeDelivery"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                value={capacityData.q307_avgTimeDelivery}
                onChange={handleInputChange}
                placeholder="Enter days"
              />
            </div>
          </div>

          {/* A redundant submit button if you prefer it here too, otherwise remove this one */}
          {/* <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            >
              Submit All Capacity Info
            </button>
          </div> */}

        </form>
      </div>
    </div>
  );
};

export default CapacityInformation;