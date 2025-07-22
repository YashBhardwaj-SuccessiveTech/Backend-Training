// 12.Build middleware that adds a custom header to every response.
//  Allow the header value to be configurable.

export function addcustomHeader(headername, headervalue){
    return(req,res,next)=>{
        res.setHeader(headername, headervalue);
        next();
    }
}
