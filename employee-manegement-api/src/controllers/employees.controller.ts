import { Request, Response } from "express";
import httpStatus from "http-status";
import employeeService from "@/services/employees.services";
import { createEmployeeData } from "@/protocols/employees.protoco";

export async function getEmployees(req: Request, res: Response) {
    const result = await employeeService.getEmployees();
    res.status(httpStatus.OK).json(result);
}

export async function postEmployees(req: Request, res: Response) {
    const { firstName, lastName, age }: createEmployeeData = req.body;
    await employeeService.postEmployees(firstName, lastName, age);
    res.sendStatus(httpStatus.CREATED);
}

export async function editEmployees(req: Request, res: Response) {
    const { firstName, lastName, age }: createEmployeeData = req.body;
    const { id } = req.params;
    await employeeService.editEmployees(firstName, lastName, age, id);
    res.sendStatus(httpStatus.OK);
}

export async function deleteEmployees(req: Request, res: Response) {
    const { id } = req.params;
    await employeeService.deleteEmployees(id);
    res.sendStatus(httpStatus.OK);
}
