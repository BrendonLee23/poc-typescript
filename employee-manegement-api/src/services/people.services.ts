import People from "@/protocols/people.protoco";
import peopleRepository from "@/repositories/people.repository";

async function getPeople(){

    const peopleCount: number = await peopleRepository.getPeopleCount()

    const id: number = Math. floor(Math. random() * (peopleCount)) + 1

    const result: People = await peopleRepository.getPeopleById(id)

    return result;
}

const peopleService = {
    getPeople
}

export default peopleService;
