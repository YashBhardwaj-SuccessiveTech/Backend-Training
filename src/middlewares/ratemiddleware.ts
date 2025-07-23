// 13. Develop middleware that limits the number of requests a user can make 
// in a given time frame. Include parameters for setting the limit.

import rateLimit from 'express-rate-limit';

class Ratelimit{
  public limiter = rateLimit({
    windowMs: 60 * 1000, 
    max: 5, 
    message: {
      status: 429,
      message: "Too many requests, please try again later.",
    },
    standardHeaders: true,  
    legacyHeaders: false,  
  });
}

export default Ratelimit;