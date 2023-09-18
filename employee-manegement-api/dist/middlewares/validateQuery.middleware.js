"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuery = void 0;
function validateQuery(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.query, { abortEarly: false });
        if (validation.error) {
            var errors = validation.error.details.map(function (detail) { return detail.message; });
            return res.status(422).send(errors);
        }
        next();
    };
}
exports.validateQuery = validateQuery;
