var len = 3;
var snakeBody = [];
var headX = 2;
var headY = 0;

var timer;

//the move direction
var direction = "right";

var isSnakeRunning;

function drawSnake(length) {
	for (var i = 0; i < length; i++) {
		mapGrid[0][i].className = "miniGrid snake";
		snakeBody.push(mapGrid[0][i]);
	}
}

function snakeMove(speed) {
	clearInterval(timer);
	isSnakeRunning = true;
	timer = setInterval(function(){
		snakeRun();
	},speed);
}

function snakeRun() {
	switch (direction) {
			case "up":
				headY--;
				break;
			case "down":
				headY++;
				break;
			case "right":
				headX++;
				break;
			case "left":
				headX--;
				break;
			default:
				break;
	}
		//judge wheter the snake is dead
	if (headX < 0 || headX >= cols || headY < 0 || headY >= rows || mapGrid[headY][headX].className == "miniGrid snake") {
		var seg = confirm("Game Over!");
		location.reload();
			
		//clear the timer
		clearImmediate(timer);
	}
	//refresh new position
	mapGrid[headY][headX].className = "miniGrid snake";
	snakeBody.push(mapGrid[headY][headX]);
		
	//judge wheter get food
	if (headX == foodX && headY == foodY) {
		drawFood();
		score++;
		scoreHtml.innerHTML = score;
		
		//if win
		if (score >= cols * rows - 3){
			var seg = confirm("You Win!");
			location.reload();
			
			//clear the timer
			clearImmediate(timer);
		}
	} else {
		snakeBody.shift().className = "miniGrid";
	}
}

function snakeTurnLeft() {
	if(direction == "right")
		return;
	direction = "left";
}

function snakeTurnRight() {
	if(direction == "left")
		return;
	direction = "right";
}

function snakeTurnUp() {
	if(direction == "down")
		return;
	direction = "up";
}

function snakeTurnDown() {
	if(direction == "up")
		return;
	direction = "down";
}