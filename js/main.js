'use strict'

// var ball1Size = 100

function onBallClick(elBall, maxDiameter){
    var ballSize = elBall.offsetWidth
    console.log(ballSize);
    // var ballWidth = elBall.style.width
    // var ballHeight = elBall.style.height
    const randomSize = getRandomInt(20, 60) 
    // console.log(randomSize);
    // console.log(elBall);
    // // var elBall = document.querySelector('.ball1')
    ballSize  += randomSize
    // // ballWidth +=  randomSize
    // // ballHeight += randomSize
    if (ballSize > maxDiameter) {
        ballSize = 100
        // ballWidth = 100
        // ballHeight = 100
    }
    elBall.innerText = ballSize
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.style.backgroundColor = getRandomColor()
}

