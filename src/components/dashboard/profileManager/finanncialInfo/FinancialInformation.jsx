import React, { useState } from 'react';

const FinancialInformation = () => {
  const [fiscalYear, setFiscalYear] = useState('');
  const [exportAmount, setExportAmount] = useState('');
  const [totalBusinessAmount, setTotalBusinessAmount] = useState('');
  const [remarks, setRemarks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fiscalYear,
      exportAmount,
      totalBusinessAmount,
      remarks,
    });
    // In a real application, you'd send this data to an API
    alert('Form submitted! Check console for data.');
    // Optionally clear fields
    setFiscalYear('');
    setExportAmount('');
    setTotalBusinessAmount('');
    setRemarks('');
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Financial Information : upto 3 Years</h2>

        {/* The section you specifically requested: Heading and Input Row */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end mb-4">
            {/* Fiscal Year */}
            <div>
              <label htmlFor="fiscalYear" className="block text-gray-700 text-sm font-medium mb-2">Fiscal Year</label>
              <input
                type="text"
                id="fiscalYear"
                name="fiscalYear"
                placeholder="YYYY-YY"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                value={fiscalYear}
                onChange={(e) => setFiscalYear(e.target.value)}
              />
            </div>

            {/* Export Amount */}
            <div>
              <label htmlFor="exportAmount" className="block text-gray-700 text-sm font-medium mb-2">Export Amount</label>
              <input
                type="number"
                id="exportAmount"
                name="exportAmount"
                placeholder="Export Amount"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                value={exportAmount}
                onChange={(e) => setExportAmount(e.target.value)}
              />
            </div>

            {/* Total Business Amount */}
            <div>
              <label htmlFor="totalBusinessAmount" className="block text-gray-700 text-sm font-medium mb-2">Total Business Amount</label>
              <input
                type="number"
                id="totalBusinessAmount"
                name="totalBusinessAmount"
                placeholder="Total Business Amount"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                value={totalBusinessAmount}
                onChange={(e) => setTotalBusinessAmount(e.target.value)}
              />
            </div>

            {/* Remarks */}
            <div>
              <label htmlFor="remarks" className="block text-gray-700 text-sm font-medium mb-2">Remarks</label>
              <input
                type="text"
                id="remarks"
                name="remarks"
                placeholder="Remarks"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-4 items-center'>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
            >
              Submit
            </button>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
            >
              Submit
            </button>
            
            </div>
                       {/* Submit Button */}
          {/* <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
            >
              Submit
            </button>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
            >
              Submit
            </button>
          </div> */}
            <div>
         
            </div>
          </div>

   
        </form>

        {/* You can add a list of previously entered records here if needed,
            similar to the full FinancialInformation component from before. */}
      </div>
    </div>
  );
};

export default FinancialInformation;