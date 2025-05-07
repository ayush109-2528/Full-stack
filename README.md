# Web Authentication Project

This project is part of my Full Stack Web Development learning journey. It focuses on implementing secure user authentication using **Node.js**, **Express.js**, and **PostgreSQL**, along with **Google OAuth** integration.

## 🔐 Features

- User registration with email and password
- Password encryption and hashing using `bcrypt`
- User login and logout functionality
- Session management with `express-session` and cookies
- Google OAuth 2.0: Sign in with Google
- Flash messages for user feedback

## 📦 Tech Stack

- **Frontend**: HTML, CSS, EJS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (using pgAdmin and `pg` library)
- **Authentication**: Passport.js (Local + Google OAuth strategies)
- **Other Tools**: dotenv, express-session, bcrypt, connect-pg-simple

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- PostgreSQL installed and running (with pgAdmin)
- Google OAuth credentials from Google Developer Console

### Installation

```bash
git clone https://github.com/your-username/web-authentication-project.git
cd web-authentication-project
npm install
```
Environment Variables

Create a .env file in the root directory:

PORT=3000
DB_USER=your_pg_username
DB_HOST=localhost
DB_DATABASE=your_database_name
DB_PASSWORD=your_pg_password
DB_PORT=5432
SESSION_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

Database Setup

    Create a PostgreSQL database in pgAdmin.

    Set up tables for users and sessions (you can use Sequelize or run SQL manually).

    Ensure your connect-pg-simple or session store is correctly configured.

Run the App

npm start

Visit http://localhost:3000 in your browser.
📸 Screenshots

    (Add screenshots here of registration, login, and Google sign-in.)

📚 Learning Source

Based on concepts from the Full Stack Web Development course on Udemy.
