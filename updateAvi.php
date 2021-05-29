<?php
    header('Access-Control-Allow-Origin: *'); 
    
    $mysqli = new mysqli('127.0.0.1', 'root', '', 'residencia');
    $mysqli->set_charset("utf8");

    $avi = $_GET['avi'];
    $comm = $_GET['comm'];

    $update = "UPDATE abuelo SET comentari = '$comm' WHERE Id = $avi";

    if ($mysqli->query($update) === TRUE) {
        echo "Record updated successfully";
      } else {
        echo "Error: " . $update . "<br>" . $mysqli->error;
      }
    mysqli_close($mysqli);




?>