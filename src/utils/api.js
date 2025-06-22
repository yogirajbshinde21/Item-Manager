import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Items API
export const itemsAPI = {
  // Get all items
  getAll: () => api.get('/items'),
  
  // Get single item by ID
  getById: (id) => api.get(`/items/${id}`),
  
  // Create new item with images
  create: (formData) => api.post('/items', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
};

// Send enquiry email
export const sendEnquiryEmail = async (itemData, userEmail = 'customer@example.com') => {
  return api.post('/enquire', {
    itemId: itemData._id,
    itemName: itemData.name,
    itemType: itemData.type,
    itemDescription: itemData.description,
    userEmail: userEmail
  });
};

export const getImageUrl = (filename) => {
  return `http://localhost:5000/uploads/${filename}`;
};

export default api;
