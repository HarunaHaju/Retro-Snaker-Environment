var foodX = 0;
var foodY = 0;

function drawFood() {
	do{
		foodX = randomGenerate(0, cols);
		foodY = randomGenerate(0, rows);
	} while (mapGrid[foodY][foodX].className === "miniGrid snake");
	mapGrid[foodY][foodX].className = "miniGrid food";
}

//random generate number in [min,max)
function randomGenerate(min, max) {
	return parseInt(Math.random() * (max - min)) + min;
}