import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    password: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);

    // Define the API endpoint where you want to send the data
    const apiEndpoint = 'http://localhost:4000/user/signup';  // Ensure this is the correct endpoint

    // Send the data to the server using fetch
    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        setResponseMessage('Signup successful!');
        // You can add further actions here, like redirecting the user or displaying a success message
      })
      .catch((error) => {
        console.error('Error:', error);
        setResponseMessage('Signup failed: ' + error.message);
        // Handle any errors that occur during the fetch operation
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Middle Name:</label>
        <input
          type="text"
          name="middlename"
          value={formData.middlename}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn">Sign Up</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
};

export default SignupForm;