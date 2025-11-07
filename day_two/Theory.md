🔧 1. What is Express.js and How It Works

Express.js is a minimal, fast, and flexible Node.js web framework used to build APIs and servers.

Under the hood:

Express runs on top of Node.js’s HTTP module

It simplifies things like:

Handling different routes (GET, POST, etc.)

Parsing JSON or form data

Sending proper responses

Organizing logic using middleware

🔁 How Express Handles a Request Internally

When a request comes in:

Client → Express App → Middleware Stack → Route Handler → Response


Example:

app.get("/item/:id", (req, res, next) => { ... });


Express checks the path (/item/:id)

It passes the request through middleware functions

When a matching route is found → executes its callback

You respond with res.send(), res.json(), etc.

🧠 2. The Request–Response Cycle

Every Express route function takes two main objects:

Object	Purpose
req	Contains details about the incoming request
res	Used to send data or messages back to the client
Common properties:

req.params → dynamic parts of the URL (/user/:id)

req.query → data from query strings (?sort=asc)

req.body → JSON data from POST/PUT requests

res.status(code) → set HTTP status

res.json(data) → send JSON response

Example:
app.post("/user/:id", (req, res) => {
  console.log(req.params.id); // from URL
  console.log(req.body); // from client JSON
  res.status(201).json({ message: "User created" });
});

⚙️ 3. Middleware — The Heart of Express

Middleware = functions that run between the request and the response.

They can:

Modify req or res

Validate input

Handle authentication

Log activity

Catch errors

Example:
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // pass to next middleware or route
});


If you forget next(), the request will hang forever — no response.

Built-in Middleware
Function	Purpose
express.json()	Parse JSON body
express.urlencoded()	Parse form data
express.static()	Serve static files
🪲 4. Error Handling & Status Codes Theory
🔍 What’s an Error?

An error happens when your route cannot fulfill the request due to:

Missing input (client’s fault)

Invalid ID (client’s fault)

Code bug or server crash (server’s fault)

🎯 Status Codes Recap
Code	Meaning	When to Use
200 OK	Request successful	GET, PUT, DELETE success
201 Created	New resource created	POST success
400 Bad Request	Invalid input	Missing or wrong data
404 Not Found	Resource doesn’t exist	Wrong ID or route
500 Internal Server Error	Server bug	Crashes, exceptions
Example Error Handler:
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

🧱 5. Good API Design Practices (You Should Start Following)

✅ Naming:

Use plural nouns → /items, /users

Don’t use verbs in URL → use HTTP methods instead

❌ /getItems → ✅ GET /items

✅ HTTP Method Semantics:

Method	Purpose
GET	Read data
POST	Create data
PUT	Replace data
PATCH	Update partial data
DELETE	Remove data

✅ Consistent JSON Structure:
Always send back:

{
  success: true/false,
  message: "Readable message",
  data: {...}
}


✅ Use try/catch for async code
✅ Return after sending response to avoid “headers already sent” errors.

🏗️ 6. How You Can Improve This API (Still Without DB)
🔹 Add Custom Middleware

Create a logger middleware:

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

🔹 Validate Input More Strictly

Use express-validator (you’ll need to install it):

npm install express-validator


Then:

import { body, validationResult } from "express-validator";

app.post("/addItems", 
  body("name").isLength({ min: 2 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
});

🔹 Add a Global Error Middleware

Handle all server crashes in one place:

app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: "Something broke!", error: err.message });
});

📖 Summary — What You’ve Mastered So Far
Concept	Your Current Level
Express Basics	✅ Strong
CRUD Routes	✅ Working
Middleware	⚠️ Needs Practice
Error Handling	⚠️ Getting there
API Design	✅ Good foundation
Async/await + DB	🚀 Next Step (once theory done) 