var mapDiv;
var score;

var start;
var pause;
var high;
var medium;
var slow;

//the row and col of the grid
var rows = 20;
var cols = 30;

//the size of each grid
var size = 20;

//the container of grids
var mapGrid = [];

window.onload = function(){
	init();
}

function init() {
	mapDiv = document.getElementById("map");
	score = document.getElementById("board");
	start = document.getElementsByClassName("start")[0];
	pause = document.getElementsByClassName("pause")[0];
	high = document.getElementsByClassName("high")[0];
	medium = document.getElementsByClassName("medium")[0];
	slow = document.getElementsByClassName("slow")[0];
	
	start.onclick = function() {
		methodStart();
	}
	
	pause.onclick = function() {
		methodPause();
	}
	
	high.onclick = function() {
		methodHigh();
	}
	
	medium.onclick = function() {
		methodMedium();
	}
	
	slow.onclick = function() {
		methodSlow();
	}
	
	drawMap(rows, cols);
	drawSnake(len);
	drawFood();
}

//draw the map
function drawMap(rowNum, colNum) {
	//set the width and height of map
	mapDiv.style.width = size * colNum + "px";
	mapDiv.style.height = size * rowNum + "px";
	
	//draw grid by row
	for (var i = 0; i < rowNum; i++) {
		//store the grids by array
		var rowGrid = [];
		
		//create the element
		var rowDiv = document.createElement("div");
		
		//add element to map
		mapDiv.appendChild(rowDiv);

		//draw grid by col
		for (var j = 0; j < colNum; j++) {
			//create the mini grid
			var colDiv = document.createElement("div");
			colDiv.className = "miniGrid";
			
			//add it in the div
			rowDiv.appendChild(colDiv);
			rowGrid.push(colDiv);
		}
		mapGrid.push(rowGrid);
	}
}
