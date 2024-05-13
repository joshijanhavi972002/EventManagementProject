import React ,{ useState,useEffect } from 'react';
import { FormControl, TextField,FormLabel, Grid, Select, MenuItem, Button,Typography } from '@mui/material';

import { useNavigate } from 'react-router';
import { postData } from 'api/apiUtils';
import { userMarkValidationSchema } from 'validations/Validations';
import { checkTokenAndRedirect } from 'views/Cookies/cookies';


function UserMark() {
    const navigate=useNavigate();
    const [error,setError]=useState([]);
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        Event_Name: '',
        User: '',
        Attendee_Status: '',
        Status: '', // Default status
    });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        checkTokenAndRedirect();
      }, []);
     //  <<<<<<<<<<<<<<<<<<<====================== for sending data to backend start===================>>>>>>>>>>>>>>>>

    const handleInputChange = async(e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        try {
            await userMarkValidationSchema.validateAt(name, { [name]: value });
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
            await userMarkValidationSchema.validate(formData, { abortEarly: false });
            await postData('http://localhost:3001/UserMarkapi/CreateUserMark', formData);
            navigate('/dashboard/UserMark/UserMarkList');
        } catch (error) {
            if (error.name === 'ValidationError') {
                const validationErrors = {};
                error.inner.forEach(err => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            }
            console.error('Error saving add member:', error);
        }
    };

    //  <<<<<<<<<<<<<<<<<<<====================== for sending data to backend End ===================>>>>>>>>>>>>>>>>

    const handleJointList=()=>{
        navigate('/dashboard/UserMark/UserMarkList');
    }
    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h1" gutterBottom style={{ marginBottom: "15px" }}>
                        Create User Mark 
                    </Typography>
                </Grid>
               
                {/* <Grid item xs={12} sm={12} md={12}>
                    <FormLabel>User:</FormLabel>
                    <FormControl fullWidth>
                        <Select name="" size="small" sx={{ minWidth: 250 }}>
                            <MenuItem value="XYZ">XYZ</MenuItem>
                            <MenuItem value="ABC">ABC</MenuItem>
                        </Select>
                    </FormControl>

                </Grid> */}
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
                <Grid item xs={12}>
                    <FormLabel>Gain Type</FormLabel>
                    <TextField
                        name="Gain_Type"
                        size="small"
                        fullWidth
                        type="text"
                        value={formData.Gain_Type}
                        onChange={handleInputChange}
                        error={!!errors.Gain_Type}
                        helperText={errors.Gain_Type}
                        InputProps={{
                            style: {
                                borderColor: errors.Gain_Type? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormLabel>Gain Coin</FormLabel>
                    <TextField
                        name="Gain_Coin"
                        size="small"
                        fullWidth
                        type="text"
                        value={formData.Gain_Coin}
                        onChange={handleInputChange}
                        error={!!errors.Gain_Coin}
                        helperText={errors.Gain_Coin}
                        InputProps={{
                            style: {
                                borderColor: errors.Gain_Coin? 'red' : 'green',
                            },
                        }}
                    />
                </Grid>
              
                <Grid item xs={12} sm={12} md={12}>
                    <FormLabel>Status:</FormLabel>
                    <FormControl fullWidth>
                        <Select name="Status" size="small" sx={{ minWidth: 250 }}  onChange={handleInputChange} value={formData.Status}
                        error={!!errors.Status}
                        helperText={errors.Status}
                        InputProps={{
                            style: {
                                borderColor: errors.Status ? 'red' : 'green',
                            },
                        }}>
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
                    </FormControl>              </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Button style={{ margin: "5px" }} variant="contained" color="primary" type="submit">Save</Button>
                    <Button style={{ margin: "5px" }} variant="contained" color="primary" onClick={handleJointList}>User Mark List</Button>
                    <Button style={{ margin: "5px" }} variant="outlined" color="primary">Cancel</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default UserMark;
