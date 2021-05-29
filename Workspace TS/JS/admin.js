var longitud;
var latitud;
window.onload = function () {
    var nom = localStorage.getItem('usuari');
    document.getElementById('nom').innerHTML = nom;
    //select familiars
    selectFam();
    //taula avis
    showAvis();
    //taula comentaris
    showComms();
    setInterval(function () { getlocation2(); }, 600000);
};
//objecte avi
var avi = /** @class */ (function () {
    function avi(nom, edat, familiar, comentari, latitud, longitud) {
        this.nom = nom;
        this.edat = edat;
        this.familiar = familiar;
        this.comentari = comentari;
        this.latitud = latitud;
        this.longitud = longitud;
        avi.id++;
    }
    Object.defineProperty(avi.prototype, "setNom", {
        set: function (nom) {
            this.nom = nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(avi.prototype, "getNom", {
        get: function () {
            return this.nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(avi.prototype, "setEdat", {
        set: function (edat) {
            this.edat = edat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(avi.prototype, "getEdat", {
        get: function () {
            return this.edat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(avi.prototype, "setFamiliar", {
        set: function (familiar) {
            this.familiar = familiar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(avi.prototype, "getFamilair", {
        get: function () {
            return this.familiar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(avi.prototype, "setComentari", {
        set: function (comentari) {
            this.comentari = comentari;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(avi.prototype, "getComentari", {
        get: function () {
            return this.comentari;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(avi.prototype, "setLatitud", {
        set: function (latitud) {
            this.latitud = latitud;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(avi.prototype, "getLatitud", {
        get: function () {
            return this.latitud;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(avi.prototype, "setLongitud", {
        set: function (longitud) {
            this.longitud = longitud;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(avi.prototype, "getLongitud", {
        get: function () {
            return this.longitud;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(avi.prototype, "getId", {
        get: function () {
            return avi.id;
        },
        enumerable: false,
        configurable: true
    });
    avi.prototype.tostring = function () {
        var missatge;
        missatge = "Nom: " + this.nom + " | Edat: " + this.edat + " | Familiar: " + this.familiar;
        return missatge;
    };
    avi.id = 0;
    return avi;
}());
var arrAvi = [];
//update loc
function getlocation2() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updateLoc);
    }
    else {
        alert("localització desactivada");
    }
}
function getlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(guardarAvi);
    }
    else {
        alert("localització desactivada");
    }
}
function guardarAvi(position) {
    var nom = document.getElementById("nomAvi").value;
    var edat = document.getElementById("edat").value;
    var familiar = document.getElementById("familiar").value;
    latitud = position.coords.latitude;
    longitud = position.coords.longitude;
    //guardar objecte avi
    var save = new avi(nom, edat, familiar, "", latitud, longitud);
    arrAvi.push(save);
    //guardar en BBDD
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost/AJAX5/insertAvi.php?nom=" + nom + "&edat=" + edat + "&familiar=" + familiar + "&latitud=" + latitud + "&longitud=" + longitud, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(xhttp.responseText);
        }
    };
    location.reload();
}
function selectFam() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost/AJAX5/selectFam.php?rol=familiar", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("familiar").innerHTML = xhttp.responseText;
        }
    };
}
function showAvis() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost/AJAX5/selectFam.php?rol=abuelo", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("showavi").innerHTML = xhttp.responseText;
        }
    };
}
function showComms() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost/AJAX5/selectCom.php?rol=comentaris", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("showcom").innerHTML = xhttp.responseText;
        }
    };
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
        }
    };
}
