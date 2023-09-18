import { CustomError } from "@/protocols/employees.protoco";


export function conflictError(resource: string): CustomError {
    return {
        type: "conflict",
        message: `${resource}.`
    };
}

export function unauthorizedError(resource: string): CustomError {
    return {
        type: "unauthorized",
        message: `${resource}.`
    };
}

export function notFoundError(resource: string): CustomError {
    return {
        type: "notFound",
        message: `${resource}.`
    };
}

export function unprocessableEntityError(resource: string): CustomError {
    return {
        type: "unprocessableEntity",
        message: `${resource}.`
    };
}

export function badRequestError(resource: string): CustomError {
    return {
        type: "badRequest",
        message: `${resource}.`
    };
}

export function internalServerError(resource: string): CustomError {
    return {
        type: "internalServerError",
        message: `${resource}.`
    };
}
