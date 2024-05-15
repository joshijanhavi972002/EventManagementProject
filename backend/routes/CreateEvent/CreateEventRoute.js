import express from 'express';
import { Image } from '../../middleware/multer.js';
import { createEventController ,viewEventController ,updateEventController,deleteEventController ,getCompletedEventsController,getEventCount,getCompleteCount} from '../../controller/eventcontroller/EventController.js';
const CreateEventRoute = express.Router();



CreateEventRoute.post('/CreateEvent/:id',Image, createEventController);
CreateEventRoute.get('/ViewEvent/:id',viewEventController);
CreateEventRoute.put('/UpdateEvent/:id', Image,updateEventController);
CreateEventRoute.delete('/DeleteEvent/:id/:Id',deleteEventController);
CreateEventRoute.get('/CompleteEventList/:id',getCompletedEventsController);
CreateEventRoute.get('/GetEventCount/:id',getEventCount);
CreateEventRoute.get('/GetCompleteCount/:id',getCompleteCount);
export default CreateEventRoute;
