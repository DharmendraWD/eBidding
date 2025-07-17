import React from 'react'

function BasicDetails() {
  return (
    <div className='bg-[var(--mainbg2)] px-[22px]'>
        <h3 className="text-lg font-semibold mb-2">Basic Details</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 veryLightBoxSHadow">
        <div>
          <p className="text-gray-500 text-sm">Name</p>
          <p className="font-medium">Dharmendra</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">ID</p>
          <p className="font-medium">N/A</p> {/* Replace with actual data if available */}
        </div>
        <div>
          <p className="text-gray-500 text-sm">Address</p>
          <p className="font-medium">Putalisadak, Kathmandu</p> {/* Replace with actual data if available */}
        </div>
        <div>
          <p className="text-gray-500 text-sm">District</p>
          <p className="font-medium">Kathmandu</p> {/* Replace with actual data if available */}
        </div>
      </div>
      
    </div>
  )
}

export default BasicDetails
