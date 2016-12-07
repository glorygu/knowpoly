


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
var properties = {};
/**
**/

var enterOffset = getOffset(enter);
var cellWidth = enterOffset.width; 
var cellHeight = enterOffset.height; 



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
/**
Funcion para colocar las fichas de los jugadores en el tablero
*/
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
/**
funcion playerExists verifica si un jugador ya existe en el vector de activePlayers
**/
function playerExists(playerNumber){
	
	for (var i=0; i < activePlayers.length; i++ ){
		if(activePlayers[i].number == playerNumber){
			console.log('jale buchon');
			return true;
		}
	}

	return false;
}
/**
funcion getPlayer que retorna el objeto de player despues de haberlo buscado por su numero 
**/
function getPlayer(playerNumber){
	
	for (var i = 0; i < activePlayers.length; i++){
		if (activePlayers[i].number == playerNumber){
			return activePlayers[i];
		}
	}
}


/**
	Funcion para llenar el tablero
*/
function fillBoard(){
	var property = document.getElementById('property1');
	var dataProperty = properties.pop();
	var header = property.getElementsByClassName('header');
	var buttom = document.createElement('buttom');
	var txt = document.createTextNode(dataProperty.propertyBuy);
	buttom.appendChild(txt);
	header[0].appendChild(buttom);
	var body = property.getElementsByClassName('prop');
	body[0].style.backgroundImage = 'url(img/av_central.jpg)';
}


/**
		It shows on the board a random question.
**/

//Get a random number that will represent the question displayed. There are 63 questions.
var questionNumber =  Math.floor(Math.random() * 64);
showQuestion(questionNumber);
showOptions(questionNumber);
showGamePrice(questionNumber);
function showQuestion(questionNumber){

	//Get the question statement according to the number just generated.
	var questionStatement = this.questions['web'][questionNumber]['text'];
	 //Get the number of option that answers correctly the question.
	//The question will be shown in the div with id "questionPlace".
	var questionPlaceDiv  = document.getElementById("questionPlace");
	var questionTextElement = document.createElement("H1");
	questionTextElement.id = "questionStatement";
	//Create a text node which will be a child of div questionPlace.
	var questionTextNode =  document.createTextNode(questionStatement);
	questionTextElement.appendChild(questionTextNode);
	//Add that node  as a child of div questionPlace
	questionPlaceDiv.appendChild(questionTextElement);
}

function showOptions(questionNumber){
	//Get the possible options that may answer that question. Stored in a array.
	var it =1;
	var questionOptions = this.questions['web'][questionNumber]['options'];
	//The options will be shown in the div with id "optionsPlace".
	var optionsPlaceDiv  = document.getElementById("optionsPlace");
	//Iterate through options, and in each option we must create  a div with a radio button.
	for(var q in questionOptions){
		//Create input elements
		var inputRadioElement = document.createElement("INPUT");
		inputRadioElement.setAttribute("TYPE", "radio");
		inputRadioElement.setAttribute("NAME", "options");
		inputRadioElement.setAttribute("VALUE", it); it++;
		//Create a label which will contain the text and radio button
		var label = document.createElement("LABEL");
		//Create a text node which will be a child of the input type radio element.
		var optionTextNode = document.createTextNode(questionOptions[q]);
		inputRadioElement.appendChild(optionTextNode);
		//Append the input to the options div
		label.appendChild(inputRadioElement);
		label.appendChild(optionTextNode);
		optionsPlaceDiv.appendChild(label);
		var brElement = document.createElement("BR");
		optionsPlaceDiv.appendChild(brElement);
	}
	var buttonSelect = document.createElement("BUTTON");
	buttonSelect.id= "btnSelect";
	buttonSelect.setAttribute("onClick","verifyAnswer("+questionNumber+")");
	buttonSelect.appendChild(document.createTextNode("Seleccionar"));
	optionsPlaceDiv.appendChild(buttonSelect);
}


function showGamePrice(questionNumber){
	var gamePriceDiv  = document.getElementById("gamePrice");
	//Get difficulty
	var questionDifficulty = this.questions['web'][questionNumber]['difficulty'];
	var price = questionDifficulty * 200;
	var priceElement = document.createElement("H1");
	var priceNodeText =  document.createTextNode("Premio de la pregunta: " +price.toString()+"USD");
	priceElement.id= "priceText";
	priceElement.appendChild(priceNodeText);
	gamePriceDiv.appendChild(priceElement);
}

