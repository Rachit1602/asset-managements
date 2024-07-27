import React, { useState } from 'react';



const VehicleForm = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        model: '',
        mileage: '',
        maintenanceHistory: '',
        issues: '',
        fuelType: '',
        odometerReading: '',
        serviceHistory: '',
        accidentHistory: '',
        tireCondition: '',
        brakeCondition: '',
        vehicleAge: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can send the form data to the server here
        console.log('Form Data Submitted:', formData);
        // Example: send formData to an API endpoint
        let a={
            assetType:'Vehicle',
            vehicle:formData
        }
        fetch('http://localhost:4000/assets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(a)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>Vehicle Information Form</h1>
            <form onSubmit={handleSubmit}>
                {/* Model */}
                <label htmlFor="model">Model:</label>
                <input
                    type="text"
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    required
                /><br/><br/>

                {/* Mileage */}
                <label htmlFor="mileage">Mileage:</label>
                <input
                    type="text"
                    id="mileage"
                    name="mileage"
                    value={formData.mileage}
                    onChange={handleChange}
                    required
                /><br/><br/>

                {/* Maintenance History */}
                <label htmlFor="maintenanceHistory">Maintenance History:</label>
                <textarea
                    id="maintenanceHistory"
                    name="maintenanceHistory"
                    value={formData.maintenanceHistory}
                    onChange={handleChange}
                    required
                /><br/><br/>

                {/* Issues */}
                <label htmlFor="issues">Issues:</label>
                <input
                    type="text"
                    id="issues"
                    name="issues"
                    value={formData.issues}
                    onChange={handleChange}
                /><br/><br/>

                {/* Fuel Type */}
                <label htmlFor="fuelType">Fuel Type:</label>
                <input
                    type="text"
                    id="fuelType"
                    name="fuelType"
                    value={formData.fuelType}
                    onChange={handleChange}
                /><br/><br/>

                {/* Odometer Reading */}
                <label htmlFor="odometerReading">Odometer Reading:</label>
                <input
                    type="text"
                    id="odometerReading"
                    name="odometerReading"
                    value={formData.odometerReading}
                    onChange={handleChange}
                /><br/><br/>

                {/* Service History */}
                <label htmlFor="serviceHistory">Service History:</label>
                <textarea
                    id="serviceHistory"
                    name="serviceHistory"
                    value={formData.serviceHistory}
                    onChange={handleChange}
                /><br/><br/>

                {/* Accident History */}
                <label htmlFor="accidentHistory">Accident History:</label>
                <input
                    type="text"
                    id="accidentHistory"
                    name="accidentHistory"
                    value={formData.accidentHistory}
                    onChange={handleChange}
                /><br/><br/>

                {/* Tire Condition */}
                <label htmlFor="tireCondition">Tire Condition:</label>
                <input
                    type="text"
                    id="tireCondition"
                    name="tireCondition"
                    value={formData.tireCondition}
                    onChange={handleChange}
                /><br/><br/>

                {/* Brake Condition */}
                <label htmlFor="brakeCondition">Brake Condition:</label>
                <input
                    type="text"
                    id="brakeCondition"
                    name="brakeCondition"
                    value={formData.brakeCondition}
                    onChange={handleChange}
                /><br/><br/>

                {/* Vehicle Age */}
                <label htmlFor="vehicleAge">Vehicle Age:</label>
                <input
                    type="text"
                    id="vehicleAge"
                    name="vehicleAge"
                    value={formData.vehicleAge}
                    onChange={handleChange}
                /><br/><br/>

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};


export default VehicleForm;