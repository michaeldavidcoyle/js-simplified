'use strict';
console.log('Hello from map-flyto.js');

const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-98.4946, 29.4252],
    zoom: 10
});

document.getElementById('fly').addEventListener('click', () => {
// Fly to a random location
    map.flyTo({
        curve: 1,
        speed: 0.5,
        center: [(Math.random() - 0.5) * 360, (Math.random() - 0.5) * 100],
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});