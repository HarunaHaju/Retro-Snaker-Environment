var len = 3;
var snakeBody = [];
var headX = 2;
var headY = 0;

var timer;

//the move direction
var direction = "right";

function drawSnake(length) {
	for (var i = 0; i < length; i++) {
		mapGrid[0][i].className = "miniGrid snake";
		snakeBody.push(mapGrid[0][i]);
	}
}

function snakeMove(speed) {
	clearInterval(timer);
	timer = setInterval(function(){
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
		//refresh new position
		snakeBody.shift().className = "miniGrid";
		mapGrid[headY][headX].className = "miniGrid snake";
		snakeBody.push(mapGrid[headY][headX]);
	},speed);
}
