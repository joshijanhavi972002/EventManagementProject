import express from 'express';
import { addUserWishController,viewUserWishController,updateUserWishController,deleteUserWishController } from '../../controller/wishusercontroller/WishUserController.js';
 
const EventWishRoute = express.Router();

EventWishRoute.post('/AddWishUser',addUserWishController);
EventWishRoute.get('/ViewWishUser',viewUserWishController);
EventWishRoute.put('/UpdateWishUser/:id',updateUserWishController);
EventWishRoute.delete('/DeleteWishUser/:id',deleteUserWishController);


  
export default EventWishRoute;
