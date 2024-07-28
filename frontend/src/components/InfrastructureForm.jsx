import React, { useState } from 'react';

const InfrastructureForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    buildingType: '',
    location: '',
    constructionDate: '',
    areaSqft: '',
    value: '',
    status: '',
    events: '',
    maintenanceHistory: '',
    expenditure: {
        renoamount:'',
        bills:'',
    },
    geoData: {
            floors: '',
            location: '',
        },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('geoData')) {
        // Update geoData field
        const [_, key] = name.split('.');
        setFormData(prevData => ({
            ...prevData,
            geoData: {
                ...prevData.geoData,
                [key]: value
            }
        }));
    }

        else {
            // Update other form fields
            setFormData({
                ...formData,
                [name]: value
            });
        }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically handle form submission, e.g., make an API call
    let a={
        assetType:'Infrastructure',
        infrastructure:formData
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
    <form onSubmit={handleSubmit}>
    <h1>infrastructure Information Form</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Building Type:</label>
        <input
          type="text"
          name="buildingType"
          value={formData.buildingType}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Construction Date:</label>
        <input
          type="text"
          name="constructionDate"
          value={formData.constructionDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Area (Sqft):</label>
        <input
          type="text"
          name="areaSqft"
          value={formData.areaSqft}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Value:</label>
        <input
          type="text"
          name="value"
          value={formData.value}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Status:</label>
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Events:</label>
        <input
          type="text"
          name="events"
          value={formData.events}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Maintenance History:</label>
        <textarea
          name="maintenanceHistory"
          value={formData.maintenanceHistory}
          onChange={handleChange}
        />
      </div>
     
      <fieldset>
                    <legend>expenditure</legend>
                    <div>
                        <label>Renoamount</label>
                        <input
                            type="text"
                            placeholder='type renovation amount '
                            name="expenditure.Renoamount"
                            value={formData.expenditure.Renoamount}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>bills</label>
                        <input
                            type="text"
                             
                            name="expenditure.bills"
                            value={formData.expenditure.bills}
                            onChange={handleChange}
                        />
                    </div>
                 
                  
     </fieldset>

      <fieldset>
                    <legend>Geo Data</legend>
                    <div>
                        <label>floors:</label>
                        <input
                            type="text"
                            name="geoData.floors"
                            value={formData.geoData.floors}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>location</label>
                        <input
                            type="text"
                            name="geoData.location"
                            value={formData.geoData.location}
                            onChange={handleChange}
                        />
                    </div>
                 
                  
     </fieldset>


      <button type="submit" className='submit-btn'>Submit</button>
    </form>
  );
};

export default InfrastructureForm;