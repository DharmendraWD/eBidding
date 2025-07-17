import React, { useState } from 'react';

const VendorDeclarationForm = () => {
  const [authorizedPerson, setAuthorizedPerson] = useState('');
  const [designation, setDesignation] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null

  // Get current date in YYYY-MM-DD format
  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setSubmissionStatus(null); // Clear previous status on new file selection
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!authorizedPerson || !designation || !selectedFile) {
      setSubmissionStatus('error');
      return;
    }

    console.log('Submitting Declaration:', {
      authorizedPerson,
      designation,
      declarationDate: getFormattedDate(),
      fileName: selectedFile.name,
      file: selectedFile, // In a real app, you'd send this to a backend
    });

    // Simulate API call
    setTimeout(() => {
      // Simulate success
      setSubmissionStatus('success');
      // Optionally reset form after successful submission
      // setAuthorizedPerson('');
      // setDesignation('');
      // setSelectedFile(null);
    }, 1500);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-[var(--box1)] min-h-screen">
      <div className="bg-[var(--mainbg)] rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-[var(--mainColor)] mb-6">Vendor Declaration</h2>

        {/* Declaration Text Box */}
        <div className="bg-[var(--mainbg2)] border-[var(--placeholderClr2)] text-blue-800 p-4 rounded-lg mb-6 text-sm leading-relaxed">
          <p>
            I hereby, declare that all the above information is true to the best of my knowledge and belief. AMDA Nepal has
            permission to verify any information provided as necessary. I fully understand that it is unlawful to knowingly
            make any false statement or representation on this registration form.
          </p>
        </div>

        {/* Form Fields Section */}
        <form onSubmit={handleSubmit} className="space-y-6"> {/* Adds vertical spacing between form rows */}

          {/* Authorized Person Field */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
            <label htmlFor="authorizedPerson" className="text-[var(--mainColor)] font-medium md:col-span-1">Authorized Person :</label>
            <div className="md:col-span-2">
              <input
                type="text"
                id="authorizedPerson"
                name="authorizedPerson"
                className="w-full p-3 border border-[var(--placeholderClr2)] rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                placeholder="Enter Authorized Person's Name"
                value={authorizedPerson}
                onChange={(e) => setAuthorizedPerson(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Designation Field */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
            <label htmlFor="designation" className="text-[var(--mainColor)] font-medium md:col-span-1">Designation :</label>
            <div className="md:col-span-2">
              <input
                type="text"
                id="designation"
                name="designation"
                className="w-full p-3 border border-[var(--placeholderClr2)] rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                placeholder="Enter Designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Declaration Date Field (Read-only) */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
            <label htmlFor="declarationDate" className="text-[var(--mainColor)] font-medium md:col-span-1">Declaration Date :</label>
            <div className="md:col-span-2">
              <input
                type="text"
                id="declarationDate"
                name="declarationDate"
                className="w-full p-3 border border-[var(--placeholderClr2)] rounded-lg text-[var(--mainColor)] cursor-not-allowed"
                value={getFormattedDate()}
                readOnly
              />
            </div>
          </div>

          {/* File Upload Field */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-start md:items-center gap-4">
            <label htmlFor="fileUpload" className="text-[var(--mainColor)] font-medium md:col-span-1">Upload :</label>
            <div className="md:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              {/* Custom File Input Button */}
              <label className="relative flex-shrink-0 cursor-pointer  hover:bg-[var(--menuHoverClr)] text-[var(--mainColor)] font-semibold py-2 px-4 rounded-lg border border-[var(--placeholderClr2)] transition duration-200 ease-in-out text-center">
                <span>Choose file</span>
                <input
                  type="file"
                  id="fileUpload"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                  required
                />
              </label>
              {/* Selected File Name Display */}
              <div className="flex-grow text-gray-600 text-sm py-2 px-3 bg-[var(--mainbg2)] rounded-lg flex items-center min-h-[40px] break-words">
                {selectedFile ? selectedFile.name : 'No file chosen'}
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1 md:col-start-2 md:col-span-2">Upload duly signed with Vendor Stamp</p>
          </div>

          {/* Submission Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-[var(--menuHoverClr)] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            >
              Submit Declaration
            </button>
          </div>

          {/* Submission Feedback Messages */}
          {submissionStatus === 'success' && (
            <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline ml-2">Declaration submitted successfully.</span>
            </div>
          )}
          {submissionStatus === 'error' && (
            <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline ml-2">Please fill all required fields and choose a file.</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default VendorDeclarationForm;