import mongoose from 'mongoose';

const addUserMarkSchema = new mongoose.Schema({
 
  User: {
    type: String,
    
    required: true,
  },
  Gain_Type: {
    type: String,
   
    required: true,
  },
  Gain_Coin: {
    type: String,
    
    required: true,
  },
  Status: {
    type: String,
    // enum: ['active', 'inactive'],
    // default: 'active',
  },
  Delete:{
    type :String,
    default:false
  },
  CreatedBy: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
  }, 
});

const User_Mark = mongoose.model('User_Mark', addUserMarkSchema);

export default User_Mark;
