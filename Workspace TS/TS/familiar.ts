window.onload = function(){
    var nom = localStorage.getItem('usuari');
    document.getElementById('nom').innerHTML = nom;

    //taula avis
    showAvi();
}

function showAvi(){
    var nom = localStorage.getItem('usuari');

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost/AJAX5/selectAvi2.php?rol=abuelo" + "&nom=" + nom, true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("showavi").innerHTML = xhttp.responseText;
        }
    }
    
}

function guardarComm(){
    let nom = localStorage.getItem('usuari');
    let comm = document.getElementById("comentari").value;

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost/AJAX5/insertarComm.php?comm="+ comm + "&nom=" + nom, true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            alert(xhttp.responseText);
        }
    }

}