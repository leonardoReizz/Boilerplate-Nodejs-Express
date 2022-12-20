"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const model_routes_1 = require("./model.routes");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/model", model_routes_1.modelRoutes);
