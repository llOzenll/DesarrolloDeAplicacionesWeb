class Snake{
    constructor(x,y,width,length,color){
        this.x=(x==null)?0:x;
        this.y=(x==null)?0:y;
        this.width=(x==null)?0:width;
        this.length=(x==null)?0:length;
    }
}

// MOVEMENT
let dir = 'none';
let space = document.getElementById('menu');

document.addEventListener('keydown', movement);
function movement(event){

    if(event.key === 'w' && space.style.display == 'none' || event.key === 'ArrowUp'&& space.style.display == 'none' || event.key === 'W'&& space.style.display == 'none'){
        dir = 'up';
    }
    if(event.key === 's' && space.style.display == 'none'|| event.key === 'ArrowDown' && space.style.display == 'none'|| event.key === 'S'&& space.style.display == 'none'){
        dir = 'down';
    }
    if(event.key === 'a' && space.style.display == 'none'|| event.key === 'ArrowLeft'&& space.style.display == 'none' || event.key === 'A'&& space.style.display == 'none'){
        dir = 'left';
    }
    if(event.key === 'd' && space.style.display == 'none'|| event.key === 'ArrowRight'&& space.style.display == 'none' || event.key === 'D'&& space.style.display == 'none'){
        dir = 'right';
    }
    if(event.key === ' ' || event.code === 'Space' || event.keyCode === 32){
        if(space.style.display == 'block'){
            space.style.display = 'none';
        }
        else if(space.style.display == 'none'){
            space.style.display = 'block';
            cancelAnimationFrame(redraw);
            clearTimeout(run);
        }
    }   
}




//objects
let snakegame = new Snake(140, 65, 11, 10);
let appleobj = new Snake(120, 70, 11, 10);
let speed = 0.2;

var ctx = null, canvas = null;

let image0 = new Image();
let image1 = new Image();
let image2 = new Image();
let image3 = new Image();
image0.src="pngs/snake-head.jpg";
image1.src="pngs/snake-head1.png";
image2.src="pngs/snake-head2.png";
image3.src="pngs/snake-head3.png";

let apple=new Image();
apple.src="pngs/apple.png";



//bodySnake
let snake = [];
let i;

function body(){
    i = 0;
    if(eated > i){
        for(i; i < eated; i++){
            snake.push(snake[i] = {
                x:snakegame.x+2.5,
                y:snakegame.y+9,
                width: 6,
                height:7.5
            });
        }
        if(dir == 'up'      && eated > 0)   snake[i].y -= speed;
        if(dir == 'down'    && eated > 0)   snake[i].y += speed;
        if(dir == 'left'    && eated > 0)   snake[i].x -= speed;
        if(dir == 'right'   && eated > 0)   snake[i].x += speed;
    }
}



//fps
function draw(ctx){
    let gradiente = ctx.createLinearGradient(0,0,0,canvas.height);
    gradiente.addColorStop(0,'#539d0c');
    gradiente.addColorStop(1,'#539d0c');
    ctx.fillStyle = gradiente;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    if(dir=='none')ctx.drawImage(image0, 140, 65, snakegame.width, snakegame.length);

    if(dir == 'up')ctx.drawImage(image0, snakegame.x, snakegame.y, snakegame.width, snakegame.length);
    if(dir == 'down')ctx.drawImage(image1, snakegame.x, snakegame.y, snakegame.width, snakegame.length);
    if(dir == 'left')ctx.drawImage(image2, snakegame.x, snakegame.y, snakegame.width, snakegame.length);
    if(dir == 'right')ctx.drawImage(image3, snakegame.x, snakegame.y, snakegame.width, snakegame.length);

    ctx.drawImage(apple, appleobj.x, appleobj.y, appleobj.width, appleobj.length);
    randomApple();

    body();
    ctx.fillStyle = 'black';
    if(eated > 0) ctx.fillRect(snake[0].x, snake[0].y+.5, snake[0].width, snake[0].height)
}

function act(){
    if(snakegame.x > 300) snakegame.x = -18, snake[0].x = -15.5;
    if(snakegame.x < -18) snakegame.x = 300, snake[0].x = 302.3;
    if(snakegame.y > 150) snakegame.y = -18, snake[0].y = -9;
    if(snakegame.y < -18) snakegame.y = 150, snake[0].y = 159;
 
    if(dir == 'up')    snakegame.y -= speed;
    if(dir == 'down')  snakegame.y += speed;
    if(dir == 'left')  snakegame.x -= speed; 
    if(dir == 'right') snakegame.x += speed;
}

function run(){
    setTimeout(run,17);
    act();
    score()
}

function redraw(){
    requestAnimationFrame(redraw);
    draw(ctx);
}




//apples
let eated = 0;
let e;

function randomApple(){
    let appleX  = appleobj.x +7;
    let appleX1 = appleobj.x -7;
    let appleY  = appleobj.y +7;
    let appleY1 = appleobj.y -7;

    if(snakegame.x < appleX && snakegame.x > appleX1 && snakegame.y < appleY && snakegame.y > appleY1){
        appleobj.x = Math.floor(Math.random() * 280);
        appleobj.y = Math.floor(Math.random() * 130);

        speed += 0.2;
        eated +=1;
        e = true;
    }else e = false;
}




//score
let num = 0;

function score(){
    let score0 = document.getElementById('scoreText');
    if(e){
        score0.innerHTML = 'score:' + (num+=1);
    }
}


//start
function start(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    run();
    redraw();
}

window.addEventListener('load', start, false);