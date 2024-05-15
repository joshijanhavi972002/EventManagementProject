import Create_Event from "../../model/Create_Event.js";
export const createEventController = async (req, res) => {
  const { id } = req.params;
    try {
        const eventData = req.body;
        console.log("reqbody  ",req.body);
        console.log("formdata  ",req.body);
       

        const newEvent = new Create_Event({
            Event_Category: eventData.Event_Category,
            Event_Name: eventData.Event_Name,
            Uid: eventData.Uid,
            Description: eventData.Description,
            Job_Category: eventData.Job_Category,
            Venue: eventData.Venue,
            Start_Date: eventData.Start_Date,
            End_Date: eventData.End_Date,
            Location: eventData.Location,
            Points: eventData.Points,
            Maximum_Attendee: eventData.Maximum_Attendee,
            Status: eventData.Status,
            Session_Name: eventData.Session_Name,
            Speaker_Name: eventData.Speaker_Name,
            End_Time: eventData.End_Time,
            Venue_Name: eventData.Venue_Name,
            Start_Time: eventData.Start_Time,
            // Image: eventData.Image,
            Image:  req.file ? req.file.originalname : '',
            Scheduled_Status:eventData.Scheduled_Status,
            CreatedBy:id
        });


        const savedEvent = await newEvent.save();

        res.status(201).json({ message: 'Event created successfully', event: savedEvent });
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ message: 'Error creating event' });
    }
}; 
export const viewEventController = async (req, res) => {
  const { id } = req.params;
    try {
        const events = await Create_Event.find({ Delete: false,CreatedBy:id });

        res.status(200).json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ message: 'Error fetching events' });
    }
};
export const updateEventController = async (req, res) => {
    const { id } = req.params; 
    const data = req.body; 
 
    try {

        let updatedImageData = {};

        if (req.file) {
            updatedImageData = { Image: req.file.filename };
        }

        const updatedEvent = await Create_Event.findOneAndUpdate(
            { _id: id },
            {
                "$set": {
                    Event_Category: data.Event_Category,
                    Event_Name: data.Event_Name,
                    Uid: data.Uid,
                    Description: data.Description,
                    Venue: data.Venue,
                    Start_Date: data.Start_Date,
                    End_Date: data.End_Date,
                    Location: data.Location,
                    Points: data.Points,
                    Maximum_Attendee: data.Maximum_Attendee,
                    Status: data.Status,
                    Session_Name: data.Session_Name,
                    Speaker_Name: data.Speaker_Name,
                    End_Time:data.End_Time,
                    Venue_Name:data.Venue_Name,
                    Start_Time:data.Start_Time,
                    Image:data.Image,
                    ...updatedImageData,
                }
            }
        );


        if (!updatedEvent) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json({message: "Data Update Successfully" });
    } catch (error) {
        console.error('Error updating event field:', error);
        res.status(500).json({ message: 'Error updating event field' });
    }
};
export const deleteEventController = async (req, res) => {
    const { id ,Id} = req.params;
 
  
    try {
      
      const updatedEvent = await Create_Event.findByIdAndUpdate(id, { Delete: true }, { new: true });
  
      if (!updatedEvent) {
        return res.status(404).json({ message: 'Event  not found' });
      }
      const categories = await Create_Event.find({ Delete: false, CreatedBy:Id });

      res.json({ message: 'Event  deleted successfully', category: categories });
    } catch (error) {
      console.error('Error soft deleting event category:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  export const getCompletedEventsController = async (req, res) => {
    const { id } = req.params;
    try {
        const completedEvents = await Create_Event.find({ Status: 'completed',Delete:'false',CreatedBy:id });

        res.status(200).json(  completedEvents );
    } catch (error) {
        console.error('Error fetching completed events:', error);
        res.status(500).json({ message: 'Error fetching completed events' });
    }
};
export const getEventCount = async (req, res) => {
  const { id } = req.params;
    try {
      // Count only the Event_category records where delete is false
      const categoryCount = await Create_Event.countDocuments({ Delete: false , CreatedBy:id });
      res.json( categoryCount );
    } catch (err) {
      console.error('Error counting Event categories:', err);
      res.status(500).json({ error: 'Server error' });
    }
  };
  export const getCompleteCount = async (req, res) => {
    const { id } = req.params;
    try {
      // Count only the Event_category records where delete is false
      const categoryCount = await Create_Event.countDocuments({Status: 'completed', Delete: false ,  CreatedBy:id  });
      res.json( categoryCount );
    } catch (err) {
      console.error('Error counting Event categories:', err);
      res.status(500).json({ error: 'Server error' });
    }
  };