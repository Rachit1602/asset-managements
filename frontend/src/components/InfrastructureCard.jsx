import React, { useState } from 'react';
import Modal from 'react-modal';

// Ensure that the app element is set for accessibility
Modal.setAppElement('#root');

const InfrastructureInfoCard = ({ infrastructure }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Infrastructure Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Name</h3>
              <p className="text-lg font-semibold">{infrastructure.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Building Type</h3>
              <p className="text-lg font-semibold">{infrastructure.buildingType}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Location</h3>
              <p className="text-lg font-semibold">{infrastructure.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Construction Date</h3>
              <p className="text-lg font-semibold">{infrastructure.constructionDate}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Area (sqft)</h3>
              <p className="text-lg font-semibold">{infrastructure.areaSqft}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Value</h3>
              <p className="text-lg font-semibold">{infrastructure.value}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Status</h3>
              <p className="text-lg font-semibold">{infrastructure.status}</p>
            </div>
          </div>
          <button
            className="mt-4 text-white hover:underline"
            onClick={() => setIsModalOpen(true)}
          >
            More Details
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Infrastructure Details"
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg max-w-lg mx-auto p-6">
          <h2 className="text-2xl font-bold mb-4">Infrastructure Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Name</h3>
              <p className="text-lg font-semibold">{infrastructure.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Building Type</h3>
              <p className="text-lg font-semibold">{infrastructure.buildingType}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Location</h3>
              <p className="text-lg font-semibold">{infrastructure.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Construction Date</h3>
              <p className="text-lg font-semibold">{infrastructure.constructionDate}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Area (sqft)</h3>
              <p className="text-lg font-semibold">{infrastructure.areaSqft}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Value</h3>
              <p className="text-lg font-semibold">{infrastructure.value}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Status</h3>
              <p className="text-lg font-semibold">{infrastructure.status}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Events</h3>
              <p className="text-lg font-semibold">{infrastructure.events}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Maintenance History</h3>
              <p className="text-lg font-semibold">{infrastructure.maintenanceHistory}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Expenditure (Renovation Amount)</h3>
              <p className="text-lg font-semibold">{infrastructure['expenditure.Renoamount']}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Expenditure (Bills)</h3>
              <p className="text-lg font-semibold">{infrastructure['expenditure.bills']}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Floors</h3>
              <p className="text-lg font-semibold">{infrastructure.geoData.floors}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Geolocation</h3>
              <p className="text-lg font-semibold">{infrastructure.geoData.location}</p>
            </div>
          </div>
          <button
            className="mt-4 text-white hover:underline"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default InfrastructureInfoCard;
