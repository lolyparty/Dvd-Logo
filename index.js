let xSpeed, ySpeed

let vpH = window.innerHeight;
let vpW = window.innerWidth;
let box = document.getElementById('container');
// console.log(box)


let startingH = (Math.random() * vpH) - 75;
let startingW = (Math.random() * vpW) - 150;
if(startingW < 0){
    startingW = 0;
}
if(startingH < 0){
    startingH = 0
}
let xPos = startingW;
let yPos = startingH
xSpeed = 3;
ySpeed = 3;


console.log(startingW, startingH)

var position = function(){
    box.style.left = xPos + 'px'
    box.style.top = yPos + 'px'
}

const move = () => {
    xPos += xSpeed;
    yPos += ySpeed
}

const color = () => {
   return Math.floor((Math.random() * 250))
}

const colorChange = () => {
     
    const paths = document.querySelectorAll('path' + ',' + 'polygon');
    // console.log(color())
    paths.forEach((cur)=>{
        cur.style.fill = `rgb(${color()},${color()},${color()})`;
    })
}

const moveReverse = () => {
    if(xPos + 150 >= vpW){
        xSpeed = -xSpeed;
        colorChange();
    } else if(xPos <= 0){
        xSpeed = -xSpeed
        // console.log(xPos)
        colorChange()
    }
    
    if(yPos + 70 >= vpH){
        ySpeed = -ySpeed;
        colorChange()
    } else if(yPos <= 0){
        ySpeed = -ySpeed
        // console.log(yPos)
        colorChange()
    }
}


const movement = ()=>{
    position()
    move()
    moveReverse()
    
    // console.log(xPos, yPos);
    requestAnimationFrame(movement);
}

movement()





 