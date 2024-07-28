import React, { useState } from 'react';
import { Button, TextField, Typography, MenuItem, FormControl, InputLabel, Select, Container, Grid, Box } from '@mui/material';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNo: '',
    email: '',
    purpose: '',
    description: '',
    captcha: '',
  });

  const [captchaCode, setCaptchaCode] = useState('0EXU27');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <Container maxWidth="sm">
      <Box className="feedback-form">
        <Typography variant="h5" className="title">
          Indore Municipal Corporation
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                name="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="middleName"
                label="Middle Name"
                variant="outlined"
                fullWidth
                value={formData.middleName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="mobileNo"
                label="Mobile No."
                variant="outlined"
                fullWidth
                value={formData.mobileNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Purpose</InputLabel>
                <Select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  label="Purpose"
                >
                  <MenuItem value="">
                    <em>--Select Purpose--</em>
                  </MenuItem>
                  <MenuItem value="Complaint">Complaint</MenuItem>
                  <MenuItem value="Feedback">Feedback</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" component="label">
                Choose Files
                <input type="file" hidden />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} className="captcha-container">
              <Typography>{captchaCode}</Typography>
              <Button variant="contained" color="primary" onClick={() => setCaptchaCode('NEWCODE')}>
                Refresh
              </Button>
              <TextField
                name="captcha"
                label="Enter Captcha Code"
                variant="outlined"
                fullWidth
                value={formData.captcha}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" className="submit-btn">
                Submit
              </Button>
              <Button variant="contained" className="cancel-btn">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
        <div className="footer">
          <Typography>
            <a href="/">Help</a> | <a href="/">Home</a>
          </Typography>
        </div>
        <div className="language">
          <Typography>
            Language: <a href="/">English</a> | <a href="/">मराठी</a>
          </Typography>
        </div>
      </Box>
    </Container>
  );
};

export default FeedbackForm;