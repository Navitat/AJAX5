
function loginAdmin(){
    let nom = document.getElementById("nom").value;
    let pass = document.getElementById("pass").value;

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost/AJAX5/select.php?nom=" + nom + "&pass=" + pass + "&rol=admin", true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //document.getElementById("lista").innerHTML = xhttp.responseText;
            let rows = this.responseText;

            //alert("Files: " + this.responseText);

            if(rows == "0"){
                alert("Usuario incorrecto");
            }else{
                alert("Credenciales correctas.");

                //guardar en local storage
                localStorage.setItem('usuari', nom);
                localStorage.setItem('pass', pass);

                window.location.href = "../html/admin.html";
            }
        }
    }
}

function loginFamiliar(){
    let nom2 = document.getElementById("nom2").value;
    let pass2 = document.getElementById("pass2").value;

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost/AJAX5/select.php?nom=" + nom2 + "&pass=" + pass2 + "&rol=familiar", true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //document.getElementById("lista").innerHTML = xhttp.responseText;
            let rows = this.responseText;

            //alert("Files: " + this.responseText);

            if(rows == "0"){
                alert("Usuario incorrecto");
            }else{
                alert("Credenciales correctas.");

                //guardar en local storage
                localStorage.setItem('usuari', nom2);
                localStorage.setItem('pass', pass2);
                
                window.location.href = "../html/familiar.html";
            }
        }
    }
}

function loginTreballador(){
    let nom3 = document.getElementById("nom3").value;
    let pass3 = document.getElementById("pass3").value;

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost/AJAX5/select.php?nom=" + nom3 + "&pass=" + pass3 + "&rol=trabajador", true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //document.getElementById("lista").innerHTML = xhttp.responseText;
            let rows = this.responseText;

            //alert("Files: " + this.responseText);

            if(rows == "0"){
                alert("Usuario incorrecto");
            }else{
                alert("Credenciales correctas.");

                //guardar en local storage
                localStorage.setItem('usuari', nom3);
                localStorage.setItem('pass', pass3);

                window.location.href = "../html/treballador.html";
            }
        }
    }
}