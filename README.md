# 🚀 ReactJS Item Manager - Internship Assignment

A modern full-stack web application for managing items with image uploads, search functionality, and email notifications. Built with React.js, Node.js, and MongoDB.

## 📖 Project Overview

This project demonstrates proficiency in full-stack development, featuring a complete item management system with advanced functionality including database integration, file uploads, and email services.

## 📸 Project Walkthrough

### 1. **Homepage & Navigation**
> ![image](https://github.com/user-attachments/assets/8a788eb4-c4a9-4585-ba9f-18197babcb0f)

The application starts with a clean navigation interface allowing users to switch between viewing existing items and adding new ones.

### 2. **Add Item Form**
> ![image](https://github.com/user-attachments/assets/5d1afd78-d2cf-4df3-bba6-22c8cf5e9e62)

Users can create new items by filling out a comprehensive form with validation, image preview, and success feedback.

### 3. **Success Confirmation**
> ![image](https://github.com/user-attachments/assets/31d3d8ce-0de3-4823-ba51-510a7f18876b)

Clear feedback confirms successful item creation with database storage confirmation.

### 4. **Items Listing Page**
> ![image](https://github.com/user-attachments/assets/847b836f-8517-4aa1-9aee-7e8e12e7f9c7)

All items are displayed in an attractive grid layout with search, filter, and view mode options.

### 5. **Search & Filter Functionality**
> ![image](https://github.com/user-attachments/assets/68d57033-e84e-4eb7-8a1e-0f9dc73df13d)

Users can efficiently find items using the search functionality and type-based filtering.

### 6. **Item Details Modal**
> ![image](https://github.com/user-attachments/assets/f50d4405-4ab4-43c8-93a3-bc344f078550)

Clicking any item opens a detailed modal with complete information and navigable image carousel.

### 7. **Email Enquiry Feature**
> ![image](https://github.com/user-attachments/assets/ec14ae09-9278-4e04-a982-8da6ad7e3385)

> ![image](https://github.com/user-attachments/assets/90bfc16e-6b80-4d10-b8df-ff596d6906af)


The enquiry button sends automated emails to a static email address with item details and user information.

## ✨ Key Features

- **📝 Add Items**: Form-based item creation with image uploads
- **👀 View Items**: Dynamic listing with search and filter capabilities  
- **🖼️ Item Details**: Modal view with image carousel
- **📧 Email Enquiries**: Automated email notifications
- **📱 Responsive Design**: Mobile-friendly interface

## 🛠️ Technology Stack

**Frontend**: React 18, Vite, React Router, Axios, CSS3  
**Backend**: Node.js, Express.js, MongoDB, Mongoose  
**Email**: Nodemailer with Gmail integration  
**File Upload**: Multer for image handling

## � Quick Setup

### Prerequisites
- Node.js (v14+)
- MongoDB running locally
- Gmail account for email functionality

### Installation & Run
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend && npm install

# Configure environment variables in backend/.env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
STATIC_EMAIL_ID=admin@company.com

# Start backend server
npm run dev

# Start frontend (in root directory)
npm run dev
```

**Access**: Frontend at `http://localhost:5173` | Backend at `http://localhost:5000`

## 📋 API Endpoints

- `GET /api/items` - Fetch all items
- `POST /api/items` - Create new item with images
- `POST /api/enquire` - Send enquiry email

## 🌟 Project Highlights

- **Full-Stack Integration**: Seamless frontend-backend communication
- **Database Operations**: Complete CRUD functionality with MongoDB
- **File Management**: Secure image upload and storage
- **Email Integration**: Professional email notifications
- **Responsive Design**: Works across all device sizes
- **Modern UI/UX**: Clean, intuitive user interface

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Main application pages
├── utils/         # API and utility functions
└── assets/        # Static resources

backend/
├── uploads/       # Image storage
├── server.js      # Express server setup
└── .env          # Environment configuration
```

## � Skills Demonstrated

- React.js development with hooks and state management
- RESTful API design and implementation
- MongoDB database integration
- File upload handling and validation
- Email service integration
- Responsive web design
- Modern JavaScript (ES6+)
- Git version control

---

**Built for ReactJS Internship Assignment** | *Demonstrates full-stack development capabilities*
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
