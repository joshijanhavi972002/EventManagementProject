import User_Mark from "../../model/User_Mark.js";
export const addUserMarkController = async (req, res) => {
    try {
        const eventData = req.body;
        

        const newWishUser = new User_Mark({
        
            User: eventData.User,
            Status: eventData.Status,
            Gain_Type:eventData.Gain_Type,
            Gain_Coin:eventData.Gain_Coin
        });

        const savedEventMember = await newWishUser.save();

        res.status(201).json({ message: 'Add Event WishUser successfully', eventMember: savedEventMember });
    } catch (error) {
        console.error('Error adding Event WishUser:', error);
        res.status(500).json({ message: 'Error adding Event WishUser' });
    }
};

export const viewUserMarkController = async (req, res) => {
    try {
        const EventMember = await User_Mark.find({ Delete: false });
        res.status(200).json(EventMember);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Error fetching categories' });
    }
};