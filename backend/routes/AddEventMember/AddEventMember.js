import express from 'express';

import { addEventMemberController ,viewEventMemberController,updateEventMemberController,deleteEventMemberController,getAbsentEventMembersController,getCompleteEventMembersController} from '../../controller/eventmembercontroller/EventMemberController.js';
const AddEventMemberRoute = express.Router();



AddEventMemberRoute.post('/AddEventMember/:id',addEventMemberController);
AddEventMemberRoute.get('/ViewEventMember/:id',viewEventMemberController);
AddEventMemberRoute.put('/UpdateEventMember/:id',updateEventMemberController);
AddEventMemberRoute.delete('/DeleteEventMember/:id/:Id',deleteEventMemberController);
AddEventMemberRoute.get('/AbsenseEventMember/:id',getAbsentEventMembersController);
AddEventMemberRoute.get('/CompleteEventMember/:id',getCompleteEventMembersController)
export default AddEventMemberRoute
