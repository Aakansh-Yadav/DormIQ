<div align="center">

# 🏢 DormIQ

### Smart Dormitory Management System

*Streamline your dormitory operations with intelligent automation*

**Developed by Aakansh Yadav**

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-green.svg)](https://www.mongodb.com/)
[![Redux](https://img.shields.io/badge/State-Redux-purple.svg)](https://redux.js.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

</div>

---

## 📋 Overview

DormIQ is a comprehensive web-based dormitory management solution built with modern technologies. It provides administrators with powerful tools to manage students, track attendance, and maintain accurate records with an intuitive interface.

## 🚀 Tech Stack

**Frontend:**
- React.js with Hooks
- Redux for state management
- React-Bootstrap for UI components
- Axios for API calls

**Backend:**
- Node.js & Express.js
- MongoDB with Mongoose ODM
- JWT Authentication
- Bcrypt for password encryption

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v15.6.0 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd DormIQ
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd frontend && npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key_here
   ```

4. **Run the application**
   ```bash
   npm run dev
   ```
   
   The app will run on:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

## ✨ Key Features

### 👤 User Management
- Secure user registration and authentication
- Role-based access control (Admin/User)
- Profile management
- Admin panel for user administration

### 👨‍🎓 Student Management
- Comprehensive student profiles
- Add, edit, and delete student records
- Track student whereabouts (Hostel/Outside/Home)
- Search and filter functionality

### 📊 Attendance System
- Daily attendance tracking
- Visual attendance reports
- Export attendance data to CSV
- Bulk operations for attendance management
- Historical data analysis

### 📈 Analytics & Reporting
- Attendance statistics and trends
- Student status overview
- Customizable date range analysis
- Visual data representation

## 🔐 Security Features

- JWT-based authentication
- Password encryption using bcrypt
- Protected routes and API endpoints
- Admin-only operations
- Secure session management

## 📱 User Interface

DormIQ features a modern, responsive design with:
- Green and white color theme
- Intuitive navigation
- Mobile-friendly layout
- Real-time updates
- Smooth user experience

## 🛠️ Available Scripts

```bash
npm run dev          # Run frontend and backend concurrently
npm run server       # Run backend only with nodemon
npm run client       # Run frontend only
npm start            # Run backend in production
```

## 📝 API Endpoints

### Authentication
- `POST /users/login` - User login
- `POST /users/register` - User registration

### Students
- `GET /student` - Get all students
- `POST /student` - Add new student
- `GET /student/:id` - Get student by ID
- `PUT /student/:id` - Update student
- `DELETE /student/:id` - Delete student

### Attendance
- `GET /attendance` - Get attendance records
- `POST /attendance` - Create attendance
- `PUT /attendance/:id` - Update attendance
- `DELETE /attendance` - Delete attendance

## 🤝 Contributing

Contributions are always welcome! Here's how you can help:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Developer

**Aakansh Yadav**

For queries or suggestions, feel free to reach out!

---

<div align="center">
Made with ❤️ using MERN Stack
</div>
