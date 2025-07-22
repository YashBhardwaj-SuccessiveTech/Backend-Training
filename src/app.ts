import express from "express";
import dummyData from "./mockData"

const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.get("/users",(req, res)=>{
    res.json(dummyData);
});

app.listen(port, ()=>{
    console.log(`server is listening at port ${port}`);
});
