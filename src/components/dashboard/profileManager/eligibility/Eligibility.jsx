import React, { useState } from 'react';

const EligibilityForm = () => {
  const [eligibilityData, setEligibilityData] = useState({
    q401_legalProceedings: '', // 'Yes', 'No'
    q402_taxObligations: '',   // 'Yes', 'No'
    q403_debarredSuspended: '', // 'Yes', 'No'
    q404_cancellationOrder: '', // 'Yes', 'No'
  });

  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setEligibilityData((prevData) => ({ ...prevData, [name]: value }));
    setSubmitStatus(null); // Clear status on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send eligibilityData to your backend
    console.log('Submitting Eligibility Information:', eligibilityData);

    // Basic validation: Check if all dropdowns have been selected
    const allSelected = Object.values(eligibilityData).every(value => value !== '');

    if (allSelected) {
      setSubmitStatus('success');
      // Optionally, reset form after successful submission:
      // setEligibilityData({ q401_legalProceedings: '', q402_taxObligations: '', q403_debarredSuspended: '', q404_cancellationOrder: '' });
    } else {
      setSubmitStatus('error');
    }

    setTimeout(() => setSubmitStatus(null), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Eligibility</h2>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Submit Eligibility
          </button>
        </div>

        {/* Submission Feedback Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline ml-2">Eligibility information submitted successfully.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={() => setSubmitStatus(null)}>
              <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 2.65a1.2 1.2 0 1 1-1.697-1.697L8.303 10l-2.651-2.651a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-2.651a1.2 1.2 0 1 1 1.697 1.697L11.697 10l2.651 2.651a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline ml-2">Please answer all eligibility questions.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={() => setSubmitStatus(null)}>
              <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 2.65a1.2 1.2 0 1 1-1.697-1.697L8.303 10l-2.651-2.651a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-2.651a1.2 1.2 0 1 1 1.697 1.697L11.697 10l2.651 2.651a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4"> {/* Vertical spacing between question blocks */}

          {/* Question 4.01 */}
          <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
            <span className="text-gray-800 font-bold text-lg md:col-span-1">4.01</span>
            <label htmlFor="q401_legalProceedings" className="text-gray-800 text-lg md:col-span-7">
              Have not you or your company / principals have not been subject of legal proceedings for insolvency, bankruptcy, receivership of your business activities suspended for related reasons?
            </label>
            <div className="md:col-span-2 flex justify-end">
              <select
                id="q401_legalProceedings"
                name="q401_legalProceedings"
                className="w-full md:w-auto p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none bg-white pr-8"
                value={eligibilityData.q401_legalProceedings}
                onChange={handleSelectChange}
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          {/* Question 4.02 */}
          <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
            <span className="text-gray-800 font-bold text-lg md:col-span-1">4.02</span>
            <label htmlFor="q402_taxObligations" className="text-gray-800 text-lg md:col-span-7">
              We have fulfill our tax obligations for the last 3 years.
            </label>
            <div className="md:col-span-2 flex justify-end">
              <select
                id="q402_taxObligations"
                name="q402_taxObligations"
                className="w-full md:w-auto p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none bg-white pr-8"
                value={eligibilityData.q402_taxObligations}
                onChange={handleSelectChange}
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          {/* Question 4.03 */}
          <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
            <span className="text-gray-800 font-bold text-lg md:col-span-1">4.03</span>
            <label htmlFor="q403_debarredSuspended" className="text-gray-800 text-lg md:col-span-7">
              Our firm / individual making this application or any of its directors are not been debarred or suspended from participating in public procurement.
            </label>
            <div className="md:col-span-2 flex justify-end">
              <select
                id="q403_debarredSuspended"
                name="q403_debarredSuspended"
                className="w-full md:w-auto p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none bg-white pr-8"
                value={eligibilityData.q403_debarredSuspended}
                onChange={handleSelectChange}
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          {/* Question 4.04 */}
          <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
            <span className="text-gray-800 font-bold text-lg md:col-span-1">4.04</span>
            <label htmlFor="q404_cancellationOrder" className="text-gray-800 text-lg md:col-span-7">
              As a current / previous supplier of AMDA Nepal, we have not been issued with a letter of cancellation of Purchase Order for the failure to supply goods / services within the agreed time or supplying goods / services outside the ordered specifications.
            </label>
            <div className="md:col-span-2 flex justify-end">
              <select
                id="q404_cancellationOrder"
                name="q404_cancellationOrder"
                className="w-full md:w-auto p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none bg-white pr-8"
                value={eligibilityData.q404_cancellationOrder}
                onChange={handleSelectChange}
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EligibilityForm;