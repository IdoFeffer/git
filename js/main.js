'use strict'

const gBalls = document.querySelectorAll('.ball')
for (var i = 0; i < gBalls.length; i++){
    gBalls[i].style.backgroundColor = getRandomColor()
}


function onBallClick(elBall, maxDiameter){
    var ballSize = elBall.offsetWidth
    console.log(ballSize);
    const randomSize = getRandomInt(20, 60) 
    ballSize  += randomSize
    if (ballSize > maxDiameter) {
        ballSize = 100
    }
    elBall.innerText = ballSize
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.style.backgroundColor = getRandomColor()
}

function onBall3Click(){
    var ball1 = gBalls[0]
    var ball2 = gBalls[1]

    console.dir(ball1)
    var colorBall1 = ball1.style.backgroundColor
    var tempWidth = ball1.offsetWidth
    console.log(colorBall1);

    ball1.style.backgroundColor = ball2.style.backgroundColor
    ball1.style.width = ball2.offsetWidth + 'px'
    ball1.style.height = ball2.offsetWidth + 'px'
    ball1.innerText = ball1.offsetWidth

    ball2.style.backgroundColor = colorBall1
    ball2.style.width = tempWidth + 'px'
    ball2.style.height = tempWidth + 'px'
    ball2.innerText = ball2.offsetWidth
}