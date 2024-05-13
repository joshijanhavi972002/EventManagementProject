import express from 'express';
import { addUserMarkController,viewUserMarkController } from '../../controller/usermarkcontroller/UserMarkController.js';

const UserMarkRoute = express.Router();

UserMarkRoute.post('/CreateUserMark',addUserMarkController );
UserMarkRoute.get('/getUserMark',viewUserMarkController );
export default UserMarkRoute;
