import express from 'express';

import { addEventMemberController ,viewEventMemberController,updateEventMemberController,deleteEventMemberController,getAbsentEventMembersController,getCompleteEventMembersController} from '../../controller/eventmembercontroller/EventMemberController.js';
const AddEventMemberRoute = express.Router();



AddEventMemberRoute.post('/AddEventMember',addEventMemberController);
AddEventMemberRoute.get('/ViewEventMember',viewEventMemberController);
AddEventMemberRoute.put('/UpdateEventMember/:id',updateEventMemberController);
AddEventMemberRoute.delete('/DeleteEventMember/:id',deleteEventMemberController);
AddEventMemberRoute.get('/AbsenseEventMember',getAbsentEventMembersController);
AddEventMemberRoute.get('/CompleteEventMember',getCompleteEventMembersController)
export default AddEventMemberRoute
