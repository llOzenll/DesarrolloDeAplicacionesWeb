<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;
    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';


    // Crear conexión
    $conection = new mysqli('localhost', 'root', '', 'proyecto');

    // Verificar la conexión
    if ($conection->connect_error) {
        die("Conexión fallida: " . $conection->connect_error);
    }

    // Obtener el nombre de usuario del formulario
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Recuperar datos del formulario

        $email = $_POST['email'];
        
        // Verificar si el usuario ya existe
        $sql = "SELECT * FROM users WHERE email = ?";
        $stmt = $conection->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();

        if ($result->num_rows > 0){
            // enviar correo
            $mail = new PHPMailer(true);

            try {
                $mail->isSMTP();                                            //Send using SMTP
                $mail->Host       = 'smtp.gmail.com';                       //Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                $mail->Username   = 'llljooglelll@gmail.com';               //SMTP username
                $mail->Password   = 'Google.com1';                          //SMTP password
                $mail->Port       =  465;                                 
            
                //Recipients
                $mail->setFrom('llljooglelll@gmail.com', 'hola');
                $mail->addAddress($email, 'hola5');                         //Add a recipient
                
            
            
                //Content
                $mail->isHTML(true);                                        //Set email format to HTML
                $mail->Subject = 'recuperacion de contraseña';
                $mail->Body    = 'Hola este es un correo para la recuperacion de tu contraseña, por favor ingresa 
                a este enlace: <a href="localhost/proyecto/cambioPassword1.php?id='.$row['id'].'">Recuperar contraseña</a>';
                $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
            
                $mail->send();
                header("Location: index-ini-sesion.php?message=Ok");
            } catch (Exception $e) {
                header("Location: index-ini-sesion.php?message=error");
            }
            
        }else {
            header("Location: index-ini-sesion.php?message=usuario_no_encontrado");
        }
    }
    $stmt->close();
    $conection->close();
?>
