import { createEmployeeData } from "@/protocols/employees.protoco"
import { ObjectSchema } from "joi"

export function validateSchema(schema: ObjectSchema<createEmployeeData>) {

    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message)
            return res.status(422).send(errors)
        }

        next()
    }
}