let xSpeed, ySpeed

let vpH = window.innerHeight;
let vpW = window.innerWidth;
let box = document.getElementById('container');
// console.log(box)


let startingH = Math.random() * vpH;
let startingW = Math.random() * vpW;
let xPos = startingW;
let yPos = startingH
xSpeed = 5;
ySpeed = 5;


// box.style.left = startingW + 'px';
// box.style.top = startingH + 'px';

console.log(vpW, vpH)

var position = function(){
    box.style.left = xPos + 'px'
    box.style.top = yPos + 'px'
    // console.log(xPos, yPos);
// console.log(xPos, yPos);
}

const move = () => {
    xPos += xSpeed;
    yPos += ySpeed
}

const moveReverse = () => {
    if( (xPos + 50) >= vpW){
        xSpeed = -xSpeed;
    } else if(xPos <= 0){
        xSpeed = -xSpeed
    }
    
    if(yPos + 50 >= vpH){
        ySpeed = -ySpeed;
    } else if(yPos <= 0){
        ySpeed = -ySpeed
    }
}


const movement = ()=>{
    move()
    position();
    moveReverse()
    
    // console.log(xPos, yPos);
    requestAnimationFrame(movement);

    // console.log(ID)
}

movement()





 