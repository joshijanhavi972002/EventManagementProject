import Add_Event_UserWish from "../../model/Add_Event_UserWish";

export const addUserWishController = async (req, res) => {
    const { id } = req.params;
    try {
        const eventData = req.body;
        

        const newWishUser = new Add_Event_UserWish({
            Event_Name: eventData.Event_Name,
            User: eventData.User,
            Status: eventData.Status,
            CreatedBy:id

        });

        const savedEventMember = await newWishUser.save();

        res.status(201).json({ message: 'Add Event WishUser successfully', eventMember: savedEventMember });
    } catch (error) {
        console.error('Error adding Event WishUser:', error);
        res.status(500).json({ message: 'Error adding Event WishUser' });
    }
};

export const viewUserWishController = async (req, res) => {
    const { id } = req.params;

    try {
        const EventMember = await Add_Event_UserWish.find({ Delete: false, CreatedBy:id });
        res.status(200).json(EventMember);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Error fetching categories' });
    }
};

export const updateUserWishController = async (req, res) => {
    const { id } = req.params;
  
    const data = req.body;
   

    try {
        let updatedImageData = {};


        const updatedEventMember = await Add_Event_UserWish.findOneAndUpdate(
            { _id: id },
            {
                "$set": {
                    Event_Name: data.Event_Name,
                    User: data.User,
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

export const deleteUserWishController = async (req, res) => {
    const { id,Id  } = req.params;
    

    try {

        const deleteEventMember = await Add_Event_UserWish.findByIdAndUpdate(id, { Delete: true }, { new: true });

        if (!deleteEventMember) {
            return res.status(404).json({ message: 'Event category not found' });
        }
        const categories = await Add_Event_UserWish.find({ Delete: false ,CreatedBy:Id });
        res.json({ message: 'Event category  deleted successfully', category: categories });
    } catch (error) {
        console.error('Error soft deleting event category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};