import React,{useState} from 'react';

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