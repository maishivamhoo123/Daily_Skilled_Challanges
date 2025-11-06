🏁 Day 1 – End

✅ Task completed:
Built a basic Express.js backend with three endpoints:

GET /getting – returns all items

POST /add – adds a new item to an in-memory array

DELETE /delete/:id – deletes an item by ID

🧠 What I learned:

How to use express.json() middleware to handle JSON bodies.

Difference between req.params and req.body.

Proper way to use splice() vs slice() for array mutation.

Importance of sending responses only once and returning afterward.

REST route naming conventions and good JSON structure for responses.

⚙ What went wrong / I struggled with:

Initially misused async/await where it wasn’t needed.

Confused req.params vs req.body while adding and deleting.

Tried destructuring from a number (const { id } = parseInt(...)), which broke the delete route.

Used .slice() instead of .splice() — causing delete logic to fail.

Missed return statements after error responses.

🔁 Plan for next day:

Add full CRUD functionality (GET, POST, PUT, DELETE) with in-memory storage.

Return consistent JSON responses with status, message, and data.

Learn proper HTTP status code usage (200, 201, 400, 404, 500).

Write clean modular code (split routes into a separate file).

📄 README.md for GitHub

You can copy-paste the below into your repo:

# 🚀 Backend Practice – Daily Progress Log

## 🏁 Day 1 – End

✅ **Task completed:**  
Built a basic Express.js backend with three endpoints:  
- `GET /getting` – returns all items  
- `POST /add` – adds a new item to an in-memory array  
- `DELETE /delete/:id` – deletes an item by ID  

🧠 **What I learned:**  
- Using `express.json()` middleware  
- Difference between `req.params` and `req.body`  
- Proper array mutation with `splice()`  
- Sending one response per request  
- REST route naming conventions  

⚙ **What went wrong / I struggled with:**  
- Misused `async/await`  
- Mixed up `req.body` and `req.params`  
- Wrong destructuring in delete logic  
- Used `.slice()` instead of `.splice()`  
- Missing `return` after sending error responses  

🔁 **Plan for next day:**  
- Implement full CRUD (`GET`, `POST`, `PUT`, `DELETE`)  
- Use proper HTTP status codes  
- Return structured JSON responses  
- Split routes into separate files for cleaner structure  