import { deleteEmployees, editEmployees, getEmployees, postEmployees } from "@/controllers/employees.controller";
import { validateSchema } from "@/middlewares/validateSchema.middleware";
import { employeeSchema } from "@/schemas/employee.schema";
import { Router } from "express"

const employeesRouter = Router();

employeesRouter.get("/employees", getEmployees);
employeesRouter.post("/employees", validateSchema(employeeSchema), postEmployees);
employeesRouter.put("/employees/:id", validateSchema(employeeSchema), editEmployees);
employeesRouter.delete("/employees/delete/:id", deleteEmployees);


export default employeesRouter;