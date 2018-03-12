var mapDiv = document.getElementById("map");
var score = document.getElementById("board");

var start = document.getElementsByClassName("start")[0];
var pause = document.getElementsByClassName("pause")[0];
var high = document.getElementsByClassName("high")[0];
var medium = document.getElementsByClassName("medium")[0];
var slow = document.getElementsByClassName("slow")[0];

//the row and col of the grid
var rows = 20;
var cols = 30;

//the size of each grid
var size = 20;

//the container of grids
var mapGrid = [];
init();

function init() {
	drawMap(rows, cols);
}

//draw the map
function drawMap(rowNum, colNum) {
	
}
