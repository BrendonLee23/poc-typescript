import db from "@/database/database";
import { Employee } from "@/protocols/employees.protoco";


async function postEmployees(firstName: string, lastName: string, age: number): Promise<void> {
    await db.query('INSERT INTO employees ("firstName", "lastName", age) VALUES ($1, $2, $3)', [firstName, lastName, age]);
}

async function getEmployees(): Promise<Employee[]> {
    const employees = await db.query<Employee>('SELECT * FROM employees');
    return employees.rows;
}

async function verifyName(firstName: string): Promise<number> {
    const name = await db.query('SELECT * FROM employees WHERE "firstName" = $1', [firstName]);
    return name.rowCount;
}

async function verifyId(id: number): Promise<number> {
    const result = await db.query('SELECT * FROM employees WHERE "id" = $1', [id]);
    return result.rowCount;
}

async function editEmployees(firstName: string, lastName: string, age: number, id: number): Promise<void> {
    await db.query(`
    UPDATE employees
    SET "firstName" = $1, "lastName" = $2, age = $3
    WHERE id = $4
    `, [firstName, lastName, age, id]);
}

async function deleteEmployees(id: number): Promise<void> {
    await db.query('DELETE FROM employees WHERE id = $1', [id]);
}

const employeesRepository = {
    getEmployees,
    verifyName,
    postEmployees,
    verifyId,
    editEmployees,
    deleteEmployees
}

export default employeesRepository;
