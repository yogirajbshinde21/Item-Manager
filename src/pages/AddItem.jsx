import { useState } from 'react';
import { Upload, X, CheckCircle, AlertCircle } from 'lucide-react';
import { itemsAPI } from '../utils/api';
import './AddItem.css';

const AddItem = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Shirt',
    description: '',
  });

  const [coverImage, setCoverImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState([]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const itemTypes = ['Shirt', 'Pant', 'Shoes', 'Sports Gear', 'Accessories', 'Other'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setCoverImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + additionalImages.length > 5) {
      setError('You can upload maximum 5 additional images');
      return;
    }

    setAdditionalImages(prev => [...prev, ...files]);
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAdditionalImagePreviews(prev => [...prev, e.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeAdditionalImage = (index) => {
    setAdditionalImages(prev => prev.filter((_, i) => i !== index));
    setAdditionalImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.name.trim() || !formData.description.trim()) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    if (!coverImage) {
      setError('Please upload a cover image');
      setLoading(false);
      return;
    }

    try {
      const submitData = new FormData();
      submitData.append('name', formData.name.trim());
      submitData.append('type', formData.type);
      submitData.append('description', formData.description.trim());
      submitData.append('coverImage', coverImage);

      additionalImages.forEach(image => {
        submitData.append('additionalImages', image);
      });

      await itemsAPI.create(submitData);
      
      setSuccess(true);
      // Reset form
      setFormData({ name: '', type: 'Shirt', description: '' });
      setCoverImage(null);
      setAdditionalImages([]);
      setCoverImagePreview(null);
      setAdditionalImagePreviews([]);

      // Hide success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);

    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add item');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-item-page">
      <div className="container">
        <div className="page-header">
          <h1>Add New Item</h1>
          <p>Fill in the details below to add a new item to your inventory</p>
        </div>

        {success && (
          <div className="success-message">
            <CheckCircle size={20} />
            <span>Item successfully added</span>
          </div>
        )}

        {error && (
          <div className="error-message">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="add-item-form">
          <div className="form-group">
            <label htmlFor="name">Item Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter item name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Item Type *</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              required
            >
              {itemTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter item description"
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="coverImage">Cover Image *</label>
            <div className="file-upload-container">
              <input
                type="file"
                id="coverImage"
                accept="image/*"
                onChange={handleCoverImageChange}
                required
              />
              <label htmlFor="coverImage" className="file-upload-label">
                <Upload size={20} />
                Choose Cover Image
              </label>
            </div>
            {coverImagePreview && (
              <div className="image-preview">
                <img src={coverImagePreview} alt="Cover preview" />
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="additionalImages">Additional Images (Optional)</label>
            <div className="file-upload-container">
              <input
                type="file"
                id="additionalImages"
                accept="image/*"
                multiple
                onChange={handleAdditionalImagesChange}
              />
              <label htmlFor="additionalImages" className="file-upload-label">
                <Upload size={20} />
                Choose Additional Images (Max 5)
              </label>
            </div>
            {additionalImagePreviews.length > 0 && (
              <div className="additional-images-preview">
                {additionalImagePreviews.map((preview, index) => (
                  <div key={index} className="additional-image-item">
                    <img src={preview} alt={`Additional ${index + 1}`} />
                    <button
                      type="button"
                      className="remove-image"
                      onClick={() => removeAdditionalImage(index)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button 
            type="submit" 
            className="submit-button" 
            disabled={loading}
          >
            {loading ? 'Adding Item...' : 'Add Item'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
