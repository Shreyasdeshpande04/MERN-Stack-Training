📘 Node JS Practice (Day 1 - Day 5)
This repository contains my node js programs completed during Day-1 to Day-5 which were perfomed by me during my  MERN STACK Training in Fortune Cloud Technologies, Pune by Trainer Mr. Abhay Gawali Sir. Here i studied concepts like- Basics,npm,npx,modules, api key, stream , buffer, etc


## 🚀 What is Node.js?

* Node.js is a **JavaScript runtime built on Chrome's V8 engine**.
* It allows you to **run JavaScript on the server-side**, outside the browser.
* Node.js is **event-driven, non-blocking, and asynchronous**, making it ideal for building scalable network applications.

---

## ⚙️ Setting Up Node.js

1. **Install Node.js** from [nodejs.org](https://nodejs.org/) (includes `npm` by default).
2. Create a **project folder** → `mkdir myapp && cd myapp`
3. Initialize a Node.js project → `npm init -y`

   * This creates a `package.json` file to manage dependencies.
4. Create a **JavaScript file** → `touch app.js` (or manually create `app.js`)
5. Write your first server code inside `app.js`.

---

## 📝 Example Node.js Server (`app.js`)

```javascript
// Import the built-in 'http' module
const http = require('http');

// Define server port
const PORT = 3000;

// Create a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello from Node.js Home Page!');
  } else if (req.url === '/about') {
    res.end('This is the About Page.');
  } else {
    res.end('404 Page Not Found');
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
```

---

## 🖥️ Running Node.js Programs in CMD/Terminal

1. Go to your project folder → `cd myapp`

2. Start the server → `node app.js`

3. Open **browser** and test your routes:

   * `http://localhost:3000/` → Home page
   * `http://localhost:3000/about` → About page
   * Any other URL → 404 Page

4. Optional: Install **nodemon** to auto-reload server on file changes:

   ```bash
   npm install -g nodemon
   nodemon app.js
   ```

---

## ✅ Key Points

* Node.js is **server-side JavaScript**.
* Uses **non-blocking I/O**, perfect for APIs and real-time apps.
* Works well with **Express.js** for building web servers quickly.

---
