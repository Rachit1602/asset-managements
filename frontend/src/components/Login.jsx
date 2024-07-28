/*  import React,{useState} from 'react';

export default function Login(){
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [responseMessage,setResponseMessage] = useState("");

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
        const apiEndpoint = 'http://localhost:4000/user/login';  // Ensure this is the correct endpoint
    
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
            setResponseMessage('Login successful!');
            // You can add further actions here, like redirecting the user or displaying a success message
          })
          .catch((error) => {
            console.error('Error:', error);
            setResponseMessage('Login failed: ' + error.message);
            // Handle any errors that occur during the fetch operation
          });
      };
    return(
        <form onSubmit={handleSubmit}>
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
    )
}

*/


import React, { useState } from 'react';


export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const apiEndpoint = 'https://asset-managements.onrender.com/user/login';

    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        setLoading(false);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        setResponseMessage('Login successful!');
      })
      .catch((error) => {
        console.error('Error:', error);
        setResponseMessage('Login failed: ' + error.message);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-describedby="emailError"
          />
          {errors.email && <span id="emailError" className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            aria-describedby="passwordError"
          />
          {errors.password && <span id="passwordError" className="error">{errors.password}</span>}
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </form>
    </div>
  );
}
