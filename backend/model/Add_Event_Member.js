import mongoose from 'mongoose';

const addEventMemberSchema = new mongoose.Schema({
  Event_Name: {
    type: String,
  },
  User: {
    type: String,
  },
  Attendee_Status: {
    type: String,
    // enum: ['waiting', 'attending', 'completed', 'absent', 'cancelled'],
    // default: 'waiting',
  },
  Status: {
    type: String
  },
  Delete: {
    type: String,
    default: false
  }
});

const Add_Event_Member = mongoose.model('Add_Event_Member', addEventMemberSchema);

export default Add_Event_Member;
