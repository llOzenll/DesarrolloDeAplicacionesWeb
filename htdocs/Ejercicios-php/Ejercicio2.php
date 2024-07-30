<?php 
    // ejercicio 2

    if($_SERVER["REQUEST_METHOD"] == "POST"){

        $diam = $_POST['diam'];
        $pi = 3.1416;

        $total = $pi * (($diam/2)*2);
        
        echo 'el diametro del circulo es: ', '<br>', $total; 
    }
?>
