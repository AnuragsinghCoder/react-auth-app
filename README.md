# React + Vite

# React Auth – Authentication & User Management System

A full-stack authentication and user management application built using React.js, Node.js, Express.js, and MongoDB.

## Features

* User registration and login
* JWT-based authentication
* Password hashing with bcrypt
* Protected routes
* User CRUD operations
* RESTful APIs
* MongoDB Atlas integration
* Responsive React UI
* Production deployment with Vercel

## Tech Stack

### Frontend

* React.js
* JavaScript
* Tailwind CSS
* React Router

### Backend

* Node.js
* Express.js
* Mongoose
* JWT
* bcrypt
* CORS

### Database

* MongoDB
* MongoDB Atlas

### Deployment

* Vercel

## Project Architecture

```text
React Frontend
      ↓
REST API
      ↓
Express.js
      ↓
Controllers / Routes
      ↓
Mongoose
      ↓
MongoDB Atlas
```

## Main API Routes

```text
/auth
/users
/users/ping
/users/user
/users/user/:_id
```

## User Operations

The application supports:

* Create user
* Get all users
* Get user by ID
* Update user
* Delete user

## Deployment

The backend is deployed on Vercel and uses MongoDB Atlas as the production database.

## Purpose

This project was built to practice and demonstrate full-stack development, REST API design, authentication, database integration, and production deployment.
