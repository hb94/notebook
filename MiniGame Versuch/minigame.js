var background = document.getElementById('background_can');
var backgroundCTX = background.getContext('2d');
var mainCan = document.getElementById('main_can');
var mainCanCTX = mainCan.getContext('2d');

var reX = 540;
var reY = 710;
var isPlaying = false;
var ZielRechtecke = new Array();
	
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
	zieleErstellen();
	playLoop();
	
}

function stoppGame(){
	isPlaying=false;
	
}
function playLoop (){
	
	if (isPlaying){
				
		reX=mouseX;
		clearMainCan();
		backgroundCTX.fillStyle = "red";
		backgroundCTX.fillRect (reX , reY, 50,10);
		window.setTimeout(playLoop,10);
		
		
	
		
	}
}
function ZielRechteck(){
	this.width= 20;
	this.height= 20;
	this.draw = function(xK,yK){
		mainCanCTX.fillStyle = "black";
		mainCanCTX.fillRect (xK,yK, this.width, this.height);
	};
}  
function zieleErstellen(){
	
	for (var yCount = 0; yCount < 10;yCount++){
		for (var i = 10; i <= 1050; i+=25){   /*breite der bisherigen Rechtecke plus Abstand; abgezogen von der maximalen Breite */
			
			var newRechteck = new ZielRechteck();
			var xKS = 17+(i-10)/25*(newRechteck.width+5);
			var yKS = 10+yCount* (newRechteck.height+5);
			ZielRechtecke[i] = newRechteck;
			ZielRechtecke[i].draw(xKS,yKS);
			console.log(1);
		};
	}
}
function clearMainCan(){
	backgroundCTX.clearRect(0,0,1080 ,720 );
}