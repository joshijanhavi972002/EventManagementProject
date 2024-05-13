import * as React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Button, Divider, Select, MenuItem, Typography, FormControl, FormLabel, InputBase, inputLabelClasses } from '@mui/material';
import { AiTwotoneEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect } from 'react';
import { updateData } from 'api/apiUtils';
import { wishUserValidationSchema } from 'validations/Validations';
import { checkTokenAndRedirect } from 'views/Cookies/cookies';


export default function EventListShow(props) {
    // const { open, handleClose, mode, data } = props;
    const { open, handleClose, mode, data, categories } = props;

    const [updatedData, setUpdatedData] = useState({ ...data });
    const [errors, setErrors] = useState({});
   

    useEffect(() => {
        const categoryData = categories.find(category => category._id === data);
        setUpdatedData(categoryData);
        checkTokenAndRedirect();
    }, [data]);

    const handleInputChange = async (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUpdatedData(prevState => ({
            ...prevState,
            [name]: value
        }));
        try {
            await wishUserValidationSchema.validateAt(name, { [name]: value });
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: '', // Clear error if validation succeeds
            }));
        } catch (error) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: error.message, // Set error message if validation fails
            }));
        }

    };
   
   

    const handleUpdate = async () => {
        try {
            await wishUserValidationSchema.validate(updatedData, { abortEarly: false });
            const response = await updateData(`http://localhost:3001/EventWishUserapi/UpdateWishUser/${data}`, updatedData);

           
        } catch (error) {
            if (error.name === 'ValidationError') {
                const validationErrors = {};
                error.inner.forEach(err => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            } else {
                console.error('Error updating category:', error);
                Swal.fire('Error', 'Failed to update category!', 'error');
            }           
        }
    };


    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={open}
                        onClose={handleClose}

                    >
                        <Grid style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '10px' }}>
                            <ClearIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
                            <Typography variant='h3' style={{ marginLeft: '10px' }}> Edit Category </Typography>
                        </Grid>
                        <Divider orientation='horizontal' style={{ marginTop: '10px' }} />
                        {/* <Grid style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '15px', padding: "5px" }}> */}
                        {/* <TextField variant='outlined' placeholder='Enter a search ' /> */}
                        {/* <FormControl fullWidth style={{ margin: "10px", width: "200px" }}>
                                <Select
                                    id="search"
                                    name="search"
                                    size="small"
                                    fullWidth
                                >
                                    <MenuItem value="Website Referrals">Website Referrals</MenuItem>
                                    <MenuItem value="Advertising">Advertising </MenuItem>
                                    <MenuItem value="Social Media">Social Media </MenuItem>
                                </Select>
                            </FormControl>
                            <Button variant='outlined' style={{ margin: "10px" }}>+</Button>
                        </Grid> */}
                        {mode === "show" ? <Grid style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: '15px', padding: "5px" }}>
                            <Typography variant='h5' style={{ margin: "10px", paddingTop: "6px" }}> {data.name} </Typography>
                            <Button variant='text' style={{ margin: "10px" }}><AiTwotoneEdit style={{ margin: "5px" }} /> Edit</Button>
                            <Button variant='text' style={{ margin: "10px" }}><AiOutlineDelete style={{ margin: "5px" }} /> Remove</Button>
                        </Grid> : null}
                        <Divider orientation='horizontal' style={{ marginTop: '10px' }} />
                        {mode === "show" ?
                            <>
                                <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                    <Typography variant='h5' style={{ margin: "10px" }}>type: {data.type}</Typography>
                                </Grid>
                                <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                    <Typography variant='h5' style={{ margin: "10px" }}>name:  {data.name}</Typography>
                                </Grid>
                                <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                    <Typography variant='h5' style={{ margin: "10px" }}>country:  {data.country}</Typography>
                                </Grid>
                                <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                    <Typography variant='h5' style={{ margin: "10px" }}>phone:  {data.phone}</Typography>
                                </Grid>
                                <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                    <Typography variant='h5' style={{ margin: "10px" }}>email:  {data.email}</Typography>
                                </Grid>
                                <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                    <Typography variant='h5' style={{ margin: "10px" }}>people:  {data.name}</Typography>
                                </Grid>
                                <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                    <Typography variant='h5' style={{ margin: "10px" }}>company:  </Typography>
                                </Grid> </> : null}
                        {/* <Button variant='outlined' style={{ margin: "10px" }} >ADD NEW CLIENT</Button> */}
                        {mode === "add" ? <form>
                            <Grid style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '15px', padding: "5px" }}>
                                <FormControl fullWidth style={{ margin: "10px", width: "280px" }}>
                                    <FormLabel required>Type</FormLabel>

                                    <Select
                                        id="type"
                                        name="type"
                                        size="small"
                                        fullWidth
                                        required
                                    >
                                        <MenuItem value="People">People</MenuItem>
                                        <MenuItem value="Company">Company</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                <FormControl fullWidth style={{ margin: "10px", width: "280px" }}>
                                    <FormLabel >People</FormLabel>

                                    <Select
                                        id="people"
                                        name="people"
                                        size="small"
                                        fullWidth
                                    >
                                        <MenuItem value="People">1</MenuItem>
                                        <MenuItem value="Company">2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                <FormControl fullWidth style={{ margin: "10px", width: "280px" }}>
                                    <FormLabel>Company</FormLabel>

                                    <Select
                                        id="company"
                                        name="company"
                                        size="small"
                                        fullWidth
                                    >
                                        <MenuItem value="People">1</MenuItem>
                                        <MenuItem value="Company">2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                <Button variant='contained' type='submit' style={{ margin: "10px" }}>Submit</Button>
                            </Grid>
                        </form> : null}
                        {mode === "edit" ? <form onSubmit={handleUpdate} method='PUT'>
                            <Grid >
                                <Grid item xs={12}>
                                    <TextField
                                        id="Name"
                                        name="Event_Name"
                                        label="Event_Name"
                                        variant="outlined"
                                        fullWidth
                                        style={{ marginBottom: '15px', maxWidth: '300px' }}
                                        value={updatedData?.Event_Name || ''}
                                        onChange={handleInputChange}
                                        error={!!errors.Event_Name}
                                        helperText={errors.Event_Name}
                                        InputProps={{
                                            style: {
                                                borderColor: errors.Event_Name ? 'red' : 'green',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="User"
                                        name="User"
                                        label="User"
                                        variant="outlined"
                                        fullWidth
                                        style={{ marginBottom: '15px', maxWidth: '300px' }}
                                        value={updatedData?.User || ''}
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
                                    <FormControl fullWidth style={{ marginBottom: '15px', maxWidth: '300px' }}>
                                        <InputLabel id="status-label">Status</InputLabel>
                                        <Select
                                            id="Status"
                                            name="Status"
                                            labelId="status-label"
                                            variant="outlined"
                                            fullWidth
                                            value={updatedData?.Status || ''}
                                            onChange={handleInputChange}
                                            error={!!errors.Status}
                                            helperText={errors.Status}
                                            InputProps={{
                                                style: {
                                                    borderColor: errors.Status ? 'red' : 'green',
                                                },
                                            }}
                                            
                                        >
                                            <MenuItem value="active">Active</MenuItem>
                                            <MenuItem value="disable">Disable</MenuItem>
                                            <MenuItem value="deleted">Deleted</MenuItem>
                                            <MenuItem value="block">Block</MenuItem>
                                            <MenuItem value="completed">Completed</MenuItem>
                                        </Select>
                                        {errors.Status && (
                            <div className="error" style={{ color: errors.Status ? 'red' : 'green', fontSize: 12, marginLeft: 11, marginTop: 5 }}>
                                {errors.Status}
                            </div>
                        )}
                                    </FormControl>
                                </Grid>
                               
                            </Grid>
                            <Button variant="contained" type='submit'>
                                Update
                            </Button>
                        </form> : null}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}