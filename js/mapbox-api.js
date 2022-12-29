'use strict';

navigator.geolocation.getCurrentPosition(
    successLocation,
    errorLocation,
    { enableHighAccuracy: true }
)

function setupMap(centerPosition) {
    const map = new mapboxgl.Map({
        accessToken: MAPBOX_ACCESS_TOKEN,
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: centerPosition,
        zoom: 12
    });
}

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-87.6298, 41.8781])
}