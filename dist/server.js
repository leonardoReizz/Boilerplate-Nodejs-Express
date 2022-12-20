"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
exports.app = app_1.default;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
app_1.default.listen(3333, () => {
    console.log('express up');
});
mongoose_1.default.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/api?authMechanism=DEFAULT`)
    .then(() => {
    console.log('mongo up');
})
    .catch((err) => {
    console.log(err, ' error mongo');
});
