import People from "@/protocols/people.protoco";
import peopleService from "@/services/people.services";
import { Request, Response } from "express";

export async function getPeople(req: Request, res: Response){
    try{
        const result: People = await peopleService.getPeople()
        res.send(result)
    }
    catch(err){
        res.status(500).send(err.message);
    }
}
