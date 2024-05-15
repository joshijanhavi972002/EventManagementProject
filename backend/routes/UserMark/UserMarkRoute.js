import express from 'express';
import { addUserMarkController,viewUserMarkController } from '../../controller/usermarkcontroller/UserMarkController.js';

const UserMarkRoute = express.Router();

UserMarkRoute.post('/CreateUserMark/:id',addUserMarkController );
UserMarkRoute.get('/getUserMark/:id',viewUserMarkController );
export default UserMarkRoute;
