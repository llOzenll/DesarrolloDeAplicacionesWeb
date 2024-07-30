<!DOCTYPE html>
<html>

    <head>
        <title>inicia sesion</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="style/style-index.css">

    </head>

    <body>
        <div id="src-left">
            <img id="img" src="images/img-example.png">
        </div>

        <!-- inicia sesion si esta registrado si no -> se registra -->
        <form id="form" action="phpIniSesion.php" method="POST">
            <h2>Iniciar sesion</h2>

            <label for="name">Nombre</label><br>
            <input name="name" type="text" class="inputs" id="name" placeholder="usuario"><br><br>


            <label for="name">contraseña</label><br>
            <input name="password" type="password" class="inputs" id="password" placeholder="contraseña"><br><br>

            <input value="Register" type="submit" class="submit-button">
            <br><br>
            <a href="cambioContraseña.php">¿olvidaste contraseña?</a><br><br>
            <a href="login.php">¿no estas registrado?</a>
        </form>
        <?php
            if (isset($_GET['message'])) {

                switch($_GET['message']){
                    case 'Ok' :
                        echo '<h2> Por favor revisa tu correo</h2>';
                    break;

                    case 'success_password' :
                        echo '<h2> Inicia sesion con tu nueva contraseña</h2>';
                        break;

                    case 'error':
                        echo '<h2> Algo salio mal, intentalo de nuevo </h2>';
                    break;
                    
                    case 'usuario_no_encontrado':
                        echo '<h2> Usuario no existe </h2>';
                    break;
                }
                
            }
        ?>
        
    </body>

</html>