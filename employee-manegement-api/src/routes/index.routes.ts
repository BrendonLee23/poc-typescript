import { Router } from "express";
import employeesRouter from "./employee.routes";



const router = Router()

router.use(employeesRouter)

export default router;
