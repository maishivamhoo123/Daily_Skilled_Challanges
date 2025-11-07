📄 README.md
# 🧠 Express.js CRUD API (Day 2 – Backend Challenge)

A simple **Node.js + Express.js CRUD API** built using **in-memory storage** (no database yet).  
This project is part of my backend daily challenge series to master server fundamentals before moving to advanced topics like databases and authentication.

---

## 🚀 Features

- Built with **Express.js**
- Implements complete **CRUD (Create, Read, Update, Delete)** functionality
- Uses **middleware** and **error handling**
- Follows proper **HTTP status codes**
- Supports **JSON request parsing**
- Organized and clean REST API design

---

## ⚙️ Tech Stack

| Tool | Purpose |
|------|----------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Backend framework |
| **Nodemon** *(optional)* | Auto-restart server on save |

---

## 🗂️ Folder Structure



📦 express-crud-api
┣ 📜 index.js # Main server file
┣ 📜 package.json # Project dependencies and scripts
┗ 📜 README.md # Project documentation


---

## 🧩 API Endpoints

### ➤ Get All Items
```http
GET /allitems


Response:

{
  "message": "all the items are",
  "items": []
}

➤ Add a New Item
POST /addItems
Content-Type: application/json

{
  "name": "Laptop"
}


Response:

{
  "message": "item added successfully"
}

➤ Update an Item
PUT /item/:id
Content-Type: application/json

{
  "name": "Updated Laptop"
}


Response:

{
  "message": "item edited successfully"
}

➤ Delete an Item
DELETE /item/:id


Response:

{
  "message": "item deleted successfully"
}

🧠 Key Concepts Learned

Express app setup using express()

Routing with HTTP methods (GET, POST, PUT, DELETE)

Request handling with req.body, req.params

Error handling using try...catch and status codes

RESTful design principles

Middleware for JSON parsing and potential logging

💡 Future Improvements

Add input validation using express-validator

Introduce global error middleware

Replace in-memory array with MongoDB or PostgreSQL

Add authentication middleware

Write unit tests with Jest or Mocha

🧑‍💻 Getting Started
1. Clone the repository
git clone https://github.com/<your-username>/express-crud-api.git
cd express-crud-api

2. Install dependencies
npm install

3. Run the server
node index.js


or for development:

npx nodemon index.js

4. Access the API

Open your browser or use Postman at:

http://localhost:3000

🧩 Example Log

When you start the server:

App is listening on port 3000