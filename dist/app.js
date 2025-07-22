"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mockData_js_1 = __importDefault(require("./mockData.js"));
const body_parser_1 = __importDefault(require("body-parser"));
const assignroutes_js_1 = __importDefault(require("./routes/assignroutes.js"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("Home Page");
});
app.get("/users", (req, res) => {
    res.json(mockData_js_1.default);
});
app.use(assignroutes_js_1.default);
app.use((req, res) => {
    res.status(404);
    res.send("Route Not found");
});
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
