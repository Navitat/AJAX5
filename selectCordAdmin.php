<?php


    $mysqli = mysqli_connect('127.0.0.1', 'root', '', 'residencia');
    $mysqli->set_charset("utf8");

    if($q = mysqli_query($mysqli ,"SELECT Latitud, Longitud FROM abuelo")){
        while($f = mysqli_fetch_assoc($q)){
            echo $f['Longitud']. ",".$f['Latitud'];
        }
    }

    mysqli_close($mysqli);

?>