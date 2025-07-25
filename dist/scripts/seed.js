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
exports.seedCountries = void 0;
const Country_1 = __importDefault(require("../models/Country"));
const countries = [
    { name: "India", code: "IN" },
    { name: "Brazil", code: "BR" },
    { name: "Germany", code: "DE" },
    { name: "France", code: "FR" },
    { name: "Argentina", code: "AR" },
    { name: "Australia", code: "AU" },
    { name: "England", code: "ENG" },
    { name: "South Africa", code: "SA" },
];
const seedCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await connectDB();
        const count = yield Country_1.default.countDocuments();
        if (count > 0) {
            console.log("Countries already seeded, skipping...");
            return;
        }
        yield Country_1.default.deleteMany({});
        yield Country_1.default.insertMany(countries);
        console.log("Countries seeded successfully!");
    }
    catch (error) {
        console.error("Error seeding countries:", error);
        // mongoose.disconnect();
    }
});
exports.seedCountries = seedCountries;
