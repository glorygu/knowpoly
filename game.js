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
var properties = {};
var currentProperty = "property1"; // id de la propiedad en la que está el jugador en turno(Falta)
var currentPlayer; //id del jugador actual
var arrayIndexesPlayer1 = new Array(); //para manejar el el id de la propiedad que pertenece a cada jugador
var arrayIndexesPlayer2 = new Array();
var arrayIndexesPlayer3 = new Array();
var arrayIndexesPlayer4 = new Array();

/**
**/

var enterOffset = getOffset(enter);
var cellWidth = enterOffset.width;
var cellHeight = enterOffset.height;

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




function Property(type, id, name, url, propertyBuy, propertySell, houseBuy, houseSell, h0, h1, h2, h3, h4, h5 ){ //h0, h1, h2 ... corresponden a los hospedajes de cada casa
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

}

function fillProperties(){
	var enter = new Property('enter', 'enter', 'Costa Rica', 'url(img/img_costa_rica.jpg)');
	var property1 = new Property('property', 'property1', 'Avenida Central', 'url(img/av_central2.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
	this.properties['enter'] = enter;
	this.properties['property1'] = property1;

	var property2 = new Property('property', 'property2', 'Volcán Arenal', 'url(img/costaRica2.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
	this.properties['property2'] = property2;



		var property3 = new Property('property', 'property3', 'Teatro Nacional', 'url(img/costaRica3.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
		this.properties['property3'] = property3;



			var property4 = new Property('property', 'property4', 'Zarcero', 'url(img/costaRica4.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
			this.properties['property4'] = property4;



				var property5 = new Property('property', 'property5', 'Esferas de Costa Rica', 'url(img/costaRica5.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
				this.properties['property5'] = property5;



					var property6 = new Property('property', 'property6', 'Museo de los niños', 'url(img/costaRica6.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
					this.properties['property6'] = property6;



						var property7 = new Property('property', 'property7', 'Universidad de Costa Rica', 'url(img/costaRica7.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
						this.properties['property7'] = property7;



							var property8 = new Property('property', 'property8', 'Estadio Nacional', 'url(img/costaRica8.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
							this.properties['property8'] = property8;


								var property9 = new Property('property', 'property9', 'Fortín de Heredia', 'url(img/costaRica9.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
								this.properties['property9'] = property9;


									var property10 = new Property('property', 'property10', 'Monumento Nacional', 'url(img/costaRica10.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
									this.properties['property10'] = property10;


										var property11 = new Property('property', 'property11', 'Casa de Gobierno', 'url(img/costaRica11.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
										this.properties['property11'] = property11;


											var property12 = new Property('property', 'property12', 'Cerro Chirripó', 'url(img/costaRica12.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 500  );
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
	var txt, headerDiv, bodyDiv, bottomDiv;

	while(index < elements.length){
		element = elements[index];
		if(this.properties.hasOwnProperty(element.id) == true){

			if(this.properties[element.id].type == 'property'){
				buttom = document.createElement('buttom');
				txt = document.createTextNode(this.properties[element.id].propertyBuy);
				buttom.className = 'propertyBuy';
				buttom.disabled = true;
				buttom.appendChild(txt);
				header = element.getElementsByClassName('header');
				header[0].appendChild(buttom);
				buttom = document.createElement('buttom');
				txt = document.createTextNode(this.properties[element.id].propertySell);
				buttom.className = 'propertySell';
				buttom.disabled = true;
				buttom.appendChild(txt);
				header[0].appendChild(buttom);
				p = document.createElement('p');
				txt = document.createTextNode('Peaje: '+this.properties[element.id].h0);
				p.appendChild(txt);
				p.className = 'peaje';
				header[0].appendChild(p);
				bodyDiv = element.getElementsByClassName('prop');
				bodyDiv[0].innerHTML = '<span><p class = "title">' + this.properties[element.id].name + '</p></span>';
				bodyDiv[0].style.backgroundImage = this.properties[element.id].img;
				bottomDiv = element.getElementsByClassName('bottom');
				for(var c = 0; c < 6; ++c){
					buttom = document.createElement('buttom');
					buttom.disabled = true;
					buttom.className = 'buttomHouseU';
					txt = document.createTextNode(this.properties[element.id].houseBuy);
					buttom.appendChild(txt);
					bottomDiv[0].appendChild(buttom);

				}
				for(var i = 0; i < 6; ++i){
					var string = 'h'+i;
					buttom = document.createElement('buttom');
					buttom.disabled = true;
					buttom.className = 'buttomHouse';
					txt = document.createTextNode((this.properties[element.id])[string]);
					buttom.appendChild(txt);
					bottomDiv[0].appendChild(buttom);
				}
			}else{
				element.style.backgroundImage = this.properties[element.id].img;
			}

		}
		++index;
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
				player.liquidCash = 800;
				player.richness = 800;
				document.getElementById("name"+playerNumber).innerHTML = player.name;
				//player.position = "enter";
				var paragraph = document.getElementById("name"+playerNumber).nextSibling;
				var txt = document.createTextNode(player.liquidCash + '/' + player.richness);
				paragraph.appendChild(txt);
				var imgHeight =  Math.floor(enter.offsetHeight/5);
    			var imgWidth = Math.floor(enter.offsetWidth/3);
    			player.top = (enter.offsetParent.offsetTop+(imgHeight*this.activePlayers.length));
    			player.left = (enter.offsetParent.offsetLeft);
				this.activePlayers.push(player);

				loadColorSelector(player.name);


			}
		}
	}

	//PRUEBA PARA COMPRA Y VENTA
	fallBox();

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



//metodo para habilitar y desahibilitar botones de compra y venta, tanto para propiedades como casas
function fallBox(){
	this.currentPlayer = activePlayers[0];
	var representationProperty = document.getElementById(this.currentProperty);
	var dataProperty = this.properties[this.currentProperty];
	var buttom;
	var buttomsBuy;
	var buttomsH;

	if(dataProperty.isSold == false){

		if(this.currentPlayer.liquidCash > dataProperty.propertyBuy){
			buttom = representationProperty.getElementsByClassName('propertyBuy');
			buttom[0].style.opacity = '0.99';
			buttom[0].disabled = false;
		}
	}else{

		this.arrayIndexesPlayer1.push('property1');
		paintBox();


	}
}


function paintBox(){


	var propertiesIndexes;
	var representationProperty = document.getElementById(this.currentProperty);
	var dataProperty = this.properties[this.currentProperty];
	var buttom;
	var buttomsBuy;
	var buttomsH;

	switch(this.currentPlayer.number){
		case 1:
			propertiesIndexes = this.arrayIndexesPlayer1;
			break;
		case 2:
			propertiesIndexes = this.arrayIndexesPlayer2;
			break;
		case 3:
			propertiesIndexes = this.arrayIndexesPlayer3;
			break;
		default:
			propertiesIndexes = this.arrayIndexesPlayer4;
			break;
	}

	for(var c = 0; c < propertiesIndexes.length; ++c){
		representationProperty = document.getElementById(propertiesIndexes[c]);
		dataProperty = this.properties[propertiesIndexes[c]];

		if(dataProperty.countHouses == 0){
			buttom = representationProperty.getElementsByClassName('propertySell');
			buttom[0].style.opacity = '0.99';
			buttom[0].style.backgroundColor = '#7EB5EB';
			buttom[0].style.border = '1px solid'
			buttom[0].disabled = false;
			buttomsBuy = representationProperty.getElementsByClassName('buttomHouseU');
			buttomsBuy[1].style.opacity = '0.99';
			buttomsBuy[1].disabled = false;
			buttomsBuy[0].innerText = dataProperty.houseSell;
			buttomsBuy[0].style.textDecoration = 'line-through';
			buttomsH = representationProperty.getElementsByClassName('buttomHouse');
			buttomsH[0].style.opacity = '0.99';
		}else if(dataProperty.countHouses < 4){
			buttomsBuy = representationProperty.getElementsByClassName('buttomHouseU');
			buttomsBuy[dataProperty.countHouses].style.opacity = '0.99';
			buttomsBuy[dataProperty.countHouses].disabled = false;
			buttomsBuy[dataProperty.countHouses].innerText = dataProperty.houseSell;
			buttomsBuy[dataProperty.countHouses].style.textDecoration = 'line-through';
			buttomsBuy[dataProperty.countHouses+1].style.opacity = '0.99';
			buttomsBuy[dataProperty.countHouses+1].disabled = false;
			buttomsH = representationProperty.getElementsByClassName('buttomHouse');
			buttomsH[dataProperty.countHouses].style.opacity = '0.99';
		}else if(dataProperty.countHouses == 4){
			buttomsBuy = representationProperty.getElementsByClassName('buttomHouseU');
			buttomsBuy[dataProperty.countHouses].style.opacity = '0.99';
			buttomsBuy[dataProperty.countHouses].disabled = false;
			buttomsBuy[dataProperty.countHouses].innerText = dataProperty.houseSell;
			buttomsBuy[dataProperty.countHouses].style.textDecoration = 'line-through';
			buttomsBuy[dataProperty.countHouses+1].style.opacity = '0.99';
			buttomsBuy[dataProperty.countHouses+1].backgroundColor = 'red';
			buttomsBuy[dataProperty.countHouses+1].disabled = false;
			buttomsH = representationProperty.getElementsByClassName('buttomHouse');
			buttomsH[dataProperty.countHouses].style.opacity = '0.99';
		}


	}


}

fillProperties();
fillBoard();
