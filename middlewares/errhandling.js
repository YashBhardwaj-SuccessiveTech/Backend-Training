// 10. Implement an error-handling middleware that captures errors
// thrown in the route handlers and sends an appropriate error response.

export const errMiddleWare = (err, req, res, next) => {
  console.error("Error is:", err.stack);
  res.status(500).json({ message: "Internal server error" });
};