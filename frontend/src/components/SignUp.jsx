import React, { useState,useEffect } from 'react';
import { toast } from 'react-toastify';


const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    securityQuestion: '',
    answer: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');

  useEffect(() => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError('Passwords do not match.');
    } else {
      setPasswordMatchError('');
    }
  }, [formData.password, formData.confirmPassword]);

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
    const apiEndpoint = 'https://asset-managements.onrender.com/user/signup';  // Ensure this is the correct endpoint

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
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setResponseMessage('Signup failed: ' + error.message);
        // Handle any errors that occur during the fetch operation
        toast.error('Signup failed: ' + error.message);
      });
  };

  return (
    <div className='signup-container'>
      <div className='form-container'>
        <h2 className='signUpHeader'>User Account</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Middle Name</label>
            <input
              type="text"
              name="middlename"
              value={formData.middlename}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {passwordMatchError && <p style={{ color: 'red' }}>{passwordMatchError}</p>}
          <div className='form-group'>
            <label>Security Question</label>
            <select
              name="securityQuestion"
              value={formData.securityQuestion}
              onChange={handleChange}
              required
            >
              <option value="">- Select -</option>
              <option value="question1">What is your pet's name?</option>
              <option value="question2">What is your mother's maiden name?</option>
              <option value="question3">What was your first car?</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Answer</label>
            <input
              type="text"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className='submit-btn'>Sign Up</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
  )
};

export default SignupForm;