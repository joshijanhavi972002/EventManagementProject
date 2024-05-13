import mongoose from 'mongoose';

const createEventSchema = new mongoose.Schema({
  Event_Category: {
    type: String,
    // ref: 'Event_Category', 
    // required: true,
  },
  Event_Name: {
    type: String,
    required: true,
  },
  Uid: String,
  Description: String,
  // Job_Category: String,
  Venue: String,
  Start_Date: String,
  End_Date: String,
  Location: String,
  Points: Number,
  Maximum_Attendee: Number,
  Status: {
    type: String,
    // enum: ['active', 'inactive'],
    // default: 'active',
  },
  Session_Name: String,
  Speaker_Name: String,
  Scheduled_Status:String,
  End_Time: String,
  Venue_Name: String,
  Start_Time: String,
  Image: { 
    type: String
   },
  Delete:{
    type:String,
    default:false
  }
  
});

const Create_Event = mongoose.model('Create_Event', createEventSchema);

export default Create_Event;
