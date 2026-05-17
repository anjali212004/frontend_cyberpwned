# CyberPwned

A full-stack web application to check if your email addresses have been involved in data breaches. Built with a Node.js backend and React frontend, featuring user authentication, admin dashboard, and breach detection capabilities.

## Features

- **Email Breach Check**: Verify if your email has been compromised in known data breaches
- **User Authentication**: Secure login and signup system
- **Admin Dashboard**: Manage users, view breach statistics, and system settings
- **Search History**: Track your previous breach checks
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Get instant results on breach status

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** for data storage (assumed based on models)
- **JWT** for authentication
- **bcrypt** for password hashing

### Frontend
- **React** with Create React App
- **Tailwind CSS** for styling
- **Axios** for API calls
- **React Router** for navigation

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend API.

## Usage

1. **Register/Login**: Create an account or log in to access the dashboard
2. **Check Breach**: Enter an email address to check if it has been breached
3. **View Results**: See detailed information about any breaches found
4. **Admin Features**: If you have admin privileges, access the admin dashboard to manage users and view statistics

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Breach Check
- `POST /api/breached/check` - Check if an email is breached

### Admin (Protected)
- `GET /api/admin/users` - Get all users
- `GET /api/admin/stats` - Get breach statistics

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Data breach information sourced from public databases
- Built with modern web technologies for security and performance
