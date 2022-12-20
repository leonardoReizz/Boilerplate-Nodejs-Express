"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.express.use((0, cors_1.default)());
        this.express.use(express_1.default.json());
        this.express.use(body_parser_1.default.urlencoded({ extended: false }));
        this.express.use(body_parser_1.default.json());
    }
    routes() {
        this.express.use(routes_1.routes);
    }
}
exports.default = new App().express;
