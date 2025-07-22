
export function middleware1(req, res, next){
    console.log("First middleware called");
    next();
}

export function middleware2(req, res, next){
    console.log("Second middleware called");
    next();
}

export function middleware3(req, res, next){
    console.log("Third middleware called");
    next();
}

