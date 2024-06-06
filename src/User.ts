import { faker } from "@faker-js/faker"
import { Mappable } from "./CustomMap";

export class User implements Mappable {
    name: string
    location: {
        mapLat: number,
        mapLng: number 
    }    

    constructor() {
        this.name = faker.person.firstName()        
        this.location = {
            mapLat: faker.location.latitude(),
            mapLng: faker.location.latitude()
        }
    }

    markerContent(): string {
        return `Name: ${this.name} <br/> Job Title: ${faker.person.jobTitle()}`
    }
    
}