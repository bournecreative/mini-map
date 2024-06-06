import { faker } from "@faker-js/faker"
import { Coords } from "./CustomMap"

export class Company implements Coords {
    name: string
    location: {
        mapLat: number,
        mapLng: number
    }
    motto: string
    summary: {
        name: string,
        detail: string
    }

    constructor() {
        this.name = faker.company.name();
        this.location = {
            mapLat: faker.location.latitude(),
            mapLng: faker.location.latitude()
        }
        this.motto = faker.company.catchPhrase()
        this.summary = {
            name: this.name,
            detail: this.motto
        }
    }
}