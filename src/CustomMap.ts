
export class CustomMap {
    
    googleMap: google.maps.Map | undefined

    constructor() {
       this.googleMap
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