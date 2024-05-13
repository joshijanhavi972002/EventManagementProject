import express from 'express';
import { Image } from '../../middleware/multer.js';
import { addCategoryController, viewCategoryController, updateCategoryController, deleteCategoryController,getEventCategoryCount } from '../../controller/categorycontroller/CategoryController.js'; 
const EventCategoryRoute = express.Router();



EventCategoryRoute.post('/EventCategory',Image, addCategoryController);
EventCategoryRoute.get('/ViewCategory',viewCategoryController);
EventCategoryRoute.put('/UpdateCategory/:id', Image,updateCategoryController);
EventCategoryRoute.delete('/DeleteCategory/:id',deleteCategoryController);
EventCategoryRoute.get('/GetCountCategory',getEventCategoryCount);



export default EventCategoryRoute;
