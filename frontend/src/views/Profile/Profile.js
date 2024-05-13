import React, { useState, useEffect } from 'react';
import { FormControl, TextField, FormLabel, Grid, Select, MenuItem, Button, Typography } from '@mui/material';

import { useNavigate } from 'react-router';
import { postData } from 'api/apiUtils';
import { fetchProfileData } from 'api/apiUtils';
import { eventMemberValidationSchema } from 'validations/Validations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import teams2 from '../Profile/Uploads/team2.jpg'
import Cookies from 'js-cookie';

function Profile() {
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    // const [error, setError] = useState([]);
    // const [categories, setCategories] = useState([]);
    // const [formData, setFormData] = useState({
    //     Event_Name: '',
    //     User: '',
    //     Attendee_Status: '',
    //     Status: '', 
    // });
    // const [errors, setErrors] = useState({});
    // //  <<<<<<<<<<<<<<<<<<<====================== for sending data to backend start===================>>>>>>>>>>>>>>>>

    // const handleInputChange = async (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    //     try {
    //         await eventMemberValidationSchema.validateAt(name, { [name]: value });
    //         setErrors((prevErrors) => ({
    //             ...prevErrors,
    //             [name]: '', // Clear error if validation succeeds
    //         }));
    //     } catch (error) {
    //         setErrors((prevErrors) => ({
    //             ...prevErrors,
    //             [name]: error.message, // Set error message if validation fails
    //         }));
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await eventMemberValidationSchema.validate(formData, { abortEarly: false });
    //         await postData('http://localhost:3001/AddEventMemberapi/AddEventMember', formData);
    //         navigate('/dashboard/Events/JoinEventList');
    //     } catch (error) {
    //         if (error.name === 'ValidationError') {
    //             const validationErrors = {};
    //             error.inner.forEach(err => {
    //                 validationErrors[err.path] = err.message;
    //             });
    //             setErrors(validationErrors);
    //         }
    //         console.error('Error saving Event Category:', error);
    //     }
    // };

    // //----------------------for fetching categories start-----------------------

    useEffect(() => {
        const token = Cookies.get('token');
         console.log('token ',token);
        if (!token) {
             navigate('/login')
            return;
        }
       
        // Call fetchProfileData asynchronously and set state when data is fetched
        const fetchData = async () => {
            try {
                const response = await fetchProfileData(`http://localhost:3001/Adminapi/profile/${token}`);
             
                setCategories(response);
             
            } catch (error) {
                console.error('Error fetching data:', error);
                
            }
        };

        fetchData(); 
    }, []);
    if (error) {
        console.log(error);
    }
    // //----------------------for fetching categories end-------------------------

    // //  <<<<<<<<<<<<<<<<<<<====================== for sending data to backend End ===================>>>>>>>>>>>>>>>>

    // const handleJointList = () => {
    //     console.log("handlejointlist");
    //     navigate('/dashboard/Events/JoinEventList');
    // }
    const styles = {
        card: {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            maxWidth: '300px',
            margin: 'auto',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '8px',
        },
        title: {
            color: '#555',
            fontSize: '18px',
            fontWeight: 'bold',
        },
        button: {
            border: 'none',
            outline: 'none',
            display: 'inline-block',
            padding: '10px 20px',
            color: 'white',
            backgroundColor: '#000',
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '5px',
            marginTop: '20px',
            fontSize: '16px',
        },
        link: {
            textDecoration: 'none',
            color: '#000',
            margin: '0 10px',
            fontSize: '20px',
        },
    };

    return (
        <div style={styles.card} className="card">
            <img src={teams2 } alt="John" style={{ width: '100%' }} />

            <h1>{categories.firstName } {categories.lastName}</h1>
            <p style={styles.title} className="title">Admin</p>
            <p style={styles.title} className="title">Email:{categories.email}</p>
            <p>Samyotech Pvt Ltd</p>
            <div style={{ margin: '24px 0' }}>
                {/* <a href="#" style={styles.link}>Dribbble</a>
                <a href="#" style={styles.link}>Twitter</a> */}
                {/* <a href="#" style={styles.link}>LinkedIn</a>
                <a href="#" style={styles.link}>Facebook</a> */}
            </div>
            {/* <p><button style={styles.button}>Contact</button></p> */}
        </div>
    );
}

export default Profile;
