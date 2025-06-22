# 🚀 ReactJS Item Manager

A full-stack web application built with React.js and Node.js that allows users to manage items with comprehensive features including image uploads, search functionality, and detailed item views.

## ✨ Features

### 📝 Add Item Page
- **Form with Validation**: Item name, type, description fields
- **Image Upload**: Cover image (required) + up to 5 additional images
- **Success Feedback**: "Item successfully added" message
- **Real-time Preview**: Image previews before upload

### 👁️ View Items Page
- **Dynamic Listing**: Display all items with name and cover image
- **Search & Filter**: Search by name/description, filter by item type
- **View Modes**: Grid and list view options
- **Interactive Cards**: Click to open detailed modal

### 🖼️ Item Details Modal
- **Complete Information**: All item details displayed
- **Image Carousel**: Navigate through all item images
- **Thumbnail Navigation**: Quick image selection
- **Enquire Button**: Contact functionality

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite for fast development
- **React Router DOM** for navigation
- **Axios** for API communication
- **Lucide React** for beautiful icons
- **CSS Modules** for component styling

### Backend
- **Node.js** with Express.js framework
- **MongoDB** with Mongoose ODM
- **Multer** for file upload handling
- **CORS** for cross-origin requests
- **dotenv** for environment configuration

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- MongoDB Compass (recommended for database management)

### Installation

1. **Clone and Navigate**
   ```bash
   cd "AMRR TechSols Project"
   ```

2. **Frontend Setup**
   ```bash
   npm install
   ```

3. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

4. **Database Configuration**
   - Ensure MongoDB is running locally on port 27017
   - Or update `backend/.env` with your MongoDB connection string

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Server runs on: http://localhost:5000

2. **Start Frontend Development Server**
   ```bash
   # In root directory
   npm run dev
   ```
   Application runs on: http://localhost:5173

## 📁 Project Structure

```
AMRR TechSols Project/
├── src/
│   ├── components/          # Reusable components
│   │   ├── ItemModal.jsx    # Item details modal
│   │   └── ItemModal.css
│   ├── pages/               # Page components
│   │   ├── AddItem.jsx      # Add item form
│   │   ├── AddItem.css
│   │   ├── ViewItems.jsx    # Items listing
│   │   └── ViewItems.css
│   ├── utils/
│   │   └── api.js           # API utility functions
│   ├── App.jsx              # Main app component
│   └── App.css
├── backend/
│   ├── server.js            # Express server setup
│   ├── uploads/             # Uploaded images storage
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Items API
- `GET /api/items` - Fetch all items
- `GET /api/items/:id` - Fetch single item
- `POST /api/items` - Create new item with images

### Image Serving
- `GET /uploads/:filename` - Serve uploaded images

## 🎨 UI/UX Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern Interface**: Clean, gradient-based design
- **Smooth Animations**: Hover effects and transitions
- **Loading States**: User feedback during operations
- **Error Handling**: Comprehensive error messages
- **Image Optimization**: Automatic image resizing and optimization

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized image loading

## 🔒 Data Validation

- **Frontend**: Real-time form validation
- **Backend**: Server-side data validation
- **File Upload**: Image type and size restrictions
- **Database**: Schema validation with Mongoose

## 🌟 Bonus Features Implemented

- ✅ **MongoDB Integration**: Full database connectivity
- ✅ **Image Upload**: Multiple image support
- ✅ **Search & Filter**: Enhanced user experience
- ✅ **Responsive Design**: Mobile-friendly interface
- ✅ **Error Handling**: Comprehensive error management
- ✅ **Loading States**: User feedback during operations

## 🚀 Future Enhancements

- User authentication and authorization
- Image compression and optimization
- Advanced search with filters
- Item categories management
- Export functionality
- Analytics dashboard

## 📞 Support

For any questions or issues, please contact the development team.

---

**Built with ❤️ for ReactJS Project**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
