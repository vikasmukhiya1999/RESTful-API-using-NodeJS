# RESTful API using NodeJS

A simple RESTful API built with Node.js and Express.js for managing user data with basic CRUD operations.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Express.js (^5.1.0)
- nodemon (^3.1.9) - for development

To install Express.js:

```bash
npm install express
```

To install nodemon globally (optional):

```bash
npm install -g nodemon
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/vikasmukhiya1999/RESTful-API-using-NodeJS.git
cd RESTful-API-using-NodeJS
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:
   - For production:
   ```bash
   node server.js
   ```
   - For development with auto-reload:
   ```bash
   nodemon server.js
   ```

The server will run on `http://localhost:3000`

## API Endpoints

| Method | Endpoint   | Description                 |
| ------ | ---------- | --------------------------- |
| GET    | /users     | Fetch all users             |
| GET    | /users/:id | Fetch a specific user by ID |
| POST   | /users     | Create a new user           |
| PUT    | /users/:id | Update an existing user     |
| DELETE | /users/:id | Delete a user               |

## Request Body Format

For POST and PUT requests:

```json
{
  "firstname": "John",
  "lastname": "Doe",
  "age": 25
}
```

## Features

- Express.js middleware for request logging
- Data validation for user inputs
- Error handling for invalid requests
- RESTful architecture

## Middleware

The API implements two middleware functions:

- `requestLogger`: Logs HTTP method, URL, and status code
- `validateUserData`: Validates required fields in request body

## Response Status Codes

- 200: Successful request (GET, PUT, DELETE)
- 201: Resource created successfully (POST)
- 400: Missing required fields or invalid data format
- 404: User not found

## Project Structure

```
├── server.js        # Main application file
├── middleware.js    # Custom middleware functions
├── package.json     # Project dependencies
├── screenshots/     # API testing screenshots
│   ├── get-users.png
│   ├── get-user-by-id.png
│   ├── create-user.png
│   ├── update-user.png
│   └── delete-user.png
└── README.md       # Project documentation
```

## Screenshots

### GET /users - Fetch all users

![Get All Users](/screenshots/get-users.png)

### GET /users/:id - Fetch specific user

![Get Single User](/screenshots/get-user-by-id.png)

### POST /users - Create new user

![Create User](/screenshots/create-user.png)

### PUT /users/:id - Update user

![Update User](/screenshots/update-user.png)

### DELETE /users/:id - Delete user

![Delete User](/screenshots/delete-user.png)

## Technologies Used

- Node.js
- Express.js
- JavaScript (ES6+)
