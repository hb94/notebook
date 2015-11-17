var background = document.getElementById('background_can');
var backgroundCTX = background.getContext('2d');

var reX = 540;
var reY = 710;
var isPlaying = false;
	



var mouseX = 0;
var mouseY = 0;

function mouse(e){
	mouseX = e.pageX - document.getElementById('game').offsetLeft;
	mouseY = e.pageY - document.getElementById('game').offsetTop;
	document.getElementById('x').innerHTML = mouseX;
	document.getElementById('y').innerHTML = mouseY;
}

function startGame(){
	isPlaying = true;
	play();
	
}

function stoppGame(){
	isPlaying=false;
	
}
function play (){
	
	if (isPlaying){
		reX=mouseX;
		clearMainCan();
		backgroundCTX.fillStyle = "red";
		backgroundCTX.fillRect (reX , reY, 50,10);
		window.setTimeout(play,10);
		console.log(1);
		
	
		
	}
}

function clearMainCan(){
	backgroundCTX.clearRect(0,0,1080 ,720 );
}