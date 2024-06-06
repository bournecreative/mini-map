
export interface Coords {
    location: {
        mapLat: number,
        mapLng: number 
    }
}

export class CustomMap {
    
    googleMap: google.maps.Map | undefined
    mapCords: Coords
    
    constructor(mapCords: Coords) {
       this.googleMap
       this.mapCords = mapCords
       /**
        * We can not longer create map objects in the contructor because Map and Marker must in imported. Before we could so something like
        * this.googleMap = new google.maps.Map(document.getElementById("map"), {center: {lat: 30, lng: -110},...etc}
        * 
       */
    }

    async initMap() {
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
       
        this.googleMap = new Map(document.getElementById("map") as HTMLElement, {
            center: {lat: this.mapCords.location.mapLat, lng: this.mapCords.location.mapLng},
            zoom: 2,
            mapId: 'map',
        }); 
    }

    async initMarker(markerCords: {mapLat: number, mapLng: number}) {
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
        new AdvancedMarkerElement({
            map: this.googleMap,
            position:  {lat: markerCords.mapLat, lng: markerCords.mapLng},
            title: 'Uluru'
        });
    }

}