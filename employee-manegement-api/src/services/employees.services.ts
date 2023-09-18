import { conflictError, unauthorizedError } from "@/errors/errors";
import { Employee } from "@/protocols/employees.protoco";

import employeesRepository from "@/repositories/employees.repository";


async function getEmployees() { 

    const employees: Employee[] = await employeesRepository.getEmployees();

    return employees;
}

async function postEmployees(firstName: string, lastName: string, age: number) {

    const nameExists: number = await employeesRepository.verifyName(firstName);

    if (nameExists > 0) {
        throw conflictError("Este Nome já existe");
    }

    const result = await employeesRepository.postEmployees(firstName, lastName, age);

    return result;
}

async function editEmployees(firstName: string, lastName: string, age: number, id) { 

    const idExists: number = await employeesRepository.verifyId(id);

    if (idExists === 0) {
        throw unauthorizedError("Funcionário inexistente");
    }

    await employeesRepository.editEmployees(firstName, lastName, age, id);
}

async function deleteEmployees(id) {

    const idExists: number = await employeesRepository.verifyId(id);

    if (idExists === 0) {
        throw unauthorizedError("Funcionário inexistente");
    }

    await employeesRepository.deleteEmployees(id);
}

const employeeService = {
    getEmployees,
    postEmployees,
    editEmployees,
    deleteEmployees
}

export default employeeService;
