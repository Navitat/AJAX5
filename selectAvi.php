<?php
    $mysqli = mysqli_connect('127.0.0.1', 'root', '', 'residencia');
    $mysqli->set_charset("utf8");

    $rol = $_GET["rol"];

    if($q = mysqli_query($mysqli ,"SELECT * FROM $rol")){
        while($f = mysqli_fetch_assoc($q)){
            echo '<option value='.$f['Id'].'>'.$f['Nom'].'</option>';
        }

        //http://localhost/AJAX5/select.php?rol=familiar

    }

    mysqli_close($mysqli);
?>