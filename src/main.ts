import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap';
import "./css/styles.css"

const mapArea = { location: {mapLat: 30, mapLng: -110}}

const testUser = new User();
const testCompany = new Company();
const testMap = new CustomMap(mapArea);
testMap.initMap()
testMap.initMarker(testUser.location, testUser.locationInfo)
testMap.initMarker(testCompany.location, testCompany.motto)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div><h4>Name</h4>${testUser.name}</div>
    <div><h4>Name</h4>${testCompany.motto}</div>
    <div id="map"></div>
  </div>
`