import { faker } from "@faker-js/faker"
import { Mappable } from "./CustomMap"

export class Company implements Mappable {
    name: string
    location: {
        mapLat: number,
        mapLng: number
    }
    motto: string
 

    constructor() {
        this.name = faker.company.name();
        this.location = {
            mapLat: faker.location.latitude(),
            mapLng: faker.location.latitude()
        }
        this.motto = faker.company.catchPhrase()
    }

    markerContent(): string {
        return `Company name: ${this.name} <br/> Company Catch phrase: ${faker.company.catchPhrase()}`
    }
}