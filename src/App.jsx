import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Package, Plus, Eye } from 'lucide-react';
import AddItem from './pages/AddItem';
import ViewItems from './pages/ViewItems';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-brand">
              <Package className="nav-icon" />
              <h1>Item Manager</h1>
            </div>
            <div className="nav-links">
              <Link to="/" className="nav-link">
                <Eye size={18} />
                View Items
              </Link>
              <Link to="/add" className="nav-link">
                <Plus size={18} />
                Add Item
              </Link>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<ViewItems />} />
            <Route path="/add" element={<AddItem />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
