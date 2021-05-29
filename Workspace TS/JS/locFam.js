window.onload = function () {
    var nom = localStorage.getItem('usuari');
    document.getElementById('nom').innerHTML = nom;
    setInterval(function () { getlocation2(); }, 600000);
};
function getlocation2() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updateLoc);
    }
    else {
        alert("localització desactivada");
    }
}
function updateLoc(position) {
    latitud = position.coords.latitude;
    longitud = position.coords.longitude;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost/AJAX5/updateLoc.php?lat=" + latitud + "&long=" + longitud, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(xhttp.responseText);
            location.reload();
        }
    };
}
function datos2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            getMapa2(this.responseText);
        }
    };
    var nom = localStorage.getItem('usuari');
    xhttp.open("GET", "http://localhost/AJAX5/selectCordFam.php?nom=" + nom, true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(null);
}
function getMapa2(direcciones) {
    var map = new OpenLayers.Map("mapdiv");
    map.addLayer(new OpenLayers.Layer.OSM());
    var epsg4326 = new OpenLayers.Projection("EPSG:4326"); //WGS 1984 projection
    var projectTo = map.getProjectionObject(); //The map projection (Spherical Mercator)
    var lonLat = new OpenLayers.LonLat(2.103504, 41.543261).transform(epsg4326, projectTo);
    var zoom = 16;
    map.setCenter(lonLat, zoom);
    var vectorLayer = new OpenLayers.Layer.Vector("Overlay");
    // Define an array. This could be done in a seperate js file.
    // This tidy formatted section could even be generated by a server-side script (jsonp)
    // let direcciones = datos();
    console.log(direcciones);
    var direc = direcciones.split(',');
    console.log(direc);
    var markers = [];
    for (var i = 0; i < direc.length; i++) {
        markers[i] = parseFloat(direc[i]);
    }
    console.log(markers);
    //Loop through the markers array
    for (var i = 0; i < markers.length; i++) {
        var lon = markers[i];
        var lat = markers[i + 1];
        var feature = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(lon, lat).transform(epsg4326, projectTo), { description: "marker number " + i }, { externalGraphic: '../images/gavi.jpg', graphicHeight: 30, graphicWidth: 30, graphicXOffset: -12, graphicYOffset: -25 });
        vectorLayer.addFeatures(feature);
        i++;
    }
    map.addLayer(vectorLayer);
}
