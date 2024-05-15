import * as React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Button, Divider, Select, MenuItem, Typography, FormControl, FormLabel } from '@mui/material';
import { AiTwotoneEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect } from 'react';
import { updateData } from 'api/apiUtils';
import { validationSchema } from 'validations/Validations';
import Swal from 'sweetalert2';
import { checkTokenAndRedirect } from 'views/Cookies/cookies';


export default function CategoryListDrawer(props) {
    const { open, handleClose, mode, data, categories } = props;
    const [updatedData, setUpdatedData] = useState({ ...data });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const categoryData = categories.find(category => category._id === data);
        setUpdatedData(categoryData);
        const _id=checkTokenAndRedirect();
        
    }, [data]);

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        setUpdatedData(prevState => ({
            ...prevState,
            [name]: value
        }));

        try {
            await validationSchema.validateAt(name, { [name]: value });
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: '', 
            }));
        } catch (error) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: error.message, 
            }));
        }
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setUpdatedData((prevFormData) => ({
            ...prevFormData,
            Image: file,
        }));
    };
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await validationSchema.validate(updatedData, { abortEarly: false });
            const updateDataToSend = new FormData();
            updateDataToSend.append('Category', updatedData.Category);
            updateDataToSend.append('Code', updatedData.Code);
            updateDataToSend.append('Image', updatedData.Image); // Append the file content
            updateDataToSend.append('Priority', updatedData.Priority);
            updateDataToSend.append('Status', updatedData.Status);
            await updateData(`http://localhost:3001/EventCategoryapi/UpdateCategory/${data}`,  updateDataToSend);
            Swal.fire('Success', 'Category updated successfully!', 'success');
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
                        {mode === "edit" ?
                            <form encType="multipart/form-data" onSubmit={handleUpdate} method='PUT'>
                                <Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="Category"
                                            name="Category"
                                            label="Category"
                                            variant="outlined"
                                            fullWidth
                                            style={{ marginBottom: '15px', maxWidth: '300px' }}
                                            value={updatedData?.Category || ''}
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
                                        <TextField
                                            id="Code"
                                            name="Code"
                                            label="Code"
                                            variant="outlined"
                                            fullWidth
                                            style={{ marginBottom: '15px', maxWidth: '300px' }}
                                            value={updatedData?.Code || ''}
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
                                        <TextField
                                            id="Image"
                                            name="Image"
                                            label="Image"
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            style={{ marginBottom: '15px', maxWidth: '300px' }}
                                            value={updatedData?.Image || ''}
                                            disabled
                                        />
                                        {errors.Image && <div className="error" style={{ color: 'red', fontSize: '12px', marginLeft: '13px' }}>{errors.Image}</div>}
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
                                        <TextField
                                            id="priority"
                                            name="Priority"
                                            label="Priority"
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            style={{ marginBottom: '15px', maxWidth: '300px' }}
                                            value={updatedData?.Priority || ''}
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
