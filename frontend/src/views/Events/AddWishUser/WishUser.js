import React ,{ useState,useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FormControl, FormLabel, Grid, Select, MenuItem, Button,Typography ,TextField} from '@mui/material';
import { postData } from 'api/apiUtils';
import { fetchData } from 'api/apiUtils';
import { wishUserValidationSchema } from 'validations/Validations';
import { checkTokenAndRedirect } from 'views/Cookies/cookies';

function Wishuser() {
    const navigate=useNavigate();
    const [error,setError]=useState([]);
    const[id ,setid]=useState();
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        Event_Name: '',
        User: '',
        Status: '', 
    });
    const [errors, setErrors] = useState({});
        //  <<<<<<<<<<<<<<<<<<<====================== for sending data to backend start===================>>>>>>>>>>>>>>>>

        const handleInputChange = async (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
            try {
                await wishUserValidationSchema.validateAt(name, { [name]: value });
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
            await wishUserValidationSchema.validate(formData, { abortEarly: false });
            await postData(`http://localhost:3001/EventWishUserapi/AddWishUser/${id}`, formData);
            navigate('/dashboard/Events/WishUserList');
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

    //----------------------for fetching categories start-----------------------
  
        useEffect(() => {
            const id=checkTokenAndRedirect();
            fetchData(`http://localhost:3001/CreateEventapi/ViewEvent/${id}`, setCategories,setError); 
            setid(id)
        }, []);
        if (error) {
            console.log(error);
          } 
    //----------------------for fetching categories end-------------------------

    //  <<<<<<<<<<<<<<<<<<<====================== for sending data to backend End ===================>>>>>>>>>>>>>>>>


    const handleWishList=()=>{
        navigate('/dashboard/Events/WishUserList');
    }
    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
            <Grid item xs={12}>
                    <Typography variant="h4" component="h1" gutterBottom style={{ marginBottom: "10px" }}>
                        Add Wish User
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <FormLabel>Event:</FormLabel>
                    <FormControl fullWidth>
                        <Select name="Event_Name" size="small" onChange={handleInputChange} value={formData.Event_Name} error={!!errors.Event_Name}
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
                    <Button style={{ margin: "5px" }} variant="outlined" color="primary" onClick={handleWishList}>Event Wish List</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default Wishuser;
