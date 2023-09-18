"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employees_controller_1 = require("@/controllers/employees.controller");
var express_1 = require("express");
var employeesRouter = (0, express_1.Router)();
employeesRouter.get("/employees", employees_controller_1.getEmployees);
exports.default = employeesRouter;
