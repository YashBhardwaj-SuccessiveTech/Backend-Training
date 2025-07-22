import express from "express";
import dummyData from "./mockData.js"
import bodyParser from "body-parser";
import router from "./routes/assignroutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.get("/users",(req, res)=>{
    res.json(dummyData);
});

app.use(router);
 
app.use((req,res)=>{
    res.status(404)
    res.send("Route Not found")
})

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});
