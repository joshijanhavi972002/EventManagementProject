import mongoose from 'mongoose';

var adminCredientials = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    
}, { versionKey: false });

const ADMIN_CREDIENTIALS= mongoose.model('ADMIN_CREDIENTIALS', adminCredientials);
export default ADMIN_CREDIENTIALS;