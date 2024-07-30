
//función que redimensiona la barra una vez pulsado el play
function redimensionaBarra()
{	
	//Si al llamar a la función, el vídeo no ha terminado
	if(!medio.ended)
	{
		/*se crea una variable que toma el valor, pasado a número entero
		de lo que lleva el vídeo*/
		var total=parseInt(medio.currentTime*maximo / medio.duration);
		//se modifica el ancho del elemento
		progreso.style.width=total+'px';
	}
	//Si el vídeo ha terminado
	else
	{
		//el ancho de la barra se pone a 0
		progreso.style.width='0px';
		//cambia el valor del botón
		play.value='\u25BA';
		//y se limpia el intervalo creado antes
		window.clearInterval(bucle);
	}
}
/*función que será llamada cuando se pulse la barra del vídeo
pasando por parámetro el punto dónde ha ocurrido el evento*/
function desplazarMedio(e)
{
	//si el vídeo no está pausado ni terminado
	if(!medio.paused && !medio.ended)
	{
		/*cogemos la posición del ratón en el eje x, 
		para ello hay que restar su posición, dentro del elemento, del eje y*/
		var ratonX=e.pageX-barra.offsetLeft;
		//creamos una variable que contendrá el tiempo de dónde hemos pulsado
		var nuevoTiempo=ratonX*medio.duration/maximo;
		//actualizamos el tiempo en el vídeo
		medio.currentTime=nuevoTiempo;
		//redimensionamos la barra con la posición del ratón
		progreso.style.width=ratonX+'px';
	}
}
//función que ocurre cuando pulsamos play
function accionPlay()
{
	//si el vídeo no está pausado ni terminado
	if(!medio.paused && !medio.ended) 
	{
		//se pausa el vídeo
		medio.pause();
		//cambia el valor del botón play al triángulo invertido
		play.value='\u25BA';
		//se limpia el intervalo creado antes
		window.clearInterval(bucle);
	}
	//la primera vez que pulsemos play entrará en esta parte del código
	else
	{
		//se pondrá en marcha el vídeo
		medio.play();
		//cambiará el valor del botón y aparecerán dos pipe
		play.value='||';
		/*se crea una variable asociada a un intervalo de 1s
		que irá llamando a la función redimensionaBarra*/
		bucle=setInterval(redimensionaBarra, 1000);
	}
}

// funcion para reiniciar el video
function reset(){
	if(!medio.paused && !medio.ended){
		medio.currentTime = 0;
		medio.play();
	}
	
}
// funcion para retrasar 5s el video
function retrasar1(){
	if(!medio.ended){
		medio.currentTime = medio.currentTime - 5;
	}
}
// funcion para adelantara 5s el video
function adelantar1(){
	if(!medio.ended){
		medio.currentTime = medio.currentTime + 5;
	}
}
// funcion para disminuir volumen
function menosVolumen1(){
	if(medio.volume != 0){
		medio.volume = medio.volume - 0.1;
	}
}
// funcion para aumentar volumen
function masVolumen1(){
	if(medio.volume >= 0){
		medio.volume = medio.volume + 0.1;
	}
}

// funcion para silenciar y reanudar el volumen
function silenciar1(){
	if(!medio.muted){
		medio.muted = true;
		silenciar.setAttribute("value", "escuchar");
		console.log("1");
	}
	else{
		medio.muted = false;
		silenciar.setAttribute("value", "silenciar");
		console.log("2");
	}
	
}



//función inicial
function iniciar() 
{
	//se declara una variable que es el máximo de la barra
	maximo=700;
	//obtenemos los objetos de los elementos
	medio = document.getElementById('medio');
	barra = document.getElementById('barra');
	progreso = document.getElementById('progreso');
	play = document.getElementById('play');

	reiniciar = document.getElementById('reiniciar');
	retrasar = document.getElementById('retrasar');
	adelantar = document.getElementById('adelantar');
	menosVolume = document.getElementById('menosVolumen');
	masVolume = document.getElementById('masVolumen');
	silenciar = document.getElementById('silenciar');
	//obtener los objetos del resto de elementos necesarios
	
	//creamos los manejadores de eventos
	play.addEventListener('click', accionPlay, false);
	barra.addEventListener('click', desplazarMedio, false);
	reiniciar.addEventListener('click', reset, false);
	retrasar.addEventListener('click', retrasar1, false);
	adelantar.addEventListener('click', adelantar1, false);
	menosVolume.addEventListener('click', menosVolumen1, false);
	masVolumen.addEventListener('click', masVolumen1, false);
	silenciar.addEventListener('click', silenciar1, false);

	//crear los manejadores de eventos para el resto de botones
	
}

//primer evento que sucede cuando la página ha cargado
window.addEventListener('load', iniciar, false);