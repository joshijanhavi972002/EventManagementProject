import mongoose from 'mongoose';

const eventCategorySchema = new mongoose.Schema({
  Category: {
    type: String,
    required: true,
  },
  Code: {
    type: String,
    required: true,
  
  },
  Image: { 
    type: String
   },
  Priority: {
    type: String,
    // default: 1,
  },
  Status: {
    type: String,
    // enum: ['active', 'inactive'],
    // default: 'active',
  },
  Delete: {
    type: String,
    default:false
  },
  CreatedBy: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
  }, 
});

const Event_Category = mongoose.model('Event_Category', eventCategorySchema);

export default Event_Category;
