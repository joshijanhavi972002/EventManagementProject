import React from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import Axios from 'axios';
import { FormControl, FormLabel, Grid, Select, TextField, MenuItem, Button, Typography } from '@mui/material';
import { postData } from 'api/apiUtils';
import { fetchData } from 'api/apiUtils';
import { eventvalidationSchema } from 'validations/Validations';
import { checkTokenAndRedirect } from 'views/Cookies/cookies';


function CreateCategoryDrawer() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [error,setError]=useState([]);
    const [formData, setFormData] = useState({
        // Event_Category: '',
        Event_Name: '',
        Uid: '',
        Description: '',
        Job_Category: '',
        Venue: '',
        Start_Date: '',
        End_Date: '',
        Location: '',
        Maximum_Attendee: '',
        Speaker_Name: '',
        Session_Name: '',
        Start_Time: '',
        End_Time: '',
        Venue_Name: '',
        Status: '',
        Image: null,
    });
    const [errors, setErrors] = useState({});
    
    // ----------------------for fetching categories start-----------------------
    useEffect(() => {
        checkTokenAndRedirect();
        fetchData('http://localhost:3001/EventCategoryapi/ViewCategory', setCategories,setError); 
       
    }, []);
    if (error) {
        console.log(error);
      } 
    // ----------------------for fetching categories end-----------------------
    //  <<<<<<<<<<<<<<<<<<<====================== for sending data to backend Start ===================>>>>>>>>>>>>>>>>

    const handleInputChange = async(e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        try {
            await eventvalidationSchema.validateAt(name, { [name]: value });
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '', // Clear error if validation succeeds
            }));
        } catch (error) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: error.message, // Set error message if validation fails
            }));
        }
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            Image: file,
        }));
    };
