function redirect(url){
    window.location.href = url;
}

var map = L.map('map').setView([-3.828435899211545, -38.48992633231076], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([-3.828435899211545, -38.48992633231076]).addTo(map);