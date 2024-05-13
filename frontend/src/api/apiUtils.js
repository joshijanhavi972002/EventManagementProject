
import Axios from 'axios';
import Swal from 'sweetalert2';

export const fetchData = async (url, setData, setError) => {
    try {
        const response = await Axios.get(url);
       
        setData(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
    }
};
export const postData = async (url, formData) => {
    try {
       
        const response = await Axios.post(url, formData);
        if (response.data) {
            Swal.fire('Success', 'Operation completed successfully!', 'success');
        } else {
            Swal.fire('Error', 'Operation failed!', 'error');
        }
        return response.data;
    } catch (error) {
        Swal.fire('Error', 'Operation failed!', 'error');
        throw error;
    }
};
export const updateData = async (endpoint, data) => {
    try {
        const response = await Axios.put(endpoint, data);
        
        if (response.data) {
            Swal.fire('Success', ' updated successfully!', 'success');
        } else {
            Swal.fire('Error', ' failed!', 'error');
        }
        return response.data; 
    } catch (error) {
        throw new Error('Error updating data:', error);
    }
};

export const deleteData = async (url) => {
    try {
      const response = await Axios.delete(url);

      return response.data.category;
    } catch (error) {
      throw new Error('Error deleting data:', error);
    }
  };

  export const fetchProfileData = async (url) => {
    try {
        const response = await Axios.get(url);
     
        return  response.data.userProfile
      
    } catch (error) {
        console.error('Error fetching data:', error);
        
    }
};