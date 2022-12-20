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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateModelUseCase = void 0;
const invalid_description_1 = require("../errors/invalid-description");
const invalid_name_1 = require("../errors/invalid-name");
class CreateModelUseCase {
    constructor(modelRepository) {
        this.modelRepository = modelRepository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data.description)
                throw new invalid_description_1.InvalidDescription();
            if (!data.name)
                throw new invalid_name_1.InvalidName();
            return yield this.modelRepository.create(data);
        });
    }
}
exports.CreateModelUseCase = CreateModelUseCase;
