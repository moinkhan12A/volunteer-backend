# Backend Project – User Registration System

## 💼 Project Info

A simple backend API for:
- Registering users (volunteers/interns)
- Logging in
- Viewing all registered users (admin-only access)

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication

## 📦 API Endpoints

### Register User
POST /api/register`

Body:
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456",
  "role": "intern"
}

Login User
POST /api/login

Body:
{
  "email": "john@example.com",
  "password": "123456"
}
Returns: token

Get All Users (Admin Only)
GET /api/users

Headers:
Authorization: Bearer <admin_token>


