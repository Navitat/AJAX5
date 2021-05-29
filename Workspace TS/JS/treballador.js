window.onload = function () {
    var nom = localStorage.getItem('usuari');
    document.getElementById('nom').innerHTML = nom;
    //select treballador
    selectAvi();
};
function guardarInc() {
    var avi = document.getElementById("avi").value;
    var comm = document.getElementById("comentari").value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost/AJAX5/updateAvi.php?avi=" + avi + "&comm=" + comm, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(xhttp.responseText);
        }
    };
}
function selectAvi() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost/AJAX5/selectAvi.php?rol=abuelo", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("avi").innerHTML = xhttp.responseText;
        }
    };
}
