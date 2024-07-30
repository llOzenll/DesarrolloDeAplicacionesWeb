<?php 
    //creamos variable para conectar a mySQL
    $connection = new mysqli('localhost', 'root', '', 'servidor');

    //verificamos la conecxion
    if($connection -> connect_error) die('Error de conexion: ' .$connection -> connection_error);

    //pedimos los datos
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
    

        //consulta los datos para guardarlos
        $sql = "INSERT INTO users(name, email, password) VALUES('$name', '$email', '$password')";

        if($connection -> query($sql)=== TRUE){
            echo "user registed!";
        }else{
            echo "Error. user can not be registed" , $connection->error;
        }
    }

    //cerramos conecxion
    $connection->close();
?>