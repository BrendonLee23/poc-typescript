
export type Employee = {
    id: number,
    firstName: string,
    lastName: string,
    age: number
}

export type createEmployeeData = Omit<Employee, "id">

export interface CustomError {
    type: string;
    message: string;
}
