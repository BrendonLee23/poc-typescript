import db from "@/database/database";
import People from "@/protocols/people.protoco";

async function getPeopleCount(){
    const counter = await db.query("SELECT count(*) FROM people");
    return Number(counter.rows[0].count)
}

async function getPeopleById(id: number){
    const name = await db.query<People>("SELECT * FROM people WHERE id=$1", [id]);
    return name.rows[0];
}

const peopleRepository = {
    getPeopleCount,
    getPeopleById
}

export default peopleRepository;