import express from "express";
import dummyData from "./mockData"
import bodyParser from "body-parser";
import router from "./routes/assignroutes";
import HealthCheck from "./controllers/healthcheck";
import { seedCountries } from "./scripts/seed";
import connectDB from "./config/db";
import errRoutes from "./routes/errorroutes";
import userRouter from "./routes/user";
import cookieparser from "cookie-parser";
import { HeaderSecurity } from "./middlewares/securityHeader";

const healthcheck = new HealthCheck();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cookieparser());
app.use(HeaderSecurity.HelmetSecurity);

app.get("/",(req,res)=>{
    res.send("Home Page");
});

app.get("/users",(req, res)=>{
    res.json(dummyData);
});

app.get("/health-check",healthcheck.checkServerHealth);

app.use(router);
app.use("/api/user",userRouter);

app.use(errRoutes);

app.use((req,res)=>{
    res.status(404)
    res.send("Route Not found")
});

const startServer = async () => {
  try {

    await connectDB();

    await seedCountries();

    console.log("Server is starting...");

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });

  } catch (error) {
    console.error("Error initializing server:", error);
  }
};

startServer();

