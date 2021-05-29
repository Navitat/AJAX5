var longitud:any;
var latitud:any;

window.onload = function(){
    var nom = localStorage.getItem('usuari');
    document.getElementById('nom').innerHTML = nom;

    //select familiars
    selectFam();

    //taula avis
    showAvis();

    //taula comentaris
    showComms();

    setInterval(function(){ getlocation2();}, 600000);

}

//objecte avi
class avi{
    public nom:string;
    public edat:number;
    public familiar:string;
    public comentari:string;
    public latitud:string;
    public longitud:string;
    public static id:number = 0;

    constructor(nom:string, edat:number, familiar:string, comentari:string, latitud:string, longitud:string){
        this.nom = nom;
        this.edat = edat;
        this.familiar = familiar;
        this.comentari = comentari;
        this.latitud = latitud;
        this.longitud = longitud;

        avi.id++;
    }

    set setNom(nom:string){
        this.nom = nom;
    }
    get getNom(){
        return this.nom;
    }

    set setEdat(edat:number){
        this.edat = edat;
    }
    get getEdat(){
        return this.edat;
    }

    set setFamiliar(familiar:string){
        this.familiar = familiar;
    }
    get getFamilair(){
        return this.familiar;
    }

    set setComentari(comentari:string){
        this.comentari = comentari;
    }
    get getComentari(){
        return this.comentari;
    }

    set setLatitud(latitud:string){
        this.latitud = latitud;
    }
    get getLatitud(){
        return this.latitud;
    }

    set setLongitud(longitud:string){
        this.longitud = longitud;
    }
    get getLongitud(){
        return this.longitud;
    }

    get getId(){
        return avi.id;
    }

    public tostring(){
        var missatge:string;

        missatge = "Nom: " + this.nom + " | Edat: " + this.edat + " | Familiar: " + this.familiar;

        return missatge;
    }
    
}

let arrAvi:avi[] = [];

//update loc
function getlocation2(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updateLoc);
    }else{
        alert("localització desactivada")
    }
}

function getlocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(guardarAvi);
    }else{
        alert("localització desactivada")
    }
}

function guardarAvi(position){
    

    let nom = document.getElementById("nomAvi").value;
    let edat = document.getElementById("edat").value;
    let familiar = document.getElementById("familiar").value;
    latitud = position.coords.latitude;
    longitud = position.coords.longitude;

    //guardar objecte avi
    var save = new avi(nom, edat, familiar, "", latitud, longitud);
    arrAvi.push(save);

    //guardar en BBDD
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost/AJAX5/insertAvi.php?nom=" + nom + "&edat=" + edat + "&familiar=" + familiar + "&latitud=" + latitud + "&longitud=" + longitud, true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            alert(xhttp.responseText);
        }
    }

    location.reload();

}

function selectFam(){
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost/AJAX5/selectFam.php?rol=familiar", true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("familiar").innerHTML = xhttp.responseText;
        }
    }
}

function showAvis(){
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost/AJAX5/selectFam.php?rol=abuelo", true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("showavi").innerHTML = xhttp.responseText;
        }
    }
    
}

function showComms(){
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost/AJAX5/selectCom.php?rol=comentaris", true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("showcom").innerHTML = xhttp.responseText;
        }
    }
}

function updateLoc(position){
    latitud = position.coords.latitude;
    longitud = position.coords.longitude;


    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost/AJAX5/updateLoc.php?lat=" + latitud + "&long=" + longitud, true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            alert(xhttp.responseText);
        }
    }
}