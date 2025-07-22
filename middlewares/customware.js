// 9. Write a custom middleware function that logs the incoming requests' method, URL, and timestamp to the console.


const customLogger = (req, res, next) => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`Request Method: ${req.method}, Request url: ${req.url}, Request time: ${timestamp}`);
  next();
};


export default customLogger;
