
import { createEmployeeData } from "@/protocols/employees.protoco";
import joi from "joi";

export const employeeSchema = joi.object<createEmployeeData>({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    age: joi.number().integer().min(18).max(60).required()
});

