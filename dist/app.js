"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mockData_1 = __importDefault(require("./mockData"));
const body_parser_1 = __importDefault(require("body-parser"));
const assignroutes_1 = __importDefault(require("./routes/assignroutes"));
const healthcheck_1 = __importDefault(require("./controllers/healthcheck"));
const seed_1 = require("./scripts/seed");
const db_1 = __importDefault(require("./config/db"));
const healthcheck = new healthcheck_1.default();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("Home Page");
});
app.get("/users", (req, res) => {
    res.json(mockData_1.default);
});
app.get("/health-check", healthcheck.checkServerHealth);
app.use(assignroutes_1.default);
app.use((req, res) => {
    res.status(404);
    res.send("Route Not found");
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // First, connect to the DB
        yield (0, db_1.default)();
        // Seed countries before starting the server
        yield (0, seed_1.seedCountries)();
        console.log("Server is starting...");
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    }
    catch (error) {
        console.error("Error initializing server:", error);
    }
});
// Start the server
startServer();
