import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, CheckCircle, Mail } from 'lucide-react';
import { getImageUrl, sendEnquiryEmail } from '../utils/api';
import './ItemModal.css';

const ItemModal = ({ item, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  
  // Combine cover image with additional images for carousel
  const allImages = [item.coverImage, ...item.additionalImages];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };
  const handleEnquire = async () => {
    try {
      setEmailLoading(true);
      const response = await sendEnquiryEmail(item, 'customer@example.com');
      
      if (response.data.success) {
        setEmailSent(true);
        // Reset after 3 seconds
        setTimeout(() => {
          setEmailSent(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error sending enquiry:', error);
      alert('Failed to send enquiry email. Please try again later.');
    } finally {
      setEmailLoading(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-body">
          <div className="image-section">
            <div className="main-image-container">
              <img
                src={getImageUrl(allImages[currentImageIndex])}
                alt={`${item.name} - Image ${currentImageIndex + 1}`}
                className="main-image"
                onError={(e) => {
                  e.target.src = '/api/placeholder/500/400';
                }}
              />
              
              {allImages.length > 1 && (
                <>
                  <button className="nav-button prev" onClick={prevImage}>
                    <ChevronLeft size={24} />
                  </button>
                  <button className="nav-button next" onClick={nextImage}>
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {allImages.length > 1 && (
              <div className="thumbnail-strip">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                  >
                    <img
                      src={getImageUrl(image)}
                      alt={`Thumbnail ${index + 1}`}
                      onError={(e) => {
                        e.target.src = '/api/placeholder/80/60';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="image-counter">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          </div>

          <div className="details-section">
            <div className="item-header">
              <h2 className="item-title">{item.name}</h2>
              <span className="item-type-badge">{item.type}</span>
            </div>

            <div className="item-description">
              <h3>Description</h3>
              <p>{item.description}</p>
            </div>

            <div className="item-meta">
              <div className="meta-item">
                <strong>Added:</strong>
                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="meta-item">
                <strong>Images:</strong>
                <span>{allImages.length} image{allImages.length !== 1 ? 's' : ''}</span>
              </div>
            </div>            <button className="enquire-button" onClick={handleEnquire} disabled={emailLoading || emailSent}>
              {emailLoading ? (
                <>
                  <div className="spinner"></div>
                  Sending...
                </>
              ) : emailSent ? (
                <>
                  <CheckCircle size={20} />
                  Email Sent!
                </>
              ) : (
                <>
                  <Mail size={20} />
                  Enquire
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
