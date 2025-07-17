import React, { useEffect, useState } from 'react'
import popupStyle from '../css/profile.module.css';
import ProfileEdit from '../profile/ProfileEdit';


function CompanyInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // For delayed animation


  const openModal = () => {
    setShowModal(true); // render modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // trigger animation
    setTimeout(() => setShowModal(false), 300); // remove modal after animation
  };

  // Trigger animation after modal is added to DOM
  useEffect(() => {
    if (showModal) {
      setTimeout(() => setIsModalOpen(true), 10); // slight delay to allow transition
    }
  }, [showModal]);

  // Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside to close
  const handleWrapperClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Trading Institution</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 veryLightBoxSHadow">
        <div>
          <p className="text-gray-500 text-sm">Country</p>
          <p className="font-medium">Nepal</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Legal Status</p>
          <p className="font-medium">Single</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Nature of Business</p>
          <p className="font-medium">Wholeseller</p>
        </div>
      </div>
  
      <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 veryLightBoxSHadow">
        <div>
          <p className="text-gray-500 text-sm">Mobile</p>
          <p className="font-medium">9851024764</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Phone</p>
          <p className="font-medium">N/A</p> {/* Replace with actual data if available */}
        </div>
        <div>
          <p className="text-gray-500 text-sm">Fax</p>
          <p className="font-medium">N/A</p> {/* Replace with actual data if available */}
        </div>
      </div>
  
      <h3 className="text-lg font-semibold mb-2">Email & Website</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 veryLightBoxSHadow">
        <div>
          <p className="text-gray-500 text-sm">Email</p>
          <p className="font-medium">janampandey2@gmail.com</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Web</p>
          <p className="font-medium">N/A</p> {/* Replace with actual data if available */}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">Ownership Information</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 veryLightBoxSHadow">
        <div>
          <p className="text-gray-500 text-sm">Proprietor</p>
          <p className="font-medium">janampandey2@gmail.com</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">VAT PAN No.</p>
          <p className="font-medium">N/A</p> {/* Replace with actual data if available */}
        </div>
        <div>
          <p className="text-gray-500 text-sm">Mode</p>
          <p className="font-medium">PAN</p> {/* Replace with actual data if available */}
        </div>
      </div>
      {/* CONTACT PERSON INFORMATIOB  */}
      <h3 className="text-lg font-semibold mb-2">Contact Person Information</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 veryLightBoxSHadow">
        <div>
          <p className="text-gray-500 text-sm">Contact Person</p>
          <p className="font-medium">Bikesh Bhojpuriya</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Designation</p>
          <p className="font-medium">CTO</p> {/* Replace with actual data if available */}
        </div>
      </div>
      {/* COMPNAY INFORMATION  */}
      <h3 className="text-lg font-semibold mb-2">Company Information</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 veryLightBoxSHadow">
        <div>
          <p className="text-gray-500 text-sm">Registration Date</p>
          <p className="font-medium">2077/02/12</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Renewel Date</p>
          <p className="font-medium">2084/10/12</p> {/* Replace with actual data if available */}
        </div>
        <div>
          <p className="text-gray-500 text-sm">Employee Count</p>
          <p className="font-medium">12</p> {/* Replace with actual data if available */}
        </div>
        <div>
          <p className="text-gray-500 text-sm">Branch Count</p>
          <p className="font-medium">9832</p> {/* Replace with actual data if available */}
        </div>
      </div>
    

      <button className={`${popupStyle.btn__purple} mt-4`} onClick={openModal}>
     Edit
      </button>

      {showModal && (
        <div
          className={`${popupStyle.modal__wrapper} ${isModalOpen ? popupStyle.active : ''}`}
          onClick={handleWrapperClick}
        >
          <div
            className={`${popupStyle.modal__container} ${isModalOpen ? popupStyle.activeContainer : ''}`}
          >
            <button className={popupStyle.close} onClick={closeModal}>
              &times;
            </button>
            <div>
              <ProfileEdit></ProfileEdit>
            </div>
            <div className={popupStyle.action}>
              <button className={popupStyle.btn__purple}>Login</button>
            </div>
          </div>
        </div>
      )}
    </div>

    
  )
}

export default CompanyInfo
