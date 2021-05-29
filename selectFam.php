<?php
    $mysqli = mysqli_connect('127.0.0.1', 'root', '', 'residencia');
    $mysqli->set_charset("utf8");

    $rol = $_GET["rol"];

    if($rol == "familiar"){
        if($q = mysqli_query($mysqli ,"SELECT * FROM $rol")){
            while($f = mysqli_fetch_assoc($q)){
                echo '<option value='.$f['Id'].'>'.$f['Nom'].'</option>';
            }
    
            //http://localhost/AJAX5/select.php?rol=familiar
    
        }
    }else if($rol == "abuelo"){
        if($q = mysqli_query($mysqli ,"SELECT r.nom AS 'yayo', r.edat, r.comentari, f.nom AS 'fam' FROM $rol r JOIN familiar f ON(f.id = r.familiar)")){
            while($f = mysqli_fetch_assoc($q)){
                echo '<tr>';
                echo '<td>'.$f['yayo'].'</td>';
                echo '<td>'.$f['edat'].'</td>';
                echo '<td>'.$f['fam'].'</td>';
                echo '<td>'.$f['comentari'].'</td>';
                echo '</tr>';
            }
    
            //http://localhost/AJAX5/select.php?rol=abuelo
    
        }
    }

    

    mysqli_close($mysqli);
?>