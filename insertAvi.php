<?php
header('Access-Control-Allow-Origin: *');   
      $mysqli = new mysqli('127.0.0.1', 'root', '', 'residencia');
      $mysqli->set_charset("utf8");

      $nom = $_GET['nom'];
      $edat = $_GET['edat'];
      $familiar = $_GET['familiar'];
      $latitud = $_GET['latitud'];
      $longitud = $_GET['longitud'];

      $insert = "INSERT INTO abuelo (Nom, Edat, Familiar, Latitud, Longitud) VALUES ('$nom', '$edat','$familiar','$latitud','$longitud')";

      if ($mysqli->query($insert) === TRUE) {
          echo "Nou avi creat";
        } else {
          echo "Error: " . $insert . "<br>" . $mysqli->error;
        }
      mysqli_close($mysqli);
    
?>