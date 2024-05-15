import Add_Event_Member from "../../model/Add_Event_Member.js";

export const addEventMemberController = async (req, res) => {
    const { id } = req.params;
    try {
        const eventData = req.body;
      

        const newEventMember = new Add_Event_Member({
            Event_Name: eventData.Event_Name,
            User: eventData.User,
            Attendee_Status: eventData.Attendee_Status,
            Status: eventData.Status,
            CreatedBy:id
        });

        const savedEventMember = await newEventMember.save();

        res.status(201).json({ message: 'Event member added successfully', eventMember: savedEventMember });
    } catch (error) {
        console.error('Error adding event member:', error);
        res.status(500).json({ message: 'Error adding event member' });
    }
};

export const viewEventMemberController = async (req, res) => {
    const { id } = req.params;
    try {
        const EventMember = await Add_Event_Member.find({ Delete: false,CreatedBy:id });
       
        res.status(200).json(EventMember);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Error fetching categories' });
    }
};

export const updateEventMemberController = async (req, res) => {
    const { id } = req.params;
 
    const data = req.body;


    try {
      

        const updatedEventMember = await Add_Event_Member.findOneAndUpdate(
            { _id: id },
            {
                "$set": {
                    Event_Name: data.Event_Name,
                    User: data.User,
                    Attendee_Status: data.Attendee_Status,
                    Status: data.Status,

                }
            }
        );

      
        if (!updatedEventMember) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json({ message: "Data Update Successfully" });
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ message: 'Error updating category' });
    }
};

export const deleteEventMemberController = async (req, res) => {
    const { id ,Id} = req.params;
   

    try {

        const deleteEventMember = await Add_Event_Member.findByIdAndUpdate(id, { Delete: true }, { new: true });

        if (!deleteEventMember) {
            return res.status(404).json({ message: 'Event category not found' });
        }
        const categories = await Add_Event_Member.find({ Delete: false ,CreatedBy:Id });
        res.json({ message: 'Event category  deleted successfully', category:  categories});
    } catch (error) {
        console.error('Error soft deleting event category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAbsentEventMembersController = async (req, res) => {
    const { id } = req.params;
    try {
        
        const absentEventMembers = await Add_Event_Member.find({ Attendee_Status: "absent" ,Delete: false,CreatedBy:id});
     
        res.status(200).json( absentEventMembers );
    } catch (error) {
        console.error('Error fetching absent event members:', error);
        res.status(500).json({ message: 'Error fetching absent event members' });
    }
};
export const getCompleteEventMembersController = async (req, res) => {
    const { id } = req.params;
    try {
      
        const completeEventMembers = await Add_Event_Member.find({ Attendee_Status: "completed", Delete: false,CreatedBy:id});
      
        res.status(200).json( completeEventMembers );
    } catch (error) {
        console.error('Error fetching complete event members:', error);
        res.status(500).json({ message: 'Error fetching complete event members' });
    }
};