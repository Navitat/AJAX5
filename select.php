<?php
    $mysqli = mysqli_connect('127.0.0.1', 'root', '', 'residencia');
    $mysqli->set_charset("utf8");

    $nom = $_GET["nom"];
    $pass = $_GET["pass"];
    $rol = $_GET["rol"];

    //$q = mysqli_query($mysqli ,"SELECT * FROM admin WHERE Nom = $nom AND Password = $pass");

    //$rows = mysqli_num_rows($q);

    //echo $rows;

    if($q = mysqli_query($mysqli ,"SELECT * FROM $rol WHERE Nom = '$nom' AND Password = '$pass'")){
        $rows = mysqli_num_rows($q);

        echo $rows;

        //http://localhost/AJAX5/select.php?nom=test&pass=1234&rol=admin

    }

    mysqli_close($mysqli);
?>