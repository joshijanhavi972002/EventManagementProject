import express from 'express';
import { Image } from '../../middleware/multer.js';
import { createEventController ,viewEventController ,updateEventController,deleteEventController ,getCompletedEventsController,getEventCount,getCompleteCount} from '../../controller/eventcontroller/EventController.js';
const CreateEventRoute = express.Router();



CreateEventRoute.post('/CreateEvent',Image,createEventController);
CreateEventRoute.get('/ViewEvent',viewEventController);
CreateEventRoute.put('/UpdateEvent/:id', Image,updateEventController);
CreateEventRoute.delete('/DeleteEvent/:id',deleteEventController);
CreateEventRoute.get('/CompleteEventList',getCompletedEventsController);
CreateEventRoute.get('/GetEventCount',getEventCount);
CreateEventRoute.get('/GetCompleteCount',getCompleteCount);
export default CreateEventRoute;