//   http://localhost:3001/CreateEventapi/CreateEvent
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await eventvalidationSchema.validate(formData, { abortEarly: false });
        const formDataToSend = new FormData();
        formDataToSend.append('Category', formData.Category);
        formDataToSend.append('Code', formData.Code);
        formDataToSend.append('Image', formData.Image); // Append the file content
        formDataToSend.append('Priority', formData.Priority);
        formDataToSend.append('Status', formData.Status);
        await postData('http://localhost:3001/CreateEventapi/CreateEvent', formDataToSend);
        navigate('/dashboard/Events/EventList');
    } catch (error) {
        if (error.name === 'ValidationError') {
            const validationErrors = {};
            error.inner.forEach(err => {
                validationErrors[err.path] = err.message;
            });
            setErrors(validationErrors);
        }
        console.error('Error saving Event :', error);
    }
};


    

    const handleShowEvent = () => {
        navigate("/dashboard/Events/EventList");
    }

    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h1" gutterBottom style={{ marginBottom: "10px" }}>
                        Create Event
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>Category:</FormLabel>
                    <FormControl fullWidth>
                        <Select name="Event_Category" size="small" value={formData.Event_Category} onChange={handleInputChange}  error={!!errors.Event_Category}
                        helperText={errors.Event_Category}
                        InputProps={{
                            style: {
                                borderColor: errors.Event_Category ? 'red' : 'green',
                            },
                        }} >
                        {categories.map(category => (
                                <MenuItem key={category._id} value={category.Category}>{category.Category}</MenuItem>
                            ))}
                        </Select>
                        {errors.Status && <div className="error" style={{color: errors.Event_Category ? 'red' : 'green',fontSize:12,marginLeft:11,marginTop:5}}>{errors.Event_Category}</div>}
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel> Event Name</FormLabel>
                    <TextField
                        name="Event_Name"
                        size="small"
                        fullWidth
                        type="text"
                        onChange={handleInputChange}
                        value={formData.Event_Name}
                        error={!!errors.Event_Name}
                        helperText={errors.Event_Name}
                        InputProps={{
                            style: {
                                borderColor: errors.Event_Name ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>UID:</FormLabel>
                    <TextField
                        name="Uid"
                        size="small"
                        fullWidth
                        type="text"
                        onChange={handleInputChange}
                        value={formData.Uid}
                        error={!!errors.Uid}
                        helperText={errors.Uid}
                        InputProps={{
                            style: {
                                borderColor: errors.Uid ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>Description:</FormLabel>
                    <TextField
                        name="Description"
                        size="small"
                        fullWidth
                        type="text"
                        onChange={handleInputChange}
                        value={formData.Description}
                        error={!!errors.Description}
                        helperText={errors.Description}
                        InputProps={{
                            style: {
                                borderColor: errors.Description ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>Scheduled Status:</FormLabel>
                    <FormControl fullWidth>
                        <Select name="Scheduled_Status" size="small" onChange={handleInputChange} value={formData.Scheduled_Status}  error={!!errors.Scheduled_Status}
                        helperText={errors.Scheduled_Status}
                        InputProps={{
                            style: {
                                borderColor: errors.Scheduled_Status ? 'red' : 'green',
                            },
                        }}>
                            <MenuItem value="scheduled">Scheduled</MenuItem>
                            <MenuItem value="yetToScheduled">Yet to Scheduled</MenuItem>
                        </Select>
                        {errors.Scheduled_Status && <div className="error" style={{color: errors.Scheduled_Status ? 'red' : 'green',fontSize:12,marginLeft:11,marginTop:5}}>{errors.Scheduled_Status}</div>}

                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>Venue:</FormLabel>
                    <TextField
                        name="Venue"
                        size="small"
                        fullWidth
                        type="text"
                        onChange={handleInputChange}
                        value={formData.Venue}
                        error={!!errors.Venue}
                        helperText={errors.Venue}
                        InputProps={{
                            style: {
                                borderColor: errors.Venue ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>Start Date:</FormLabel>
                    <TextField
                        name="Start_Date"
                        size="small"
                        fullWidth
                        type="date"
                        onChange={handleInputChange}
                        value={formData.Start_Date}
                        error={!!errors.Start_Date}
                        helperText={errors.Start_Date}
                        InputProps={{
                            style: {
                                borderColor: errors.Start_Date ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>End Date:</FormLabel>
                    <TextField
                        name="End_Date"
                        size="small"
                        fullWidth
                        type="date"
                        onChange={handleInputChange}
                        value={formData.End_Date}
                        error={!!errors.End_Date}
                        helperText={errors.End_Date}
                        InputProps={{
                            style: {
                                borderColor: errors.End_Date ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>Location</FormLabel>
                    <TextField
                        name="Location"
                        size="small"
                        fullWidth
                        type="text"
                        onChange={handleInputChange}
                        value={formData.Location}
                        error={!!errors.Location}
                        helperText={errors.Location}
                        InputProps={{
                            style: {
                                borderColor: errors.Location ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                {/* Add Location (map) component */}
                <Grid item xs={12} sm={6}>
                    <FormLabel>Maximum Attendee:</FormLabel>
                    <TextField
                        name="Maximum_Attendee"
                        size="small"
                        fullWidth
                        type="number"
                        onChange={handleInputChange}
                        value={formData.Maximum_Attendee}
                        error={!!errors.Maximum_Attendee}
                        helperText={errors.Maximum_Attendee}
                        InputProps={{
                            style: {
                                borderColor: errors.Maximum_Attendee ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormLabel>Choose Image:</FormLabel>
                    {/* Add your file input here */}
                    <input
                        type="file"
                        accept="Image/*"
                        name="image"
                        onChange={handleFileChange}

                    />
                      {errors.Image && <div className="error" style={{ color: 'red', fontSize: '12px', marginLeft: '13px' }}>{errors.Image}</div>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>Speaker Name:</FormLabel>
                    <TextField
                        name="Speaker_Name"
                        size="small"
                        fullWidth
                        type="text"
                        onChange={handleInputChange}
                        value={formData.Speaker_Name}
                        error={!!errors.Speaker_Name}
                        helperText={errors.Speaker_Name}
                        InputProps={{
                            style: {
                                borderColor: errors.Speaker_Name ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>Session Name:</FormLabel>
                    <TextField
                        name="Session_Name"
                        size="small"
                        fullWidth
                        type="text"
                        onChange={handleInputChange}
                        value={formData.Session_Name}
                        error={!!errors.Session_Name}
                        helperText={errors.Session_Name}
                        InputProps={{
                            style: {
                                borderColor: errors.Session_Name ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>Start Time:</FormLabel>
                    <TextField
                        name="Start_Time"
                        size="small"
                        fullWidth
                        type="time"
                        onChange={handleInputChange}
                        value={formData.Start_Time}
                        error={!!errors.Start_Time}
                        helperText={errors.Start_Time}
                        InputProps={{
                            style: {
                                borderColor: errors.Start_Time ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>End Time:</FormLabel>
                    <TextField
                        name="End_Time"
                        size="small"
                        fullWidth
                        type="time"
                        onChange={handleInputChange}
                        value={formData.End_Time}
                        error={!!errors.End_Time}
                        helperText={errors.End_Time}
                        InputProps={{
                            style: {
                                borderColor: errors.End_Time ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>Venue Name:</FormLabel>
                    <TextField
                        name="Venue_Name"
                        size="small"
                        fullWidth
                        type="text"
                        onChange={handleInputChange}
                        value={formData.Venue_Name}
                        error={!!errors.Venue_Name}
                        helperText={errors.Venue_Name}
                        InputProps={{
                            style: {
                                borderColor: errors.Venue_Name ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel>Status:</FormLabel>
                    <FormControl fullWidth>
                        <Select name="Status" size="small" onChange={handleInputChange} value={formData.Status}  error={!!errors.Status}
                        helperText={errors.Status}
                        InputProps={{
                            style: {
                                borderColor: errors.Status ? 'red' : 'green',
                            },
                        }}>
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="disable">Disable</MenuItem>
                            <MenuItem value="deleted">Deleted</MenuItem>
                            <MenuItem value="timeout">Timeout</MenuItem>
                            <MenuItem value="completed">Completed</MenuItem>
                        </Select>
                        {errors.Status && <div className="error" style={{color: errors.Status ? 'red' : 'green',fontSize:12,marginLeft:11,marginTop:5}}>{errors.Status}</div>}

                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button style={{ margin: "5px" }} variant="contained" color="primary" type="submit">Save</Button>
                    <Button style={{ margin: "5px" }} variant="contained" color="primary" type="submit" onClick={handleShowEvent} >Show Event</Button>
                    <Button style={{ margin: "5px" }} variant="outlined" color="primary">Cancel</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default CreateCategoryDrawer;