function verifyAnswer(questionNumber){

	var questionAnswer = this.questions['web'][questionNumber]['answer'];
	//Get user-selected answer
	var selectedAnswer =  document.querySelector('input[name = "options"]:checked').value;
	var correctness = 0;
	if(selectedAnswer === questionAnswer){
		alert("Opción correcta!");
		correctness = 1;
		//We will increase the player's liquid money

	}else{
		//we will decrease the player's loquid money
		alert("Opción incorrecta!");
	}
	var questionDifficulty = this.questions['web'][questionNumber]['difficulty'];
	var amount = questionDifficulty * 200;
	for (var p in this.activePlayers){ // Iterate through palyers array
				if(this.activePlayers[p].number ===  this.currentPlayer ){ //When we find our player
					  var playerLiquidCash =this.activePlayers[p].liquidCash; //Get his/her liquid cash
						if(correctness === 0 && playerLiquidCash- amount > 0){ //If the answer was wrong and he/she has money left (no negative cash)
							this.activePlayers[p].liquidCash = playerLiquidCash - amount/2 ; // Substract due amount.
						}else{
								if(correctness === 1){ //If aswer is right add due amount
									this.activePlayers[p].liquidCash = playerLiquidCash + amount;
								}else{ // If answer is wrong but if substracted he/she would have negative numbers, then reset it to zero.
									this.activePlayers[p].liquidCash = 0;
								}

						}
				}

	}

}




