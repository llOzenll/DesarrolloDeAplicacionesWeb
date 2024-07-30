<!-- <html>
    <title> php </title>
    <body>
        <?php
            $num1 = $_POST['num1'];
            $num2 = $_POST['num2'];
        ?>


        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <br>
            <label for="num1">numero 1</label>
            <input type="number" id="num1" name="num1">
            <br>

            <label for="num2">numero 2</label>
            <input type="number" id="num2" name="num2">
            <br>

            <input type="submit" value="Enviar">
            <br>

            <?php 

                if($num1 > $num2){
                    echo"el numero mayor es $num1"; 
                }
                else if($num2 > $num1){
                    echo"el numero mayor es $num2"; 
                }
                else{ 
                    echo "son iguales";
                }
            ?>
        </form>
       
    </body>
</html>

   
 -->
