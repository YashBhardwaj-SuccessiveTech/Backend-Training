# 📄 Error Codes Documentation

This document provides a comprehensive explanation of all error codes used in this project, helping developers understand and debug responses effectively.

---

## ✅ Success Codes

| Code | Message     | Description                                                   |
|------|-------------|---------------------------------------------------------------|
| 200  | OK          | The request has succeeded.                                    |
| 201  | Created     | A new resource has been successfully created.                 |
| 204  | No Content  | The request was successful, but there is no response body.    |

---

## ❗ Client Error Responses 

| Code | Message               | Description                                                                 |
|------|------------------------|-----------------------------------------------------------------------------|
| 400  | Bad Request            | The server cannot process the request due to invalid syntax or data.       |
| 401  | Unauthorized           | Authentication is required or has failed. Token may be missing or invalid.|
| 403  | Forbidden              | The user is authenticated but does not have permission to access the resource. |
| 404  | Not Found              | The requested resource could not be found on the server.                   |
| 405  | Method Not Allowed     | The HTTP method is not supported for the requested resource.              |
| 409  | Conflict               | The request could not be completed due to a conflict with the current state (e.g., duplicate entry). |
| 422  | Unprocessable Entity   | The request is well-formed but contains invalid data (e.g., validation errors). |
| 429  | Too Many Requests      | The user has sent too many requests in a given amount of time (rate limiting). |

---

## 🚨 Server Error Responses 

| Code | Message               | Description                                                                 |
|------|------------------------|-----------------------------------------------------------------------------|
| 500  | Internal Server Error  | A generic server error occurred. Something went wrong on the server.       |
| 501  | Not Implemented        | The server does not support the requested functionality.                   |
| 502  | Bad Gateway            | The server received an invalid response from an upstream server.           |
| 503  | Service Unavailable    | The server is temporarily unavailable (e.g., maintenance or overload).     |
| 504  | Gateway Timeout        | The server did not receive a timely response from an upstream server.      |

---

## 📌 Custom Error Codes (if applicable)

> Add your custom error codes here (e.g., for business logic)

| Code | Identifier           | Description                                                               |
|------|----------------------|---------------------------------------------------------------------------|
| 1001 | USER_ALREADY_EXISTS  | The user is trying to register with an existing email.                    |
| 1002 | INVALID_PASSWORD     | The password format is incorrect or too weak.                            |
| 1003 | TOKEN_EXPIRED        | The JWT token has expired. Please login again.                           |
| 1004 | FILE_TOO_LARGE       | Uploaded file exceeds the maximum allowed size.                          |
| 1005 | UNSUPPORTED_MEDIA    | Uploaded file type is not supported.                                     |

---

## 📍 Usage in API Responses

Each error response follows this structure:

```json
{
  "success": false,
  "status": 400,
  "error": "Bad Request",
  "message": "Invalid email format."
}
