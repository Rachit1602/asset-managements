import React, { useState } from 'react';
import Modal from 'react-modal';

const VehicleInfoCard = ({ vehicle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Vehicle Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Model</h3>
              <p className="text-lg font-semibold">{vehicle.model}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Mileage</h3>
              <p className="text-lg font-semibold">{vehicle.mileage} km/l</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Fuel Type</h3>
              <p className="text-lg font-semibold">{vehicle.fuelType}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Odometer Reading</h3>
              <p className="text-lg font-semibold">{vehicle.odometerReading} km</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Vehicle Age</h3>
              <p className="text-lg font-semibold">{vehicle.vehicleAge} years</p>
            </div>
          </div>
          <button
            className="mt-4 text-blue-500 hover:underline"
            onClick={() => setIsModalOpen(true)}
          >
            More Details
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Vehicle Details"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg max-w-md mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Vehicle Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Model</h3>
              <p className="text-lg font-semibold">{vehicle.model}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Mileage</h3>
              <p className="text-lg font-semibold">{vehicle.mileage} km/l</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Fuel Type</h3>
              <p className="text-lg font-semibold">{vehicle.fuelType}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Odometer Reading</h3>
              <p className="text-lg font-semibold">{vehicle.odometerReading} km</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Vehicle Age</h3>
              <p className="text-lg font-semibold">{vehicle.vehicleAge} years</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Maintenance History</h3>
              <p className="text-lg font-semibold">{vehicle.maintenanceHistory}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Service History</h3>
              <p className="text-lg font-semibold">{vehicle.serviceHistory}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Accident History</h3>
              <p className="text-lg font-semibold">{vehicle.accidentHistory}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Tire Condition</h3>
              <p className="text-lg font-semibold">{vehicle.tireCondition}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Brake Condition</h3>
              <p className="text-lg font-semibold">{vehicle.brakeCondition}</p>
            </div>
            <div className="col-span-2">
              <h3 className="text-sm font-medium text-gray-500">Issues</h3>
              <p className="text-lg font-semibold">{vehicle.issues}</p>
            </div>
          </div>
          <button
            className="mt-4 text-blue-500 hover:underline"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default VehicleInfoCard;
