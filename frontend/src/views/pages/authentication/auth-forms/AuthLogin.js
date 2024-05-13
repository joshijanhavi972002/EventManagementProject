import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import Cookies from 'js-cookie'; 
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery 
} from '@mui/material';
import * as Yup from 'yup';
import { postData } from 'api/apiUtils';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const FirebaseLogin = ({ ...others }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [checked, setChecked] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response =await postData('http://localhost:3001/Adminapi/login', formData);
      console.log("response ",response);
      const { userData, jwtToken } = response;
        
        const expiryTime = 1;
        Cookies.set('token', jwtToken, { expires: expiryTime });
        const cookie =Cookies.set('user', JSON.stringify(userData), { expires: expiryTime });
        if(cookie){
          navigate('/');
        }
       
        
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ width: '100%',marginLeft:5 , maxWidth: 360 }}>
      <form onSubmit={handleSubmit} {...others}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="outlined-adornment-email">Email Address / Username</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type="email"
            value={formData.email}
            name="email"
            onChange={handleInputChange}
            label="Email Address / Username"
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            name="password"
            onChange={handleInputChange}
            label="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1} sx={{ mb: 2 }}>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />}
            label="Remember me"
          />
          <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
            Forgot Password?
          </Typography>
        </Stack>

        <Button fullWidth size="large" type="submit" variant="contained" color="secondary">
          Sign in
        </Button>
      </form>
    </Box>
  );
};

export default FirebaseLogin;
