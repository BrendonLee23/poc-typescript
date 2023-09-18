"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.employeeSchema = joi_1.default.object({
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    age: joi_1.default.string()
        .regex(/^\d{2}$/) // Deve ter exatamente 2 dígitos
        .required()
});
