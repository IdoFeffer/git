'use strict'

var ball1Size = 100

function onBallClick(event){
    var elBall = document.querySelector('.ball1')
    ball1Size = ball1Size + 50
    
    elBall.innerText = ball1Size
    elBall.style.width = ball1Size + 'px'
    elBall.style.height = ball1Size + 'px'
}