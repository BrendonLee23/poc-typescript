"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = __importDefault(require("http-status"));
function errorHandler(error, req, res, next) {
    console.log(error);
    if (error.type === 'conflict') {
        return res.status(http_status_1.default.CONFLICT).send(error.message);
    }
    if (error.type === 'notFound') {
        return res.status(http_status_1.default.NOT_FOUND).send(error.message);
    }
    if (error.type === 'unprocessableEntity') {
        return res.status(http_status_1.default.UNPROCESSABLE_ENTITY).send(error.message);
    }
    if (error.type === 'badRequest') {
        return res.status(http_status_1.default.BAD_REQUEST).send(error.message);
    }
    if (error.type === 'internalServerError') {
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(error.message);
    }
    return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong.");
}
exports.default = errorHandler;
