<?php
    $mysqli = mysqli_connect('127.0.0.1', 'root', '', 'residencia');
    $mysqli->set_charset("utf8");

    $rol = $_GET["rol"];
    $nom = $_GET["nom"];

    if($q = mysqli_query($mysqli ,"SELECT r.nom AS 'yayo', r.edat, r.comentari, f.nom AS 'fam' FROM $rol r JOIN familiar f ON(f.id = r.familiar) WHERE f.nom = '$nom'")){
        while($f = mysqli_fetch_assoc($q)){
            echo '<tr>';
            echo '<td>'.$f['yayo'].'</td>';
            echo '<td>'.$f['edat'].'</td>';
            echo '<td>'.$f['comentari'].'</td>';
            echo '</tr>';
            echo "<br>";
        }

        //http://localhost/AJAX5/select.php?rol=abuelo

    }

    mysqli_close($mysqli);
?>