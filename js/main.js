"use strict"

const gBalls = document.querySelectorAll(".ball")
for (var i = 0; i < gBalls.length; i++) {
  gBalls[i].style.backgroundColor = getRandomColor()
}

function onBallClick(elBall, maxDiameter) {
  var ballSize = elBall.offsetWidth
  console.log(ballSize)
  const randomSize = getRandomInt(20, 60)
  ballSize += randomSize
  if (ballSize > maxDiameter) {
    ballSize = 100
  }
  elBall.innerText = ballSize
  elBall.style.width = ballSize + "px"
  elBall.style.height = ballSize + "px"
  elBall.style.backgroundColor = getRandomColor()
}

function onBall3Click(elBall) {
// elBall.style.width = (elBall.offsetWidth + 20) + 'px'
// elBall.style.height = (elBall.offsetWidth + 20) + 'px'

  var ball1 = gBalls[0]
  var ball2 = gBalls[1]

  var colorBall1 = ball1.style.backgroundColor
  var tempWidth = ball1.offsetWidth

  ball1.style.backgroundColor = ball2.style.backgroundColor
  ball1.style.width = ball2.offsetWidth + "px"
  ball1.style.height = ball2.offsetWidth + "px"
  ball1.innerText = ball1.offsetWidth

  ball2.style.backgroundColor = colorBall1
  ball2.style.width = tempWidth + "px"
  ball2.style.height = tempWidth + "px"
  ball2.innerText = ball2.offsetWidth
}

function onBall4Click() {
  // var balls = document.querySelectorAll('.ball')
  var ball1 = gBalls[0]
  var ball2 = gBalls[1]

  var tempWidth = ball1.offsetWidth

  ball1.style.width = ball1.offsetWidth
  ball2.style.width = ball2.offsetWidth

  var reduceSize = getRandomInt(20, 60)

  ball1.style.width = tempWidth - reduceSize + "px"
  ball1.style.height = tempWidth - reduceSize + "px"
  var tempBallSize = tempWidth - reduceSize
  console.log(tempBallSize)

  ball2.style.width = tempWidth - reduceSize + "px"
  ball2.style.height = tempWidth - reduceSize + "px"

  if (tempBallSize <= 100) {
    ball1.style.width = 100 + "px"
    ball1.style.height = 100 + "px"
    ball1.innerText = ball1.offsetWidth
  }
  if (tempBallSize <= 100) {
    ball2.style.width = 100 + "px"
    ball2.style.height = 100 + "px"
    ball2.innerText = ball2.offsetWidth
  }
}

function onBall5Click() {
  var elBody = document.querySelector(".ball5")
  elBody.style.backgroundColor = getRandomColor()
}

function onBall6Click() {
  // location.reload() // First solustion

  // Second solustion
  var backgroundColor = document.querySelector(".ball5")
  var balls = document.querySelectorAll(".ball")

  balls.forEach((ball) => {
    ball.style.width = 100 + "px"
    ball.style.height = 100 + "px"
    ball.innerText = 100
  })
  backgroundColor.style.backgroundColor = "black"
}

var intervalId
// var ball6 = document.querySelector(".ball6")
var count = 0

// ball6.addEventListener("mouseenter", onBall6Hover)
// ball6.addEventListener("mouseleave", onBall6Leave)v

function onBall6Hover() {
  intervalId = setInterval(() => {
    if (count >= 10) {
      clearInterval(intervalId)
      return
    }
    var balls = document.querySelectorAll(".ball")
    onBallClick(balls[0])
    onBallClick(balls[1])
    onBall3Click()
    onBall4Click()
    count++
  }, 2000)
}

function onBall6Leave(){
  clearInterval(intervalId)
}