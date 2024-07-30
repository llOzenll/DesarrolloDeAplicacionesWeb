<?php 
   
    session_start();
    //se establece la conexion de datos
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'proyecto';

    $connection = new mysqli($servername, $username, $password, $database);

    //verifica conexion
    if($connection -> connect_error) {
        die('Error de conexion: ' .$connection->connect_error);
    }
    //verifica si se han enviado los datos del formulario
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $name =  $_POST['name'];
        $password =  $_POST['password'];
    }

    $sql = "SELECT id FROM users WHERE name = '$name' AND password = $password";
    $result = $connection->query($sql);

    if($result->num_rows == 1){
        $_SESSION['name'] = $name;
        
        header('location: main-page.php');
    }else{
        header('location: index-ini-sesion.php');
    }
    
    $connection -> close();
?>