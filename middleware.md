<!-- Prepare documentation on middleware and its usage and store it in middleware.md.  -->

# What is Middleware?

Middleware is a function that has access to the request (`req`), response (`res`), and the `next` function in the request-response cycle.

It is used to modify the request or response, run logic, or end the request cycle.

---

## Basic Structure

```js
function middlewareName(req, res, next) {
  // do something with req or res
  next(); // pass control to the next middleware
}
```

## Use in Express (Node.js)

```js
const express = require('express');
const app = express();

// Custom middleware example
function loggerMiddleware(req, res, next) {
  console.log(`Request: ${req.method} ${req.url}`);
  next(); // continue to the next middleware or route
}

app.use(loggerMiddleware); // apply middleware globally

app.get('/', (req, res) => {
  res.send('Hello World');
});
```

## Middleware is used to control and extend the behavior of your application during the request-response cycle in web servers like Express (Node.js).

### 🚀 Common Middleware Use Cases (with Examples)

1. **Request Logging**  
   **Use case:** Log every request made to your server (for debugging or tracking).

2. **Authentication & Authorization**  
   **Use case:** Check if the user is allowed to access a specific route.

3. **Parsing JSON Request Body**  
   **Use case:** Read `POST` request data sent in JSON format.

4. **Enabling CORS (Cross-Origin Resource Sharing)**  
   **Use case:** Allow frontend hosted on a different domain to access your API.

5. **Security Headers (Helmet)**  
   **Use case:** Add secure HTTP headers to protect your app.

6. **Custom Error Handling**  
   **Use case:** Catch and respond to server errors in one place.

