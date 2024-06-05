import { faker } from "@faker-js/faker"

export class Company {
    name: string
    location: {
        lat: number,
        lng: number
    }
    motto: string

    constructor() {
        this.name = faker.company.name();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.latitude()
        }
        this.motto = faker.company.catchPhrase()
    }
}