import express from 'express';
import { Image } from '../../middleware/multer.js';
import { addCategoryController, viewCategoryController, updateCategoryController, deleteCategoryController,getEventCategoryCount } from '../../controller/categorycontroller/CategoryController.js'; 
const EventCategoryRoute = express.Router();



EventCategoryRoute.post('/EventCategory/:id',Image, addCategoryController);
EventCategoryRoute.get('/ViewCategory/:id',viewCategoryController);
EventCategoryRoute.put('/UpdateCategory/:id', Image,updateCategoryController);
EventCategoryRoute.delete('/DeleteCategory/:id/:Id',deleteCategoryController);
EventCategoryRoute.get('/GetCountCategory/:id',getEventCategoryCount);



export default EventCategoryRoute;
