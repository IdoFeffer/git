'use strict'

var ball1Size = 100

function onBallClick(event){
    var elBall = document.querySelector('.ball1')
    ball1Size = ball1Size + getRandomInt(20, 60)
    if (ball1Size > 400) ball1Size = 100
    
    elBall.innerText = ball1Size
    elBall.style.width = ball1Size + 'px'
    elBall.style.height = ball1Size + 'px'
    elBall.style.backgroundColor = getRandomColor()
}