import { faker } from "@faker-js/faker"
import { Coords } from "./CustomMap";

export class User implements Coords {
    name: string
    location: {
        mapLat: number,
        mapLng: number 
    }
    locationInfo: string

    constructor() {
        this.name = faker.person.firstName()        
        this.location = {
            mapLat: faker.location.latitude(),
            mapLng: faker.location.latitude()
        }
        this.locationInfo = faker.word.adjective(100)
    }
    
}