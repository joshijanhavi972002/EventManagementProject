import express from 'express';
import {loginController} from '../../controller/logincontroller/LoginController.js'
import {registerController , getregistrationCount} from '../../controller/logincontroller/RegistrationController.js'
import { profileController } from '../../controller/logincontroller/ProfileController.js';
const AdminRoute = express.Router();

AdminRoute.post('/login',loginController);
AdminRoute.post('/register',registerController);
AdminRoute.get('/profile/:token',profileController);
AdminRoute.get('/count',getregistrationCount);


export default AdminRoute;
