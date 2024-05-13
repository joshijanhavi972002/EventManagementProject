import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    Category: Yup.string().required('Category is required').matches(/^[A-Za-z]+$/, 'Category must contain only alphabets'),
    Code: Yup.string().required('Code is required').matches(/^\d+$/, 'Code must be a number'),
    Image: Yup.mixed().required('Image is required'),
    Priority: Yup.string().required('Priority is required').matches(/^\d+$/, 'Priority must be a number'),
    Status: Yup.string().required('Status is required'),
});
export const eventvalidationSchema = Yup.object().shape({
    Event_Category: Yup.string().required('Event Category is required'),
    Event_Name: Yup.string().required('Event Name is required').matches(/^[A-Za-z]+$/, 'Event must contain only alphabets'),
    Uid: Yup.string().required('UID is required'),
    Description: Yup.string().required('Description is required'),
    // Job_Category: Yup.string().required('Job Category is required'),
    Venue: Yup.string().required('Venue is required'),
    Scheduled_Status: Yup.string().required('Scheduled Status is required'),
    Start_Date: Yup.string().required('Start Date is required'),
    End_Date: Yup.string().required('End Date is required'),
    Location: Yup.string().required('Location is required'),
    Maximum_Attendee: Yup.string().required('Maximum Attendee is required'),
    Speaker_Name: Yup.string().required('Speaker Name is required').matches(/^[A-Za-z]+$/, 'Speaker Name must contain only alphabets'),
    Session_Name: Yup.string().required('Session Name is required').matches(/^[A-Za-z]+$/, 'Session Name must contain only alphabets'),
    Start_Time: Yup.string().required('Start Time is required'),
    End_Time: Yup.string().required('End Time is required'),
    Venue_Name: Yup.string().required('Venue Name is required'),
    Status: Yup.string().required('Status is required'),
    Image: Yup.mixed().required('Image is required'),
});


export const eventMemberValidationSchema = Yup.object().shape({
    Event_Name: Yup.string().required('Event is required'),
    User: Yup.string().required('User is required'),
    Attendee_Status: Yup.string().required('Attendee Status is required'),
    Status: Yup.string().required('Status is required'),
});

export const wishUserValidationSchema = Yup.object().shape({
    Event_Name: Yup.string().required('Event is required'),   
    User: Yup.string().required('User is required'),
    Status: Yup.string().required('Status is required'),
});

export const userMarkValidationSchema = Yup.object().shape({
    User: Yup.string().required('User is required'),
    Gain_Type: Yup.string().required('Gain Type is required'),
    Gain_Coin: Yup.string().required('Gain Coin is required'),
    Status: Yup.string().required('Status is required'),
});