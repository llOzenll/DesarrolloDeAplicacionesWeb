<?php 
    // ejercicio 3

    if($_SERVER["REQUEST_METHOD"] == "POST"){

        $nota = $_POST['nota'];
    }

    function Range(){
        if($nota <= 4.9 && $nota >=1){ return $nota = 'I';}
        else if($nota <= 6.9 && $nota >= 5){ return $nota = 'A';}
        else if($nota <= 8.9 && $nota >= 7){ return $nota = 'B';}
        else if($nota <= 10 && $nota >= 9){ return $nota = 'E';}
    }

?>
