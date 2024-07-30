<?php 
    $servername = "localhost";
    $username = "root";
    $passwordServer = "";
    $dbname = "proyecto";

    $connection = new mysqli( $servername, $username, $passwordServer, $dbname);

    if($connection -> connect_error) die('Error de conexion: ' .$connection -> connection_error);

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        //verify user exists
        $sql = "SELECT * FROM users WHERE name = ?";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param("s", $name);
        $stmt->execute();
        $result = $stmt->get_result();

        if($result -> num_rows > 0){
            header("location: login.php ? error=user_exist");
        }
        else{
            
            $sql = "INSERT INTO users(name, email, password) VALUES('$name', '$email', '$password')";

            if($connection -> query($sql)=== TRUE){
                header('location: index-ini-sesion.php');
            }else{
                echo "Error. user can not be registed" , $connection->error;
            }
        }
    }

    $connection->close();
    $stmt->close();
?>

