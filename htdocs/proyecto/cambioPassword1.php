<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style/style-index.css">
        <title>Cambio de contraseña</title>
    </head>
    <body>
        <div id="src-left">
            <img id="img" src="images/img-example.png">
        </div>

        <form id='form' action="changePassword.php" method="POST">

            <h2>Escribe tu nueva contraseña</h2>
        
            <label for="password">Nueva contraseña:</label><br>
            <input type="password" id="cambioPassword" name="cambioPassword"><br><br>

            <input type='submit' value='Enviar'>
            </form>
        </form>
    </body>
</html>