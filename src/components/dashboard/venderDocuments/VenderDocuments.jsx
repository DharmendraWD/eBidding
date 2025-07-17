import React, { useState } from 'react';

// This data would typically come from an API or be part of your component's state
const initialDocuments = [
  { id: 'companyRegistration', label: 'Company Registration', file: null, submitted: false },
  { id: 'vatRegistration', label: 'VAT Registration', file: null, submitted: false },
  { id: 'taxClearance', label: 'Tax Clearance Certificate', file: null, submitted: false },
  { id: 'auditReport', label: 'Audit Report', file: null, submitted: false },
];

const VendorDocuments = () => {
  const [documents, setDocuments] = useState(initialDocuments);
  const [submissionStatus, setSubmissionStatus] = useState({}); // { docId: 'success' | 'error' | null }

  const handleFileChange = (documentId, event) => {
    const file = event.target.files[0];
    setDocuments((prevDocs) =>
      prevDocs.map((doc) =>
        doc.id === documentId ? { ...doc, file: file, submitted: false } : doc
      )
    );
    // Clear any previous submission status for this document
    setSubmissionStatus((prevStatus) => ({ ...prevStatus, [documentId]: null }));
  };

  const handleSubmit = (documentId) => {
    const docToSubmit = documents.find((doc) => doc.id === documentId);
    if (docToSubmit && docToSubmit.file) {
      console.log(`Submitting ${docToSubmit.label}:`, docToSubmit.file.name);
      // Simulate API call
      return new Promise((resolve) => {
        setTimeout(() => {
          // Simulate success or failure
          const success = Math.random() > 0.2; // 80% chance of success
          if (success) {
            setSubmissionStatus((prevStatus) => ({ ...prevStatus, [documentId]: 'success' }));
            setDocuments((prevDocs) =>
              prevDocs.map((doc) =>
                doc.id === documentId ? { ...doc, submitted: true } : doc
              )
            );
            resolve();
          } else {
            setSubmissionStatus((prevStatus) => ({ ...prevStatus, [documentId]: 'error' }));
            resolve();
          }
        }, 1000); // Simulate network delay
      });
    } else {
      console.log(`No file selected for ${docToSubmit.label}`);
      setSubmissionStatus((prevStatus) => ({ ...prevStatus, [documentId]: 'error' })); // Indicate error for no file
    }
  };

  return (
    <div className="container bg-[var(--mainbg] mx-auto p-4 sm:p-6 lg:p-8  min-h-screen">
      <div className="bg-[var(--box1)] rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-[var(--mainColor)] mb-6">Vendor Documents</h2>

        <div className="space-y-4"> {/* Adds vertical spacing between document rows */}
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="
                flex flex-col md:flex-row items-start md:items-center justify-between
                p-4 border border-[var(--placeholderClr2)] rounded-lg shadow-sm
                bg-[var(--mainbg)] hover:bg-[var(--menuHoverClr)] transition-colors duration-200
              "
            >
              {/* Document Label */}
              <div className="flex-1 mb-3 md:mb-0 md:mr-4">
                <p className="text-lg font-medium text-[var(--mainColor)]">{doc.label}</p>
              </div>

              {/* File Input and Status */}
              <div className="flex-grow flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 w-full md:w-auto">
                {/* Custom File Input Button */}
                <label className="relative flex-shrink-0 cursor-pointer bg-[var(--box1)] hover:bg-[var(--menuHoverClr)] text-blue-700 font-semibold py-2 px-4 rounded-lg border border-[var(--placeholderClr2)] transition duration-200 ease-in-out text-center">
                  <span>Choose file</span>
                  <input
                    type="file"
                    className="absolute bg-[var(--mainbg)] inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => handleFileChange(doc.id, e)}
                  />
                </label>

                {/* Selected File Name */}
                <div className="flex-grow text-gray-600 text-sm py-2 px-3 bg-[var(--menuHoverClr)] rounded-lg flex items-center min-h-[40px] break-words">
                  {doc.file ? doc.file.name : 'No file chosen'}
                </div>

                {/* Submit Button */}
                <button
                  onClick={() => handleSubmit(doc.id)}
                  disabled={!doc.file || submissionStatus[doc.id] === 'success'} // Disable if no file or already submitted
                  className={`
                    flex-shrink-0 py-2 px-6 rounded-lg font-semibold
                    transition duration-300 ease-in-out
                    ${doc.file
                      ? 'bg-blue-600 hover:bg-[var(--menuHoverClr)] text-white shadow-md'
                      : 'bg-gray-300 text-gray-600 cursor-not-allowed'}
                    ${submissionStatus[doc.id] === 'success' && 'bg-green-600 hover:bg-[var(--menuHoverClr)] text-[var(--mainColor)]'}
                    ${submissionStatus[doc.id] === 'error' && 'bg-red-500 hover:bg-[var(--menuHoverClr)] text-[var(--mainColor)]'}
                  `}
                >
                  {submissionStatus[doc.id] === 'success' ? (
                    <svg className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : submissionStatus[doc.id] === 'error' ? (
                    <svg className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>

              {/* Submission Status Message */}
              {submissionStatus[doc.id] === 'success' && (
                <p className="mt-2 text-sm text-green-600 w-full md:w-auto md:text-right">Uploaded successfully!</p>
              )}
              {submissionStatus[doc.id] === 'error' && (
                <p className="mt-2 text-sm text-red-600 w-full md:w-auto md:text-right">Upload failed or no file selected.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorDocuments;