"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelRoutes = void 0;
const express_1 = require("express");
const create_model_1 = require("../components/usecases/create-model");
const modelRoutes = (0, express_1.Router)();
exports.modelRoutes = modelRoutes;
modelRoutes.post("/", (request, response) => {
    return create_model_1.createModelController.handle(request, response);
});
