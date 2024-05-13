import React, { useState, useEffect } from 'react';
import { FormControl, FormLabel, Grid, Select, TextField, MenuItem, Button } from '@mui/material';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { postData } from 'api/apiUtils';
import { validationSchema } from 'validations/Validations';
import { checkTokenAndRedirect } from 'views/Cookies/cookies';

function CreateCategoryDrawer() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        Category: '',
        Code: '',
        Image: null,
        Priority: '',
        Status: 'active', // Default status
    });
    useEffect(() => {
        checkTokenAndRedirect();
    });

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        try {
            await validationSchema.validateAt(name, { [name]: value });
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            console.log('formData ',formData);
            const formDataToSend = new FormData();
            formDataToSend.append('Category', formData.Category);
            formDataToSend.append('Code', formData.Code);
            formDataToSend.append('Image', formData.Image); // Append the file content
            formDataToSend.append('Priority', formData.Priority);
            formDataToSend.append('Status', formData.Status);
            await postData('http://localhost:3001/EventCategoryapi/EventCategory', formDataToSend);
            
            navigate('/dashboard/EventCategory/CategoryList');
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

    const handleShowCategory = () => {
       
        navigate('/dashboard/EventCategory/CategoryList');
    };

    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormLabel>Event Category</FormLabel>
                    <TextField
                        name="Category"
                        size="small"
                        fullWidth
                        type="text"
                        value={formData.Category}
                        onChange={handleInputChange}
                        error={!!errors.Category}
                        helperText={errors.Category}
                        InputProps={{
                            style: {
                                borderColor: errors.Category ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormLabel>Code:</FormLabel>
                    <TextField
                        name="Code"
                        size="small"
                        fullWidth
                        type="text"
                        value={formData.Code}
                        onChange={handleInputChange}
                        error={!!errors.Code}
                        helperText={errors.Code}
                        InputProps={{
                            style: {
                                borderColor: errors.Code ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormLabel>Choose Image:</FormLabel>
                    <input
                        type="file"
                        accept="image/*"
                        name="Image"
                        onChange={handleFileChange}
                    />
                    {errors.Image && <div className="error" style={{ color: 'red', fontSize: '12px', marginLeft: '13px' }}>{errors.Image}</div>}
                </Grid>
                <Grid item xs={12}>
                    <FormLabel>Priority:</FormLabel>
                    <TextField
                        name="Priority"
                        size="small"
                        fullWidth
                        type="text"
                        value={formData.Priority}
                        onChange={handleInputChange}
                        error={!!errors.Priority}
                        helperText={errors.Priority}
                        InputProps={{
                            style: {
                                borderColor: errors.Priority ? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormLabel>Status:</FormLabel>
                    <FormControl fullWidth>
                        <Select
                            name="Status"
                            size="small"
                            value={formData.Status}
                            onChange={handleInputChange}
                            error={!!errors.Status}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="disable">Disable</MenuItem>
                            <MenuItem value="deleted">Deleted</MenuItem>
                            <MenuItem value="block">Block</MenuItem>
                            <MenuItem value="completed">Completed</MenuItem>
                        </Select>
                        {errors.Status && <div className="error">{errors.Status}</div>}
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button style={{ margin: "5px" }} variant="contained" color="primary" type="submit">
                        Save
                    </Button>
                    <Button style={{ margin: "5px" }} variant="outlined" color="primary" onClick={handleShowCategory}>
                        Show Category
                    </Button>
                    <Button style={{ margin: "5px" }} variant="outlined" color="primary">
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default CreateCategoryDrawer;
