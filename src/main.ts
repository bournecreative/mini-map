import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap';
import "./css/styles.css"

const testUser = new User();
const testCompany = new Company();
const testMap = new CustomMap();
testMap.initMap()
testMap.initMarker()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div><h4>Name</h4>${testUser.name}</div>
    <div><h4>Name</h4>${testCompany.motto}</div>
    <div id="map"></div>
  </div>
`