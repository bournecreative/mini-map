
export class CustomMap {
    
    googleMap: google.maps.Map | undefined

    constructor() {
       this.googleMap
       /**
        * We can not longer create map objects in the contructor because Map and Marker must in imported. Before we could so something like
        * this.googleMap = new google.maps.Map(document.getElementById("map"), {center: {lat: 30, lng: -110},...etc}
        * 
       */
    }

    async initMap() {
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
       
        this.googleMap = new Map(document.getElementById("map") as HTMLElement, {
            center: {lat: 30, lng: -110},
            zoom: 7,
            mapId: 'map',
        }); 
    }

    async initMarker() {
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
        new AdvancedMarkerElement({
            map: this.googleMap,
            position:  {lat: 30, lng: -110},
            title: 'Uluru'
        });
    }

}