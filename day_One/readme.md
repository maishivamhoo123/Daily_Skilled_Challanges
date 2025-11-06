# 🚀 Backend Development Daily Practice Log  

Welcome to my **daily backend learning journey**, where I build and improve backend skills step by step — writing real code, solving real errors, and developing a production mindset.  
Each day focuses on small but meaningful backend challenges using **Node.js**, **Express**, and later **Solidity/Web3** integration.

---

## 🏁 Day 1 – Building My First Express Server  

### ✅ Task Completed
Built a simple Express.js backend with the following endpoints:
- `GET /getting` → Fetch all items from memory  
- `POST /add` → Add a new item to the in-memory list  
- `DELETE /delete/:id` → Delete an item by ID  

🧩 In-memory data structure:
```js
let items = [];
🧠 What I Learned
How to set up an Express.js server from scratch.

Using express.json() to parse incoming JSON data.

Understanding the difference between req.params and req.body.

Correct use of .splice() for deleting array elements.

Importance of returning only one response per request.

How to write cleaner REST routes and handle edge cases.

⚙️ What Went Wrong / Challenges Faced
Used async/await unnecessarily on non-async routes.

Confused req.params and req.body when handling requests.

Incorrect destructuring syntax:

js
Copy code
const { id } = parseInt(req.body.id); // ❌ invalid
Used .slice() instead of .splice() which didn’t modify the array.

Forgot to return after sending error responses.

Naming inconsistency (Id vs id).

🔁 Plan for Next Day (Day 2)
Add complete CRUD: GET, POST, PUT, DELETE routes with structured JSON responses.

Use proper HTTP status codes (200, 201, 400, 404, etc.).

Create a modular folder structure (routes, controllers, middleware).

Improve error handling and validation.

Prepare base for connecting to a database (MongoDB or PostgreSQL).

🧩 Tech Stack
Node.js

Express.js

📅 Daily Streak Goal
Building backend skills from scratch to advanced — one day, one project, one improvement at a time.

This journey is aimed at becoming confident in:

REST API design

Scalable backend architecture

Error handling and clean code

Web3 + Solidity integration in later stages

