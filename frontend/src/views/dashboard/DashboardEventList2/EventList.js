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


export default function EventListShow2(props) {
    // const { open, handleClose, mode, data } = props;
    const { open, handleClose, mode, data, categories } = props;

    const [updatedData, setUpdatedData] = useState({ ...data });
   

    useEffect(() => {
        if(categories){
            const categoryData = categories.find(category => category._id === data);
            setUpdatedData(categoryData);
        }
       
    }, [data]);

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUpdatedData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setUpdatedData({ ...updatedData, Image: file.name });
    };
   

    const handleUpdate = async () => {
        try {
            const response = await updateData(`http://localhost:3001/CreateEventapi/UpdateEvent/${data}`, updatedData);
           
        } catch (error) {
            console.error('Error updating category:', error);
           
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
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="Event_Category"
                                        name="Event_Category"
                                        label="Event Category"
                                        variant="outlined"
                                        fullWidth

                                        style={{ marginBottom: '15px', maxWidth: '300px' }}
                                        value={updatedData?.Event_Category || ''}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="Description"
                                        name="Description"
                                        label="Description"
                                        variant="outlined"
                                        fullWidth

                                        style={{ marginBottom: '15px', maxWidth: '300px' }}
                                        value={updatedData?.Description || ''}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth style={{ marginBottom: '15px', maxWidth: '300px' }}>
                                        <InputLabel id="status-label">Scheduled Status</InputLabel>
                                        <Select
                                            id='Scheduled_Status'
                                            name="Scheduled_Status"
                                            labelId="status-label"
                                            variant="outlined"
                                            fullWidth

                                            value={updatedData?.Scheduled_Status|| ''}
                                            onChange={handleInputChange}
                                        >
                                            <MenuItem value="scheduled">Scheduled</MenuItem>
                                            <MenuItem value="yetToScheduled">Yet to Scheduled</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        style={{ marginBottom: '15px', maxWidth: '300px' }}
                                        id="Venue"
                                        name="Venue"
                                        label="Venue"
                                        type="text"
                                        variant="outlined"
                                        fullWidth

                                        value={updatedData?.Venue || ''}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    
                                    <TextField
                                        style={{ marginBottom: '15px', maxWidth: '300px' }}
                                        id="Start_Date"
                                        name="Start_Date"
                                        label="Start Date"
                                        fullWidth
                                        type="date"
                                        onChange={handleInputChange}
                                        value={updatedData?.Start_Date || ''}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  
                                    <TextField
                                        style={{ marginBottom: '15px', maxWidth: '300px' }}
                                        id="End_Date"
                                        name="End_Date"
                                        label="End Date"
                                        fullWidth
                                        type="date"
                                        onChange={handleInputChange}
                                        value={updatedData?.End_Date ||''}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  
                                    <TextField
                                        style={{ marginBottom: '15px', maxWidth: '300px' }}
                                        id="Location"
                                        name="Location"
                                        label="Location"
                                        fullWidth
                                        type="text"
                                        onChange={handleInputChange}
                                        value={updatedData?.Location ||''}
                                    />
                                </Grid>
                                
                                <Grid item xs={12} sm={6}>
                                   
                                    <TextField
                                        style={{ marginBottom: '15px', maxWidth: '300px' }}
                                        id="Maximum_Attendee"
                                        name="Maximum_Attendee"
                                        label="Maximum_Attendee"
                                        fullWidth
                                        type="number"
                                        onChange={handleInputChange}
                                        value={updatedData?.Maximum_Attendee || ''}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="Image"
                                        name="Image"
                                        type="Text"
                                        variant="outlined"
                                        fullWidth

                                        style={{ marginBottom: '15px', maxWidth: '300px' }}
                                        value={updatedData?.Image || ''}
                                        disabled

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="Image"
                                        name="Image"
                                        type="file"
                                        variant="standard"
                                        fullWidth

                                        style={{ marginBottom: '15px', maxWidth: '300px' }}
                                        onChange={handleFileChange}

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
                                        >
                                            <MenuItem value="active">Active</MenuItem>
                                            <MenuItem value="disable">Disable</MenuItem>
                                            <MenuItem value="deleted">Deleted</MenuItem>
                                            <MenuItem value="block">Block</MenuItem>
                                            <MenuItem value="completed">Completed</MenuItem>
                                        </Select>
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