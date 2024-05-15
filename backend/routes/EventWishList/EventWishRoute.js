import express from 'express';
import { addUserWishController,viewUserWishController,updateUserWishController,deleteUserWishController } from '../../controller/wishusercontroller/WishUserController.js';
 
const EventWishRoute = express.Router();

EventWishRoute.post('/AddWishUser/:id',addUserWishController);
EventWishRoute.get('/ViewWishUser/:id',viewUserWishController);
EventWishRoute.put('/UpdateWishUser/:id',updateUserWishController);
EventWishRoute.delete('/DeleteWishUser/:id/:Id',deleteUserWishController);


  
export default EventWishRoute;
