function methodStart() {
	if (isSnakeRunning)
		return;
	snakeMove(100);
}

function methodPause() {
	if (isSnakeRunning) {
		isSnakeRunning = false;
		clearInterval(timer);
	}
}

function methodHigh() {
	if (isSnakeRunning)
		return;
	snakeMove(50);
}

function methodMedium() {
	if (isSnakeRunning)
		return;
	snakeMove(100);
}

function methodSlow() {
	if (isSnakeRunning)
		return;
	snakeMove(200);
}