function Property(type, id, name, nextDirection, nextPropId, url, propertyBuy, propertySell, houseBuy, houseSell, h0, h1, h2, h3, h4, h5){ //h0, h1, h2 ... corresponden a los hospedajes de cada casa
	this.type = type; //property, enter, cave, hotChair
	this.id = id;
	this.name = name;
	this.img = url
	this.isSold = false;
	this.owner = 'Bank'
	if (type == "property"){
		this.countHouses = 0;
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
	this.nextDirection = nextDirection;
	this.nextPropId = nextPropId;
}

function fillProperties(){
	var enter = new Property('enter', 'enter', 'Costa Rica', 'right','property1' ,'url(img/img_costa_rica.jpg)');
	var property1 = new Property('property', 'property1', 'Avenida Central', 'right','property2','url(img/av_central2.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
	this.properties['enter'] = enter;
	this.properties['property1'] = property1;

	var property2 = new Property('property', 'property2', 'Volcán Arenal', 'right','property3','url(img/costaRica2.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
	this.properties['property2'] = property2;



		var property3 = new Property('property', 'property3', 'Teatro Nacional', 'right','property4','url(img/costaRica3.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
		this.properties['property3'] = property3;



			var property4 = new Property('property', 'property4', 'Zarcero', 'right','hotChair1','url(img/costaRica4.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
			this.properties['property4'] = property4;

			var hotChair1 = new Property('hotChair', 'hotChair1', 'Silla Caliente', 'down','property6');
			this.properties['hotChair1']=hotChair1;

				var property5 = new Property('property', 'property5', 'Esferas de Costa Rica','up', 'enter', 'url(img/costaRica5.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
				this.properties['property5'] = property5;



					var property6 = new Property('property', 'property6', 'Museo de los niños', 'down','property8','url(img/costaRica6.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
					this.properties['property6'] = property6;



						var property7 = new Property('property', 'property7', 'Universidad de Costa Rica', 'up', 'property5', 'url(img/costaRica7.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
						this.properties['property7'] = property7;



							var property8 = new Property('property', 'property8', 'Estadio Nacional', 'down','url(img/costaRica8.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
							this.properties['property8'] = property8;

                            var cave = new Property('cave', 'cave', 'Cueva de la icnoransia', 'left', 'property12');
                            this.properties['cave']= cave;
                            
								var property9 = new Property('property', 'property9', 'Fortín de Heredia', 'left', 'hotChair2', 'url(img/costaRica9.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
								this.properties['property9'] = property9;

								var hotChair2 = new Property('hotChair', 'hotChair2', 'Silla Caliente', 'up','property7');
								this.properties['hotChair2']=hotChair2;

									var property10 = new Property('property', 'property10', 'Monumento Nacional', 'left', 'property9', 'url(img/costaRica10.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
									this.properties['property10'] = property10;


										var property11 = new Property('property', 'property11', 'Casa de Gobierno', 'left', 'property10', 'url(img/costaRica11.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
										this.properties['property11'] = property11;


											var property12 = new Property('property', 'property12', 'Cerro Chirripó', 'left', 'propery11', 'url(img/costaRica12.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
											this.properties['property12'] = property12;



}



/**
	Funcion para llenar el tablero
*/
function fillBoard(){
	//metodo para llenar tablero
	var mainDiv = document.getElementsByClassName('prueba');
	var elements = mainDiv[0].childNodes;
	var index = 0;
	var bodyDiv;
	var element;
	var buttom;
	var txt, header, bodyDiv, bottomDiv;

	while(index < elements.length){
		element = elements[index];
		if(this.properties.hasOwnProperty(element.id) == true){

			if(this.properties[element.id].type == 'property'){
				buttom = document.createElement('buttom');
				txt = document.createTextNode(this.properties[element.id].propertyBuy);
				buttom.className = 'propertyBuy';
				buttom.disabled = true;
				buttom.onClick = buyProperty;
				buttom.appendChild(txt);
				header = element.getElementsByClassName('header');
				header[0].appendChild(buttom);
				buttom = document.createElement('buttom');
				txt = document.createTextNode(this.properties[element.id].propertySell);
				buttom.className = 'propertySell';
				buttom.disabled = true;
				buttom.appendChild(txt);
				header[0].appendChild(buttom);
				var p = document.createElement('p');
				txt = document.createTextNode('Peaje: '+this.properties[element.id].h0);
				p.appendChild(txt);
				p.className = 'peaje';
				header[0].appendChild(p);
				bodyDiv = element.getElementsByClassName('prop');
				bodyDiv[0].innerHTML = '<span><p class = "title">' + this.properties[element.id].name + '</p></span>';
				bodyDiv[0].style.backgroundImage = this.properties[element.id].img;
				drawBottomTable(element);
				
			}else{
				element.style.backgroundImage = this.properties[element.id].img;
			}

		}
		++index;
	}

}


//dibujar la parte inferior de la tabla que tiene cada propiedad
function drawBottomTable(element){
	var buttonDiv = element.getElementsByClassName('bottom');
	var txt, button;
	for(var c = 0; c < 6; ++c){
		button = document.createElement('buttom');
		button.disabled = true;
		button.className = 'buttomHouseU';
		txt = document.createTextNode(this.properties[element.id].houseBuy);
		button.appendChild(txt);
		buttonDiv[0].appendChild(button);

	}
	for(var i = 0; i < 6; ++i){
		var string = 'h'+i;
		button = document.createElement('buttom');
		button.disabled = true;
		button.className = 'buttomHouse';
		txt = document.createTextNode((this.properties[element.id])[string]);
		button.appendChild(txt);
		buttonDiv[0].appendChild(button);
	}
}



/**
Agregar jugadores
**/
/**
Funcion que se llama cuando se le da click a algun div de colores. Se crea el objeto del jugador y se mete en el array de activePlayers
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
 				player.position = "enter";
 				var imgHeight =  Math.floor(enter.offsetHeight/5);
     			var imgWidth = Math.floor(enter.offsetWidth/3);
     			player.top = (enter.offsetParent.offsetTop+(imgHeight*activePlayers.length));
     			player.left = (enter.offsetParent.offsetLeft); 
 				activePlayers.push(player);
 				player.color=colors[playerNumber-1];
 				player.ownedProperties = new Array();
 				placePlayer(player);
 				//loadColorSelector(player.name);
 				
 				
 			}
 		}
 	}
	startGame();
 	fallBox();
 }

function none(){
//cambiar
}
//metodo para habilitar y desahibilitar botones de compra y venta, tanto para propiedades como casas
function fallBox(){

	this.activePlayer.position = 'property1';
	var representationProperty = document.getElementById(this.activePlayer.position);
	var dataProperty = this.properties[this.activePlayer.position];
	var button;

	if(dataProperty.isSold == false){

		if(this.activePlayer.liquidCash > dataProperty.propertyBuy){
			button = representationProperty.getElementsByClassName('propertyBuy');
			button[0].style.opacity = '0.99';
			button[0].disabled = false;
		}
	}else{
		
		this.activePlayer.ownedProperties.push('property1');
		paintBox();


	}
}



// metodo para comprar una propiedad
function buyProperty(){
	
	
	if(this.properties.hasOwnProperty(this.activePlayer.position) == true){
		var property = this.properties[this.activePlayer.position];
		if(this.activePlayer.liquidCash > property.propertyBuy){
			var representationProperty = document.getElementById(this.activePlayer.position);
			var button = representationProperty.getElementsByClassName('propertyBuy');
			button.style.opacity = '0.30';
			button.disabled = 'true';
			representationProperty.style.backgroundColor = this.activePlayer.color;
			this.properties[this.activePlayer.position].isSold = true;
			this.activePlayer.ownedProperties.push(this.activePlayer.position);
			this.activePlayer.liquidCash -= property.propertyBuy;
			this.activePlayer.richness += property.propertyBuy;
			paintBox();
			var paragraphOne = representationProperty.getElementById("player"+this.activePlayer.number + 'Cash').innerText = this.activePlayer.liquidCash;
			var paragraphOne = representationProperty.getElementById("player"+this.activePlayer.number + 'Richness').innerText = this.activePlayer.richness;
		}
		
	}
		
	
}



//metodo para poder pintar las propiedad  del lugar que tiene el turno
function paintBox(){


	var button;
	var buttonBuy;
	var buttonH;

	for(var c = 0; c < this.activePlayer.ownedProperties.length; ++c){
		representationProperty = document.getElementById(this.activePlayer.ownedProperties[c]);
		dataProperty = this.properties[this.activePlayer.ownedProperties[c]];

		if(dataProperty.countHouses == 0){
			button = representationProperty.getElementsByClassName('propertySell');
			button[0].style.opacity = '0.99';
			button[0].style.backgroundColor = '#7EB5EB';
			button[0].style.border = '1px solid'
			button[0].disabled = false;
		}
		paintButton(representationProperty, dataProperty);
	}
}


//pintar botones de la tabla que tiene cada propiedad
function paintButton(representationProperty,dataProperty){
	buttonBuy = representationProperty.getElementsByClassName('buttomHouseU');
	if(dataProperty.countHouses != 0){
		buttonBuy[dataProperty.countHouses].style.opacity = '0.99';
		buttonBuy[dataProperty.countHouses].disabled = false;
	}
	buttonBuy[dataProperty.countHouses].innerText = dataProperty.houseSell;
	buttonBuy[dataProperty.countHouses].style.textDecoration = 'line-through';
	buttonBuy[dataProperty.countHouses+1].style.opacity = '0.99';
	buttonBuy[dataProperty.countHouses+1].disabled = false;
	if(dataProperty.countHouses == 4){
		buttonBuy[dataProperty.countHouses+1].backgroundColor = 'red';
	}
	buttonH = representationProperty.getElementsByClassName('buttomHouse');
	buttonH[dataProperty.countHouses].style.opacity = '0.99';
}

fillProperties();
fillBoard();

/***** variables de la jugada actual *****/
var activePlayer; 
/**** funcion auxiliar para obtener una propiedad por su id ****/

function getPropertyById(propId){
	
	for (var i = 0; i < properties.length; i++){
		
		if(properties[i].id == propId){
			
			return properties[i];
		}
	}
}
/***** inicia juego ***/
function startGame(){
	
	activePlayer = activePlayers[0];
}
/***** parte rodar dado ****/

/**** Funcion para lanzar el dado ****/
function rollDice(){
			var randomNumber = Math.floor((Math.random() * 6) + 1);
			console.log(randomNumber);
			var diceFace = document.getElementById("diceFace");
			diceFace.src = "img/d"+randomNumber+".png";
			var rollButton = document.getElementById("diceRollButton");
			rollButton.style.display="none";
			movePlayer(activePlayer, randomNumber);
			return randomNumber; 
		}


/***** mover jugadores *****/
function movePlayer(player, numberOfCells){
	var actualPosition = getPropertyById(player.position);
	for (var i = 0; i < numberOfCells; i++){
		
		moveNext(player, actualPosition.nextDirection);
		actualPosition = getPropertyById(actualPosition.nextDirection);
	}
	
	
	
}

/***** funcion que permite que el jugador (activo) se mueva una casilla y se mueve en la direccion indicada por la posicion en la que esta***/
function moveNext(player, direction){
	switch(direction){
		case 'right': 
			player.left += enter.offsetWidth;
	        player.img.style.left = (player.left-60)+"px";
	        player.img.style.transitionDuration = "1s";	
        break;
        case 'left': 
        	player.left -=enter.offsetWidth;
	        player.img.style.left = (player.left-30)+"px";
	        player.img.style.transitionDuration = "1s";
        break; 
        case 'up': 
        	player.top -= enter.offsetHeight;
        	player.img.style.top = (player.top)+"px";
        	player.img.style.transitionDuration = "1s";
    	break; 
    	case 'down':
    		player.top += enter.offsetHeight;
        	player.img.style.top = (player.top)+"px";
        	player.img.style.transitionDuration = "1s";
		break;
	        
	}
	
	
}