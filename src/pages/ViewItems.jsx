import { useState, useEffect } from 'react';
import { Search, Grid, List, Eye } from 'lucide-react';
import { itemsAPI, getImageUrl } from '../utils/api';
import ItemModal from '../components/ItemModal';
import './ViewItems.css';

const ViewItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedItem, setSelectedItem] = useState(null);

  const itemTypes = ['All', 'Shirt', 'Pant', 'Shoes', 'Sports Gear', 'Accessories', 'Other'];

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await itemsAPI.getAll();
      setItems(response.data.data);
    } catch (err) {
      setError('Failed to fetch items');
      console.error('Error fetching items:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === '' || selectedType === 'All' || item.type === selectedType;
    return matchesSearch && matchesType;
  });

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  if (loading) {
    return (
      <div className="view-items-page">
        <div className="container">
          <div className="loading">Loading items...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="view-items-page">
        <div className="container">
          <div className="error">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="view-items-page">
      <div className="container">
        <div className="page-header">
          <h1>View Items</h1>
          <p>Browse through all your items</p>
        </div>

        <div className="controls">
          <div className="search-filter">
            <div className="search-box">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="type-filter"
            >
              {itemTypes.map(type => (
                <option key={type} value={type === 'All' ? '' : type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="view-controls">
            <button
              className={`view-toggle ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={18} />
            </button>
            <button
              className={`view-toggle ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="no-items">
            <p>No items found</p>
            {items.length === 0 && (
              <p>Start by adding your first item!</p>
            )}
          </div>
        ) : (
          <div className={`items-container ${viewMode}`}>
            {filteredItems.map(item => (
              <div
                key={item._id}
                className="item-card"
                onClick={() => openModal(item)}
              >
                <div className="item-image">
                  <img
                    src={getImageUrl(item.coverImage)}
                    alt={item.name}
                    onError={(e) => {
                      e.target.src = '/api/placeholder/300/200';
                    }}
                  />
                  <div className="item-overlay">
                    <Eye size={24} />
                  </div>
                </div>
                
                <div className="item-info">
                  <h3 className="item-name">{item.name}</h3>
                  <span className="item-type">{item.type}</span>
                  {viewMode === 'list' && (
                    <p className="item-description">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedItem && (
          <ItemModal
            item={selectedItem}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default ViewItems;
