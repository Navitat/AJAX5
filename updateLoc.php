<?php
    header('Access-Control-Allow-Origin: *'); 
    
    $mysqli = new mysqli('127.0.0.1', 'root', '', 'residencia');
    $mysqli->set_charset("utf8");

    $lat = $_GET['lat'];
    $long = $_GET['long'];

    $update = "UPDATE abuelo SET Latitud = '$lat', Longitud = '$long'";

    if ($mysqli->query($update) === TRUE) {
        echo "Record updated successfully";
      } else {
        echo "Error: " . $update . "<br>" . $mysqli->error;
      }
    mysqli_close($mysqli);




?>