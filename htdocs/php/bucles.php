

<?php 
    // Ejercicio

    // $nums = [2,4,6];
    // $i = 0;
    // $num = 0;

    // while($i <= 2){
    //     $r = $nums[0]+ $num;
    //     $r1 = $nums[1]+ $num;
    //     $r2 = $nums[2]+ $num;
    //     $i++;
    // }
    // echo $r+$r1+$r2;

    // $numbers = [5,2,1];
    // $i = 0;
    // while($i <= 2){
    //     echo $numbers[$i],"<br>";
    //     $i++;
    // }


    // Ejercicio

    // $num = 0;
    // $suma = [];
    // $i = -1;
    // do{
    //     $num++;
    //     $i++;
    //     if($num % 2 == 0){
    //         $suma[$i] = $num + 0;
    //     }
        
    // }while($num < 10);

    // echo  array_sum($suma); 

    
    // Conjetura de Collatz

    // $n = $_POST['number'];

    // $count = 0;

    // do{
        
    //     $count++;

    //     if($n % 2 == 0){
    //         $n = $n / 2;

    //     }else if($n % 2 !== 0){ 
    //         $n = $n*3+1;
    //     }
    // }while( $n > 2);

    // echo $count, '<br>';


    // ejercicioç


    // $array = [1,'hola',3];

    // for($i = 0; $i < 3; $i++){
    //     echo $array[$i], ' ';
    // }

?>

<!-- <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>"> -->
<!-- 
    <br>
    <label for="num1">numero</label>
    <input type="number" id="number" name="number">
    <input type="submit" value="Enviar">
    <br>        
</form> -->

<?php //ejercicio 3 

    // $num = $_POST['number'];
    // $j = $num -1;
    
    // for($i = $j; $i > 0; $i--){

    //     $num *= $i;
    // }
    // echo $num, ' ';
?>

<!-- <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">

    <br>
    <label for="num1">number</label>
    <input type="number" id="number" name="number">
    <input type="submit" value="Enviar">
    <br>

</form> -->



<?php //ejercicio 4 

$num = $_POST['number'];
$f = 0;
$f1 = 1;
for($num; $num > 0; $num--){
    
    $f1 = $f1 + $f;
    $f = $f1 - $f;

    echo $f1, ' ';
}

?>
<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">

    <br>
    <label for="num1">number</label>
    <input type="number" id="number" name="number">
    <input type="submit" value="Enviar">
    <br>

</form>
