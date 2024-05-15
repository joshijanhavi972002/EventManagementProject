
import Event_Category from '../../model/Event_Category.js';


export const addCategoryController = async (req, res) => {
   
    const { id } = req.params;
  
    try {
            
            const data = req.body;
            const newEventCategory = new Event_Category({
                Category: data.Category,
                Code: data.Code,
                Image:  req.file ? req.file.originalname : '',
                // Image:data.Image,
                Priority: data.Priority,
                Status: data.Status,
                CreatedBy:id
            });

            const savedEventCategory = await newEventCategory.save();
        
            res.status(201).json({ message: 'Data saved successfully' });
      
    } catch (error) {
        console.error('Error saving Event Category:', error);
        res.status(500).json({ message: 'Error saving data' });
    }
};

export const viewCategoryController = async (req, res) => {
    const { id } = req.params;
   
    try {
        const categories = await Event_Category.find({ Delete: false , CreatedBy:id}); 
     
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Error fetching categories' });
    }
};

export const updateCategoryController = async (req,res) => {
    const { id } = req.params;
  
    const data = req.body;
    try {
        let updatedImageData = {};
        
        if (req.file) {
            updatedImageData = { Image: req.file.filename };
        }

        const updatedCategory = await Event_Category.findOneAndUpdate(
            { _id: id },
            {
                "$set": {
                    Category: data.Category,
                    Code: data.Code,
                    Priority: data.Priority,
                    Image:data.Image,
                    // Image:  req.file ? req.file.originalname : '',
                    Status: data.Status,
                    ...updatedImageData, 
                }
            }
        );

     

        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json({message: "Data Update Successfully" });
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ message: 'Error updating category' });
    }
};
export const deleteCategoryController = async (req, res) => {
    const { id ,Id } = req.params;
  
  
    try {
      
      const updatedCategory = await Event_Category.findByIdAndUpdate(id, { Delete: true }, { new: true });
  
      if (!updatedCategory) {
        return res.status(404).json({ message: 'Event category not found' });
      }
      const categories = await Event_Category.find({ Delete: false ,CreatedBy:Id }); 
      res.json({ message: 'Event category  deleted successfully', category: categories });
    } catch (error) {
      console.error('Error soft deleting event category:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  
export const getEventCategoryCount = async (req, res) => {
    const { id} = req.params;
    try {
      // Count only the Event_category records where delete is false
      const categoryCount = await Event_Category.countDocuments({ Delete: false,CreatedBy:id });
      res.json( categoryCount );
    } catch (err) {
      console.error('Error counting Event categories:', err);
      res.status(500).json({ error: 'Server error' });
    }
  };