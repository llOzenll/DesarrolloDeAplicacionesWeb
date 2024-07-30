<!DOCTYPE html>
<html>

    <head>
        <title>registrate</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/proyecto/style/style-login.css">

    </head>

    <body>
        <div id="src-left">
            <img id="img" src="images/img-example.png">
        </div>

        <!-- Formulario para registrarse -->
        <form id="form" action="phpLogin.php" method="POST">
            <h2>Registro</h2>

            <div class="form-group">
                <label for="name">Nombre</label>
                <br>
                <input name="name" type="text" class="inputs" id="name" placeholder="usuario"  >
            </div>

            <div class="form-group">
                <label for="name">email</label>
                <br>
                <input name="email" type="email" class="inputs" id="email" placeholder="email@email.com"  >
            </div>

            <div class="form-group">
                <label for="name">contraseña</label>
                <br>
                <input name="password" type="password" class="inputs" id="password" placeholder="contraseña">
            </div>
        
            <button value="register" type="submit" class="submit-button">Enviar</button>
        </form>
        

    </body>

</html>