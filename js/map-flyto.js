'use strict';

const CITIES = [
    { lon: -2.15, lat: 57.15 },
    { lon: 138.6, lat: -34.916667 },
    { lon: 3, lat: 36.833333 },
    { lon: 4.883333, lat: 52.366667 },
    { lon: 32.916667, lat: 39.916667 },
    { lon: -57.666667, lat: -25.25 },
    { lon: 23.716667, lat: 37.966667 },
    { lon: 174.75, lat: -36.866667 },
    { lon: 100.5, lat: 13.75 },
    { lon: 2.15, lat: 41.383333 },
    { lon: 116.416667, lat: 39.916667 },
    { lon: -48.483333, lat: -1.466667 },
    { lon: -5.933333, lat: 54.616667 },
    { lon: 20.533333, lat: 44.866667 },
    { lon: 13.416667, lat: 52.5 },
    { lon: -1.916667, lat: 52.416667 },
    { lon: -74.25, lat: 4.533333 },
    { lon: 72.8, lat: 19 },
    { lon: -0.516667, lat: 44.833333 },
    { lon: 8.816667, lat: 53.083333 },
    { lon: 153.133333, lat: -27.483333 },
    { lon: -2.583333, lat: 51.466667 },
    { lon: 4.366667, lat: 50.866667 },
    { lon: 26.116667, lat: 44.416667 },
    { lon: 19.083333, lat: 47.5 },
    { lon: -58.366667, lat: -34.583333 },
    { lon: 31.35, lat: 30.033333 },
    { lon: 88.4, lat: 22.566667 },
    { lon: 113.25, lat: 23.116667 },
    { lon: 18.366667, lat: -33.916667 },
    { lon: -67.033333, lat: 10.466667 },
    { lon: -52.3, lat: 4.816667 },
    { lon: -106.083333, lat: 28.616667 },
    { lon: 106.566667, lat: 29.766667 },
    { lon: 12.566667, lat: 55.666667 },
    { lon: -64.166667, lat: -31.466667 },
    { lon: -17.466667, lat: 14.666667 },
    { lon: 130.85, lat: -12.466667 },
    { lon: 43.05, lat: 11.5 },
    { lon: -6.25, lat: 53.333333 },
    { lon: 30.883333, lat: -29.883333 },
    { lon: -3.166667, lat: 55.916667 },
    { lon: 8.683333, lat: 50.116667 },
    { lon: -58.25, lat: 6.75 },
    { lon: -4.25, lat: 55.833333 },
    { lon: -90.516667, lat: 14.616667 },
    { lon: -79.933333, lat: -2.166667 },
    { lon: 10.033333, lat: 53.55 },
    { lon: 23.633333, lat: 70.633333 },
    { lon: -82.383333, lat: 23.133333 },
    { lon: 25, lat: 60.166667 },
    { lon: 147.316667, lat: -42.866667 },
    { lon: 114.183333, lat: 22.333333 },
    { lon: -70.116667, lat: -20.166667 },
    { lon: 104.333333, lat: 52.5 },
    { lon: 106.8, lat: -6.266667 },
    { lon: 28.066667, lat: -26.2 },
    { lon: -76.816667, lat: 17.983333 },
    { lon: 15.283333, lat: -4.3 },
    { lon: 101.7, lat: 3.133333 },
    { lon: -68.366667, lat: -16.45 },
    { lon: -1.5, lat: 53.75 },
    { lon: -77.033333, lat: -12 },
    { lon: -9.15, lat: 38.733333 },
    { lon: -3, lat: 53.416667 },
    { lon: -0.083333, lat: 51.533333 },
    { lon: 4.833333, lat: 45.75 },
    { lon: -3.7, lat: 40.433333 },
    { lon: -2.25, lat: 53.5 },
    { lon: 120.95, lat: 14.583333 },
    { lon: 5.333333, lat: 43.333333 },
    { lon: -106.416667, lat: 23.2 },
    { lon: 39.75, lat: 21.483333 },
    { lon: 144.966667, lat: -37.783333 },
    { lon: -99.116667, lat: 19.433333 },
    { lon: 9.166667, lat: 45.45 },
    { lon: -56.166667, lat: -34.883333 },
    { lon: 37.6, lat: 55.75 },
    { lon: 11.583333, lat: 48.133333 },
    { lon: 129.95, lat: 32.8 },
    { lon: 136.933333, lat: 35.116667 },
    { lon: 36.916667, lat: -1.416667 },
    { lon: 118.883333, lat: 32.05 },
    { lon: 14.25, lat: 40.833333 },
    { lon: 77.2, lat: 28.583333 },
    { lon: -1.616667, lat: 54.966667 },
    { lon: 30.8, lat: 46.45 },
    { lon: 135.5, lat: 34.533333 },
    { lon: 10.7, lat: 59.95 },
    { lon: -79.533333, lat: 8.966667 },
    { lon: -55.25, lat: 5.75 },
    { lon: 2.333333, lat: 48.8 },
    { lon: 115.866667, lat: -31.95 },
    { lon: -4.083333, lat: 50.416667 },
    { lon: 147.133333, lat: -9.416667 },
    { lon: 14.433333, lat: 50.083333 },
    { lon: 96, lat: 16.833333 },
    { lon: -21.966667, lat: 64.066667 },
    { lon: -43.2, lat: -22.95 },
    { lon: 12.45, lat: 41.9 },
    { lon: -38.45, lat: -12.933333 },
    { lon: -70.75, lat: -33.466667 },
    { lon: 30.3, lat: 59.933333 },
    { lon: -46.516667, lat: -23.516667 },
    { lon: 121.466667, lat: 31.166667 },
    { lon: 103.916667, lat: 1.233333 },
    { lon: 23.333333, lat: 42.666667 },
    { lon: 18.05, lat: 59.283333 },
    { lon: 151, lat: -34 },
    { lon: 47.55, lat: -18.833333 },
    { lon: 51.75, lat: 35.75 },
    { lon: 139.75, lat: 35.666667 },
    { lon: 13.2, lat: 32.95 },
    { lon: 12.333333, lat: 45.433333 },
    { lon: -96.166667, lat: 19.166667 },
    { lon: 16.333333, lat: 48.233333 },
    { lon: 132, lat: 43.166667 },
    { lon: 21, lat: 52.233333 },
    { lon: 174.783333, lat: -41.283333 },
    { lon: 8.516667, lat: 47.35}
];

function randomCity() {
    const city = CITIES[Math.floor(Math.random() * CITIES.length)];
    return [city.lon, city.lat];
}

const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-98.4946, 29.4252],
    zoom: 11
});

document.getElementById('fly').addEventListener('click', () => {
// Fly to a random location
    map.flyTo({
        curve: 1,
        speed: 0.25,
        center: randomCity(),
        zoom: 11,
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});