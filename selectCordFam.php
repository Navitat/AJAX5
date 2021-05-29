<?php


    $mysqli = mysqli_connect('127.0.0.1', 'root', '', 'residencia');
    $mysqli->set_charset("utf8");

    $nom = $_GET['nom'];

    if($q = mysqli_query($mysqli ,"SELECT r.Latitud, r.Longitud FROM abuelo r JOIN familiar f ON(f.id = r.familiar) WHERE f.nom = '$nom'")){
        while($f = mysqli_fetch_assoc($q)){
            echo $f['Longitud']. ",".$f['Latitud'];
        }

    }

    mysqli_close($mysqli);

?>