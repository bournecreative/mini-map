import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap';
import "./css/styles.css"

const mapArea = { location: {mapLat: 30, mapLng: -110}}

const testUser = new User();
const testCompany = new Company();
const testMap = new CustomMap(mapArea);
testMap.initMap('map')
testMap.initMarker(testUser)
testMap.initMarker(testCompany)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div id="map"></div>
  </div>
`