import React, { useState } from 'react';

const ProfileEdit = () => {
  const [profileData, setProfileData] = useState({
    name: 'CCTV Nepal Pvt Ltd', // Pre-filled from screenshot
    id: '1573', // Pre-filled from screenshot, assumed read-only for now
    address: 'Putalisadak, Kathmandu', // Pre-filled from screenshot
    district: 'Kathmandu', // Pre-filled from screenshot
    tradingInstitution: '',
    country: 'Nepal', // Pre-filled
    legalStatus: 'Single', // Pre-filled
    natureOfBusiness: 'Wholesaler', // Pre-filled
    mobile: '9851024764', // Pre-filled
    phone: '',
    faxNumber: '',
    email: 'janampandey2@gmail.com', // Pre-filled
    websiteUrl: '',
    proprietorName: '',
    vatPanNumber: '',
    vatPanType: 'PAN', // Default to PAN based on screenshot
    contactPerson: '',
    designation: '',
    registrationDate: '',
    renewalDate: '',
    fulltimeEmployee: '0',
    branchOffice: '0',
    branchLocation: '',
    photo: null, // For file upload
  });

  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
    setSubmitStatus(null); // Clear status on input change
  };

  const handleFileChange = (e) => {
    setProfileData((prevData) => ({ ...prevData, photo: e.target.files[0] }));
    setSubmitStatus(null); // Clear status on file change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send profileData to your backend
    console.log('Submitting Profile Information:', profileData);

    // Basic validation example (can be expanded based on your requirements)
    if (
      !profileData.name ||
      !profileData.address ||
      !profileData.mobile ||
      !profileData.email ||
      !profileData.proprietorName ||
      !profileData.vatPanNumber ||
      !profileData.contactPerson
    ) {
      setSubmitStatus('error');
    } else {
      setSubmitStatus('success');
      // Optionally, clear form or navigate after success
    }

    setTimeout(() => setSubmitStatus(null), 3000); // Clear message after 3 seconds
  };

  const handleCancel = () => {
    // Implement cancel logic, e.g., navigate back or reset form
    console.log("Form cancelled.");
    // setProfileData(initialState); // If you want to reset
    setSubmitStatus(null);
  };


  return (
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Top Header Section */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800">Profile Manager</h2>
          {/* Main Submit button at the top */}
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Submit Information
          </button>
        </div>

        {/* Submission Feedback Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline ml-2">Profile information submitted successfully.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={() => setSubmitStatus(null)}>
              <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 2.65a1.2 1.2 0 1 1-1.697-1.697L8.303 10l-2.651-2.651a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-2.651a1.2 1.2 0 1 1 1.697 1.697L11.697 10l2.651 2.651a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline ml-2">Please fill all required fields.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={() => setSubmitStatus(null)}>
              <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 2.65a1.2 1.2 0 1 1-1.697-1.697L8.303 10l-2.651-2.651a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-2.651a1.2 1.2 0 1 1 1.697 1.697L11.697 10l2.651 2.651a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8 overflow-auto max-h-[60vh]"> {/* Main form container with vertical spacing */}

          {/* General Information Section */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">General Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  value={profileData.name}
                  onChange={handleInputChange}
                  readOnly // Assumed read-only
                />
              </div>
              {/* ID */}
              <div>
                <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-1">ID</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 cursor-not-allowed"
                  value={profileData.id}
                  readOnly // Assumed read-only
                />
              </div>
              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  value={profileData.address}
                  onChange={handleInputChange}
                />
              </div>
              {/* District */}
              <div>
                <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">District</label>
                <select
                  id="district"
                  name="district"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none bg-white pr-8"
                  value={profileData.district}
                  onChange={handleInputChange}
                >
                  <option value="Kathmandu">Kathmandu</option>
                  <option value="Lalitpur">Lalitpur</option>
                  <option value="Bhaktapur">Bhaktapur</option>
                  {/* Add more districts as needed */}
                </select>
              </div>
            </div>
          </div>

          {/* Detail Information Section */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Detail Information</h3>
            <div className="space-y-6"> {/* Vertical spacing for sub-sections */}
              {/* Trading Institution */}
              <div>
                <label htmlFor="tradingInstitution" className="block text-sm font-medium text-gray-700 mb-1">
                  Trading Institution
                  <span className="text-gray-500 text-xs ml-2">(if different than name)</span>
                </label>
                <input
                  type="text"
                  id="tradingInstitution"
                  name="tradingInstitution"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  placeholder="Trading institution"
                  value={profileData.tradingInstitution}
                  onChange={handleInputChange}
                />
              </div>

              {/* Country, Legal Status & Nature of Business */}
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Country, Legal Status & Nature of Business</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Country */}
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <select
                      id="country"
                      name="country"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none bg-white pr-8"
                      value={profileData.country}
                      onChange={handleInputChange}
                    >
                      <option value="Nepal">Nepal</option>
                      <option value="India">India</option>
                      <option value="China">China</option>
                      {/* Add more countries */}
                    </select>
                  </div>
                  {/* Legal Status */}
                  <div>
                    <label htmlFor="legalStatus" className="block text-sm font-medium text-gray-700 mb-1">Legal Status</label>
                    <select
                      id="legalStatus"
                      name="legalStatus"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none bg-white pr-8"
                      value={profileData.legalStatus}
                      onChange={handleInputChange}
                    >
                      <option value="Single">Single</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Private Limited">Private Limited</option>
                      {/* Add more statuses */}
                    </select>
                  </div>
                  {/* Nature of Business */}
                  <div>
                    <label htmlFor="natureOfBusiness" className="block text-sm font-medium text-gray-700 mb-1">Nature of Business</label>
                    <select
                      id="natureOfBusiness"
                      name="natureOfBusiness"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none bg-white pr-8"
                      value={profileData.natureOfBusiness}
                      onChange={handleInputChange}
                    >
                      <option value="Wholesaler">Wholesaler</option>
                      <option value="Retailer">Retailer</option>
                      <option value="Service Provider">Service Provider</option>
                      {/* Add more business types */}
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Contact Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Mobile */}
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                      value={profileData.mobile}
                      onChange={handleInputChange}
                      placeholder="98XXXXXXXX"
                      required
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                    />
                  </div>
                  {/* Fax Number */}
                  <div>
                    <label htmlFor="faxNumber" className="block text-sm font-medium text-gray-700 mb-1">Fax Number</label>
                    <input
                      type="text"
                      id="faxNumber"
                      name="faxNumber"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                      value={profileData.faxNumber}
                      onChange={handleInputChange}
                      placeholder="Fax"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                      value={profileData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                  {/* Website / URL */}
                  <div>
                    <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-1">Website / URL</label>
                    <input
                      type="url"
                      id="websiteUrl"
                      name="websiteUrl"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                      value={profileData.websiteUrl}
                      onChange={handleInputChange}
                      placeholder="Web"
                    />
                  </div>
                </div>
              </div>

              {/* Proprietor & VAT/PAN */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Proprietor Name */}
                <div>
                  <label htmlFor="proprietorName" className="block text-sm font-medium text-gray-700 mb-1">Proprietor Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="proprietorName"
                    name="proprietorName"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                    value={profileData.proprietorName}
                    onChange={handleInputChange}
                    placeholder="Owner Name"
                    required
                  />
                </div>
                {/* VAT / PAN Number */}
                <div className="grid grid-cols-3 gap-2 items-end"> {/* Nested grid for VAT/PAN and dropdown */}
                  <div className="col-span-2">
                    <label htmlFor="vatPanNumber" className="block text-sm font-medium text-gray-700 mb-1">VAT / PAN Number <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="vatPanNumber"
                      name="vatPanNumber"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                      value={profileData.vatPanNumber}
                      onChange={handleInputChange}
                      placeholder="604290537"
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <select
                      id="vatPanType"
                      name="vatPanType"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none bg-white pr-8"
                      value={profileData.vatPanType}
                      onChange={handleInputChange}
                    >
                      <option value="PAN">PAN</option>
                      <option value="VAT">VAT</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Person & Designation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Person */}
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">Contact Person <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                    value={profileData.contactPerson}
                    onChange={handleInputChange}
                    placeholder="Purnya Prabha Kafle"
                    required
                  />
                </div>
                {/* Designation */}
                <div>
                  <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                    value={profileData.designation}
                    onChange={handleInputChange}
                    placeholder="Head"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Company Information Section */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Registration Date */}
              <div>
                <label htmlFor="registrationDate" className="block text-sm font-medium text-gray-700 mb-1">Registration Date</label>
                <input
                  type="date"
                  id="registrationDate"
                  name="registrationDate"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  value={profileData.registrationDate}
                  onChange={handleInputChange}
                />
              </div>
              {/* Renewal Date */}
              <div>
                <label htmlFor="renewalDate" className="block text-sm font-medium text-gray-700 mb-1">Renewal Date</label>
                <input
                  type="date"
                  id="renewalDate"
                  name="renewalDate"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  value={profileData.renewalDate}
                  onChange={handleInputChange}
                />
              </div>
              {/* Fulltime Employee */}
              <div>
                <label htmlFor="fulltimeEmployee" className="block text-sm font-medium text-gray-700 mb-1">Fulltime Employee</label>
                <input
                  type="number"
                  id="fulltimeEmployee"
                  name="fulltimeEmployee"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  value={profileData.fulltimeEmployee}
                  onChange={handleInputChange}
                  min="0"
                />
              </div>
              {/* Branch Office */}
              <div>
                <label htmlFor="branchOffice" className="block text-sm font-medium text-gray-700 mb-1">Branch Office</label>
                <input
                  type="number"
                  id="branchOffice"
                  name="branchOffice"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  value={profileData.branchOffice}
                  onChange={handleInputChange}
                  min="0"
                />
              </div>
            </div>
            {/* Branch Location */}
            <div className="mt-6"> {/* Margin top to separate from previous grid */}
              <label htmlFor="branchLocation" className="block text-sm font-medium text-gray-700 mb-1">Branch Location : Address Information</label>
              <textarea
                id="branchLocation"
                name="branchLocation"
                rows="3" // Adjust rows as needed
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                value={profileData.branchLocation}
                onChange={handleInputChange}
                placeholder="Enter Branch Information"
              ></textarea>
            </div>
          </div>

          {/* Photo Upload Section */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Photo</h3>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Custom File Input Button */}
              <label className="relative flex-shrink-0 cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-lg border border-blue-200 transition duration-200 ease-in-out text-center">
                <span>Choose file</span>
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
              </label>
              {/* Selected File Name */}
              <div className="flex-grow text-gray-600 text-sm py-2 px-3 bg-gray-100 rounded-lg flex items-center min-h-[40px] break-words">
                {profileData.photo ? profileData.photo.name : 'No file chosen'}
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Length and Height should be same to fit on the Profile Manager</p>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            >
              Submit Information
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
  );
};

export default ProfileEdit;