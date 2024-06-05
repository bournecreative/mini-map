import { faker } from "@faker-js/faker"

interface Record {
    name: string,
    location: {
        lat: number,
        lng: number
    }
}

export class User {
    name: string;
    location: {
        lat: number,
        lng: number
    }

    constructor() {
        this.name = faker.person.firstName()
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.latitude()
        }
    }
    
}