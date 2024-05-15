import React, { useState, useEffect } from 'react';
import { FormControl, TextField, FormLabel, Grid, Select, MenuItem, Button, Typography } from '@mui/material';

import { useNavigate } from 'react-router';
import { postData } from 'api/apiUtils';
import { fetchData } from 'api/apiUtils';
import { eventMemberValidationSchema } from 'validations/Validations';
import { checkTokenAndRedirect } from 'views/Cookies/cookies';



function EventMember() {
    const navigate = useNavigate();
    const [error, setError] = useState([]);
    const[id ,setid]=useState();
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        Event_Name: '',
        User: '',
        Attendee_Status: '',
        Status: '', 
    });
    const [errors, setErrors] = useState({});
   
    //  <<<<<<<<<<<<<<<<<<<====================== for sending data to backend start===================>>>>>>>>>>>>>>>>

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        try {
            await eventMemberValidationSchema.validateAt(name, { [name]: value });
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await eventMemberValidationSchema.validate(formData, { abortEarly: false });
            await postData(`http://localhost:3001/AddEventMemberapi/AddEventMember/${id}`, formData);
            navigate('/dashboard/Events/JoinEventList');
        } catch (error) {
            if (error.name === 'ValidationError') {
                const validationErrors = {};
                error.inner.forEach(err => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            }
            console.error('Error saving Event Category:', error);
        }
    };

    //----------------------for fetching categories start-----------------------

    useEffect(() => {
        const id =checkTokenAndRedirect();
       
        fetchData(`http://localhost:3001/CreateEventapi/ViewEvent/${id}`, setCategories, setError);
        setid(id)
    }, []);
    if (error) {
        console.log(error);
    }
    //----------------------for fetching categories end-------------------------

    //  <<<<<<<<<<<<<<<<<<<====================== for sending data to backend End ===================>>>>>>>>>>>>>>>>

    const handleJointList = () => {
        navigate('/dashboard/Events/JoinEventList');
    }
    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h1" gutterBottom style={{ marginBottom: "15px" }}>
                        Add Event Member
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <FormLabel>Event:</FormLabel>
                    <FormControl fullWidth>
                        <Select name="Event_Name" size="small" onChange={handleInputChange} value={formData.Event_Name} 
                        error={!!errors.Event_Name}
                            helperText={errors.Event_Name}
                            InputProps={{
                                style: {
                                    borderColor: errors.Event_Name ? 'red' : 'green',
                                },
                            }} >
                            {categories.map(category => (
                                <MenuItem key={category._id} value={category.Event_Name}>{category.Event_Name}</MenuItem>
                            ))}
                        </Select>
                        {errors.Event_Name && <div className="error" style={{ color: errors.Event_Name ? 'red' : 'green', fontSize: 12, marginLeft: 11, marginTop: 5 }}>{errors.Event_Name}</div>}

                    </FormControl>

                </Grid>
            
                <Grid item xs={12}>
                    <FormLabel>User</FormLabel>
                    <TextField
                        name="User"
                        size="small"
                        fullWidth
                        type="text"
                        value={formData.User}
                        onChange={handleInputChange}
                        error={!!errors.User}
                        helperText={errors.User}
                        InputProps={{
                            style: {
                                borderColor: errors.User ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <FormLabel>Attend Status:</FormLabel>
                    <FormControl fullWidth>
                        <Select name="Attendee_Status" size="small" sx={{ minWidth: 250 }} onChange={handleInputChange} value={formData.Attendee_Status}
                            error={!!errors.Attendee_Status}
                            helperText={errors.Attendee_Status}
                            InputProps={{
                                style: {
                                    borderColor: errors.Attendee_Status ? 'red' : 'green',
                                },
                            }}
                        >
                            <MenuItem value="waiting">Waiting</MenuItem>
                            <MenuItem value="attending">Attending</MenuItem>
                            <MenuItem value="completed">Completed</MenuItem>
                            <MenuItem value="absent">Absent</MenuItem>
                            <MenuItem value="cancelled">Cancelled</MenuItem>
                        </Select>
                        {errors.Attendee_Status && <div className="error" style={{ color: errors.Attendee_Status ? 'red' : 'green', fontSize: 12, marginLeft: 11, marginTop: 5 }}>{errors.Attendee_Status}</div>}
                    </FormControl>

                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <FormLabel>Status:</FormLabel>
                    <FormControl fullWidth>
                        <Select
                            name="Status"
                            size="small"
                            sx={{ minWidth: 250 }}
                            onChange={handleInputChange}
                            value={formData.Status}
                            error={!!errors.Status}
                            helperText={errors.Status}
                            InputProps={{
                                style: {
                                    borderColor: errors.Status ? 'red' : 'green',
                                },
                            }}
                        >
                            <MenuItem value="waiting">Disable</MenuItem>
                            <MenuItem value="attending">Completed</MenuItem>
                            <MenuItem value="completed">Active</MenuItem>
                            <MenuItem value="absent">Deleted</MenuItem>
                            <MenuItem value="cancelled">Blocked</MenuItem>
                        </Select>
                        {errors.Status && (
                            <div className="error" style={{ color: errors.Status ? 'red' : 'green', fontSize: 12, marginLeft: 11, marginTop: 5 }}>
                                {errors.Status}
                            </div>
                        )}
                    </FormControl> 
                    </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Button style={{ margin: "5px" }} variant="contained" color="primary" type="submit">Save</Button>
                    <Button style={{ margin: "5px" }} variant="contained" color="primary" onClick={handleJointList}>Joint Event List</Button>
                    <Button style={{ margin: "5px" }} variant="outlined" color="primary">Cancel</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default EventMember;
