"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.internalServerError = exports.badRequestError = exports.unprocessableEntityError = exports.notFoundError = exports.conflictError = void 0;
function conflictError(resource) {
    return {
        type: "conflict",
        message: "".concat(resource, ".")
    };
}
exports.conflictError = conflictError;
function notFoundError(resource) {
    return {
        type: "notFound",
        message: "".concat(resource, ".")
    };
}
exports.notFoundError = notFoundError;
function unprocessableEntityError(resource) {
    return {
        type: "unprocessableEntity",
        message: "".concat(resource, ".")
    };
}
exports.unprocessableEntityError = unprocessableEntityError;
function badRequestError(resource) {
    return {
        type: "badRequest",
        message: "".concat(resource, ".")
    };
}
exports.badRequestError = badRequestError;
function internalServerError(resource) {
    return {
        type: "internalServerError",
        message: "".concat(resource, ".")
    };
}
exports.internalServerError = internalServerError;
