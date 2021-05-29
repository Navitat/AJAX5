<?php
header('Access-Control-Allow-Origin: *');   
      $mysqli = new mysqli('127.0.0.1', 'root', '', 'residencia');
      $mysqli->set_charset("utf8");

      $nom = $_GET['nom'];
      $comm = $_GET['comm'];

      $insert = "INSERT INTO comentaris (familiar, comentari) VALUES ('$nom', '$comm')";

      if ($mysqli->query($insert) === TRUE) {
          echo "Nou acomentari creat";
        } else {
          echo "Error: " . $insert . "<br>" . $mysqli->error;
        }
      mysqli_close($mysqli);
    
?>