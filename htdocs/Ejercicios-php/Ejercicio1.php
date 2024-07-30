<?php 
    // ejercicio 1

    $estudiantes = [];

    if($_SERVER["REQUEST_METHOD"] == "POST"){

        $name = $_POST['name'];
        $note1 = $_POST['note1'];
        $note2 = $_POST['note2'];
        $note3 = $_POST['note3'];

        $total = ($note1 + $note2 + $note3)/3;
        
        echo $name ,' tu promedio es: ', '<br>', $total; 
    }
?>
