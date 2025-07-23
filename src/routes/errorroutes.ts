import { Request, Response, NextFunction } from "express";
import  express  from "express";
import createError, { HttpError } from 'http-errors';
// const createError = require('http-errors');

const app = express();

app.use(express.json());

// 401 Bad Request
app.post("/badrequest",(req: Request, res: Response, next: NextFunction)=>{
    if(!req.body.email){
        return next(createError(400, 'Email is required'));
    }
    res.send("valid request");
})

// 401 - Unauthorized
app.get('/unauthorized', (req: Request, res: Response, next: NextFunction)=>{
    const token = req.headers.authorization;
    if(!token){
        return next(createError(401, "No token provided"));
    }
});

// 403 - Forbidden
app.get('forbidden',(req: Request, res: Response, next: NextFunction)=>{
    const user = { role: "user"};
    if(user.role !== 'admin'){
        return next(createError(403, 'Access Denied'));
    }
    res.send('Access permitted');
});

// 409 - Conflict
app.post("/conflict",(req: Request, res: Response, next: NextFunction)=>{
    const existmail = "example@am.com";
    if(req.body.email == existmail){
        return next(createError(409, "email already exist"));
    }
    res.send('Registered');
})

// 500 - Internal server Error
app.get('/crash', (req: Request, res: Response, next: NextFunction)=>{
    throw new Error('simulated server crash');
});

// 404 - Route not found
app.use((req: Request, res: Response, next: NextFunction)=>{
    next(createError(404, 'Route not found'));
})

// Centralized Error Handler
app.use((err:HttpError,req: Request, res: Response, next: NextFunction)=>{
    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error"
    });
});


const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})
    