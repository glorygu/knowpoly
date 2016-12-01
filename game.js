/**
Variables globales
**/

var imgWidth = 80;
var imgHeight = 80;
var activePlayers = [];
var cells = [];
var availableColors = ["red","yellow","green","blue"];
var addingPlayers = 'true';
var upperSpace  = document.getElementById("upperSpace");
var enter =  document.getElementById("enter");
var questionsPool = []; 
var properties = new Array();

/**
**/

var enterOffset = getOffset(enter);
var cellWidth = enterOffset.width; 
var cellHeight = enterOffset.height; 

/**
 Propiedades

**/

function Property(type, id, name, url, propertyBuy, propertySell, houseBuy, houseSell, h0, h1, h2, h3, h4, h5 ){ //h0, h1, h2 ... corresponden a los hospedajes de cada casa 
	this.type = type; //property, enter, cave, hotChair
	this.id = id;
	this.name = name;
	this.img = url;
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

function fillProperties(){
	var enter = new Property('enter', 'enter', 'Costa Rica', 'url(img/img_costa_rica.jpg)');
	var property1 = new Property('property', 'property1', 'Avenida Central', 'url(img/av_central.png)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
	this.properties.push(enter);
	this.properties.push(property1);
}



/**
	Funcion para llenar el tablero
*/
function fillBoard(){
	
	/*var property = document.getElementById('property1');
	var dataProperty = properties.pop();
	var header = property.getElementsByClassName('header');
	
	
	*/
	var mainDiv = document.getElementsByClassName('prueba');
	var elements = mainDiv[0].childNodes;
	var indicator = false;
	var index = 0;
	var bodyDiv;
	var secondIndex = 0;
	var element;
	var buttom;
	var txt, headerDiv, bodyDiv, bottomDiv;
	
	while(indicator == false && index < elements.length && secondIndex < this.properties.length){
		element = elements[index];
		if(element.id == this.properties[secondIndex].id){
			
			if(this.properties[secondIndex].type == 'property'){
				buttom = document.createElement('buttom');
				txt = document.createTextNode(this.properties[secondIndex].propertyBuy);
				buttom.appendChild(txt);
				header = element.getElementsByClassName('header');
				header[0].appendChild(buttom);
				buttom = document.createElement('buttom');
				txt = document.createTextNode(this.properties[secondIndex].propertySell);
				buttom.appendChild(txt);
				header[0].appendChild(buttom);
				p = document.createElement('p');
				txt = document.createTextNode('Peaje: '+this.properties[secondIndex].h0);
				p.appendChild(txt);
				p.className = 'peaje';
				header[0].appendChild(p);
				bodyDiv = element.getElementsByClassName('prop');
				bodyDiv[0].innerHTML = '<scan><p>' + this.properties[secondIndex].name + '</p></scan>';
				bodyDiv[0].style.backgroundImage = this.properties[secondIndex].img;
				bottomDiv = element.getElementsByClassName('bottom');
				for(var c = 0; c < 6; ++c){
					buttom = document.createElement('buttom');
					buttom.className = 'buttomHouse';
					txt = document.createTextNode(this.properties[secondIndex].houseBuy);
					buttom.appendChild(txt);
					bottomDiv[0].appendChild(buttom);
					
				}
				for(var i = 0; i < 6; ++i){
					var string = 'h'+i;
					buttom = document.createElement('buttom');
					buttom.className = 'buttomHouse';
					txt = document.createTextNode((this.properties[secondIndex])[string]);
					buttom.appendChild(txt);
					bottomDiv[0].appendChild(buttom);
				}
			}else{
				element.style.backgroundImage = this.properties[secondIndex].img;
			}
			
			++secondIndex;
		}
		++index;
	}
	/*
	buttom.appendChild(txt);
	header[0].appendChild(buttom);
	var body = property.getElementsByClassName('prop');
	body[0].style.backgroundImage = 'url(img/av_central.png)';
	*/
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
				document.getElementById("name"+playerNumber).innerHTML = player.name;
				//player.position = "enter";
				var imgHeight =  Math.floor(enter.offsetHeight/5);
    			var imgWidth = Math.floor(enter.offsetWidth/3);
    			player.top = (enter.offsetParent.offsetTop+(imgHeight*activePlayers.length));
    			player.left = (enter.offsetParent.offsetLeft); 
				activePlayers.push(player);
				
				loadColorSelector(player.name);
				
				
			}
		}
	}
}

function loadColorSelector(name){
	var divSelectColor = document.createElement('div');
	var msg = document.createTextNode(name+' , seleccione un color');
	divSelectColor.appendChild(msg);
	var upperSpaceOffset = getOffset(upperSpace);
	divSelectColor.setAttribute("width",upperSpaceOffset.width - 20);
	divSelectColor.setAttribute("height",upperSpaceOffset.height - 20);
	divSelectColor.id = "colorSelector";
	for(var i  = 0; i < availableColors.length; i++){
		var img = document.createElement('img');
		img.src = ('img/'+availableColors[i]+'.png');
		img.setAttribute("height",upperSpaceOffset.height-80);
		img.setAttribute("width",(upperSpaceOffset.width/4)-40);
		img.setAttribute("class", "players");
		img.id=availableColors[i];
		//img.onclick = function (availableColors[i] ){ alert("Ha escogido el color " + availableColors[i]); color =availableColors[i]; }
		img.onclick = selectColor;
		divSelectColor.appendChild(img);
	}
	upperSpace.appendChild(divSelectColor);
}
function selectColor ( ){

	if(addingPlayers){
		var color = this.id;
	if (color != null){
		activePlayers[activePlayers.length-1].color = color;
		activePlayers[activePlayers.length-1].img = this;
		removeFromArray(availableColors, color);
		this.parentNode.style.display = 'none';
		var enterOffset = getOffset(enter);
		this.setAttribute("height",Math.floor(enter.offsetHeight/5));
		this.setAttribute("width",Math.floor(enter.offsetWidth/3));
		this.style.left = enterOffset.left + enterOffset.width/3;
		this.style.top = enterOffset.top + ((enterOffset.height/5) * activePlayers.length); 
		this.onclick = none; //cqmbiar
		enter.appendChild(this);
		console.log(activePlayers);
		/*var colorSelector = document.getElementById("colorSelector");
		console.log(colorSelector);
		colorSelector.style.display = 'none';*/
	}
	}
}

function none(){
//cambiar
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

function move( ){
    var player = activePlayers[activePlayers.length-1];
    //moveRight(player,5);
    moveDown(player,3);
    
    
}
function moveRight(player, numCells){
    
    for (var i = 0; i < numCells; i++){
        player.left += enterOffset.width;
        console.log(player.img);
        player.img.style.left = (player.left)+"px";
        player.img.style.transitionDuration = "1s";
    }
    
}

function moveLeft(player, numCells){
    
    for (var i = 0; i < numCells; i++){
        player.left -= enterOffset.width;
        player.img.style.left = (player.left)+"px";
        player.img.style.transitionDuration = "1s";
    }
    
}

function moveDown(player, numCells){
    
    for (var i = 0; i < numCells; i++){
        player.top += enterOffset.height;
        player.img.style.top = (player.top)+"px";
        player.img.style.transitionDuration = "1s";
    }
    
}

function moveUp(player, numCells){
    
    for (var i = 0; i < numCells; i++){
        player.top -= enterOffset.height;
        player.img.style.top = (player.top)+"px";
        player.img.style.transitionDuration = "1s";
    }
    
}

fillProperties();
fillBoard();