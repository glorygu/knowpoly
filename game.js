/**
Variables globales
**/

var imgWidth = 80;
var imgHeight = 80;
var activePlayers = [];
var cells = [];
var colors = ["red","green","blue","yellow"];
var addingPlayers = 'true';
var upperSpace  = document.getElementById("upperSpace");
var enter =  document.getElementById("enter");
var questionsPool = []; 
var board = document.getElementById("board");

/**
**/

var enterOffset = getOffset(enter);
var cellWidth = enterOffset.width; 
var cellHeight = enterOffset.height; 

/**
 Propiedades

**/

function Property(type, id, propertyBuy, propertySell, houseBuy, houseSell, h0, h1, h2, h3, h4, h5 ){ //h0, h1, h2 ... corresponden a los hospedajes de cada casa 
	this.type = type; //property, enter, cave, hotChair
	this.id = id; 
	if (type == "property"){

		this.propertyBuy = propertyBuy;
		this.propertySell = propertySell;
		this.houseBuy = houseBuy; 
		this.houseSell = houseSell;
		this.h0 = h0;
		this.h1 = h1; 
		this.h2 = h2; 
		this.h3 = h3; 
		this.h4 = h4; 
		this.h5 = h5;
	} 

}


/**
Objeto player contiene la informacion del jugador, como su numero, nombre, puntaje, dinero liquido
**/
/**
function Player(number, name, color, liquidCash, richness, position ){
	this.number = number;
	this.name = name; 
	this.color = color; 
	this.liquidCash = liquidCash; 
	this.richness = richness; 
	this.position = position; 
	this.img = document.createElement('img');
	this.img.src = ('img/'+color+'.png');
	this.img.setAttribute("height",imgHeight);
    this.img.setAttribute("width",imgWidth);
}
**/

/**
Funciones auxiliares
**/

function removeFromArray(srcArray, item){

	var index = srcArray.indexOf(item);
	
	if (index!=-1){

		srcArray.splice(index, 1);
	}
	

}
 

function getOffset(el) {
  el = el.getBoundingClientRect();
  
  return {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY,
	height: el.height,
	width: el.width
  }
}
/**
Agregar jugadores 
**/
function addPlayer(playerNumber){
	var alreadyExists = playerExists(playerNumber);
	console.log(alreadyExists);
	if(!alreadyExists){
		if (addingPlayers){
			if(activePlayers.length < 4){
				var player = {};
				player.name = prompt("Por favor ingrese el nombre para el jugador "+playerNumber);
				player.number = playerNumber;
				player.liquidCash = 650;
				player.richness = 650;
				document.getElementById("name"+playerNumber).innerHTML = player.name + "<p id=\"player"+playerNumber+"Cash\">" + player.liquidCash + "</p>/" +  "<p id=\"player"+playerNumber+"Richness\">" + player.richness +"</p>";
				//player.position = "enter";
				var imgHeight =  Math.floor(enter.offsetHeight/5);
    			var imgWidth = Math.floor(enter.offsetWidth/3);
    			player.top = (enter.offsetParent.offsetTop+(imgHeight*activePlayers.length));
    			player.left = (enter.offsetParent.offsetLeft); 
				activePlayers.push(player);
				player.color=colors[playerNumber-1];
				placePlayer(player);
				//loadColorSelector(player.name);
				
				
			}
		}
	}
}


function placePlayer(player){
	var img = document.createElement('img');
	img.src = ('img/'+player.color+'.png');
	img.setAttribute("class", "playerToken");
	img.id=player.color;
	imgHeight = img.offsetHeight; 
	imgWidth = img.offsetWidth;
	console.log("eh" + imgWidth +"enter top " + enter.offsetParent.offsetTop + "this top" +(enter.offsetParent.offsetTop+(imgHeight*(activePlayers.length))));
	//img.style.top = (enter.offsetParent.offsetTop+(imgHeight*(activePlayers.length))) ;//+ 'px';
    //img.style.left = (enter.offsetParent.offsetLeft+imgWidth) + 'px';
	player.img = img;
	enter.appendChild(img);
	
}

function playerExists(playerNumber){
	
	for (var i=0; i < activePlayers.length; i++ ){
		if(activePlayers[i].number == playerNumber){
			console.log('jale buchon');
			return true;
		}
	}

	return false;
}

function getPlayer(playerNumber){
	
	for (var i = 0; i < activePlayers.length; i++){
		if (activePlayers[i].number == playerNumber){
			return activePlayers[i];
		}
	}
}
/**
Mover jugadores
**/


function movePlayer(playerNumber, numberOfCells){
	var thisPlayer = getPlayer(playerNumber);


}


function calculateSequence (startingCell, numberOfCells)
{

}

function moveFullBoard( ){
    //var player = activePlayers[activePlayers.length-1];
    //moveRight(player,5);
    // setTimeout(function(){}, 1000);
    //moveDown(player,3);
    //moveLeft(player,5);
    //moveUp(player,3);
    for (var i = 0; i < activePlayers.length; i++){
    	var player = activePlayers[i];
        moveRight(player,5);
    	
    }
    setTimeout(function(){console.log("stop wait a minute, julio, get the stretch")}, 10000);
    for (var i = 0; i < activePlayers.length; i++){
    	var player = activePlayers[i];
        moveDown(player,3);
    	
    }
    for (var i = 0; i < activePlayers.length; i++){
    	var player = activePlayers[i];
        moveLeft(player,5);
    	
    }
    setTimeout(function(){console.log("stop wait a minute, julio, get the stretch")}, 10000);
    for (var i = 0; i < activePlayers.length; i++){
    	var player = activePlayers[i];
        moveUp(player,3);
    	
    }
    
}
function move( ){
    var player = activePlayers[activePlayers.length-1];
    //moveRight(player,5);
    moveDown(player,3);
    
    
}
function moveRight(player, numCells){
    
    for (var i = 0; i < numCells; i++){
        player.left += enter.offsetWidth;
        
        player.img.style.left = (player.left-60)+"px";
        player.img.style.transitionDuration = "10s";
          setTimeout(function(){console.log("stop wait a minute, julio, get the stretch")}, 3000);
    }
    
}

function moveLeft(player, numCells){
    
    for (var i = 0; i < numCells; i++){
        player.left -=enter.offsetWidth;
        player.img.style.left = (player.left-30)+"px";
        player.img.style.transitionDuration = "1s";
        setTimeout(function(){}, 1000);
    }
    
}

function moveDown(player, numCells){
    
    for (var i = 0; i < numCells; i++){
        player.top += enter.offsetHeight;
        player.img.style.top = (player.top)+"px";
        player.img.style.transitionDuration = "10s";
        setTimeout(function(){}, 1000);
    }
    
}

function moveUp(player, numCells){
    
    for (var i = 0; i < numCells; i++){
        player.top -= enter.offsetHeight;
        player.img.style.top = (player.top)+"px";
        player.img.style.transitionDuration = "1s";
        setTimeout(function(){}, 1000);
    }
    
}
