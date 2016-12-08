/**
Variables globales
**/
var imgWidth = 80;
var imgHeight = 80;
var activePlayers = [];
var cells = [];
var colors = ["red","green","blue","yellow"];
var addingPlayers = true;
var upperSpace  = document.getElementById("upperSpace");
var enter =  document.getElementById("enter");
var questionsPool = []; 
var board = document.getElementById("board");
var properties = {};
var currentPlayer = {};
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

function removeFromArray(srcArray, item) {

    var index = srcArray.indexOf(item);

    if (index != -1) {

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
	//imgHeight = img.offsetHeight; 
	//imgWidth = img.offsetWidth;
	//console.log("eh" + imgWidth +"enter top " + enter.offsetParent.offsetTop + "this top" +(enter.offsetParent.offsetTop+(imgHeight*(this.activePlayers.length))));
	//img.style.top = (enter.offsetParent.offsetTop+(imgHeight*(activePlayers.length))) ;//+ 'px';

    //img.style.left = (enter.offsetParent.offsetLeft+imgWidth) + 'px';
    player.img = img;
    enter.appendChild(img);

}
/**
funcion playerExists verifica si un jugador ya existe en el vector dethis.activePlayers
**/

function playerExists(playerNumber) {

    for (var i = 0; i < this.activePlayers.length; i++) {
        if (this.activePlayers[i].number == playerNumber) {
            console.log('jale buchon');
            return true;
        }
    }

    return false;
}
/**
funcion getPlayer que retorna el objeto de player despues de haberlo buscado por su numero
**/


//var properties = new Array();


function getPlayer(playerNumber) {

    for (var i = 0; i < this.activePlayers.length; i++) {
        if (this.activePlayers[i].number == playerNumber) {
            return this.activePlayers[i];
        }
    }
}



/**
		It shows on the board a random question.
**/

//Get a random number that will represent the question displayed. There are 63 questions.


//this.currentPlayer = 1; // for  test purposes

var questionNumber = Math.floor(Math.random() * 64);
showQuestion(questionNumber);
showOptions(questionNumber);
showQuestionPrize(questionNumber);

function showQuestion(questionNumber) {

    //Get the question statement according to the number just generated.
    var questionStatement = this.questions['web'][questionNumber]['text'];
    //Get the number of option that answers correctly the question.
    //The question will be shown in the div with id "questionPlace".
    var questionPlaceDiv = document.getElementById("questionPlace");
    var questionTextElement = document.createElement("H1");
    questionTextElement.id = "questionStatement";
    //Create a text node which will be a child of div questionPlace.
    var questionTextNode = document.createTextNode(questionStatement);
    questionTextElement.appendChild(questionTextNode);
    //Add that node  as a child of div questionPlace
    questionPlaceDiv.appendChild(questionTextElement);

}

function showOptions(questionNumber) {
    //Get the possible options that may answer that question. Stored in a array.
    var it = 1;
    var questionOptions = this.questions['web'][questionNumber]['options'];
    //The options will be shown in the div with id "optionsPlace".
    var optionsPlaceDiv = document.getElementById("optionsPlace");
    //Iterate through options, and in each option we must create  a div with a radio button.
    for (var q in questionOptions) {
        //Create input elements
        var inputRadioElement = document.createElement("INPUT");
        inputRadioElement.setAttribute("TYPE", "radio");
        inputRadioElement.setAttribute("NAME", "options");
        inputRadioElement.setAttribute("VALUE", it);
        it++;
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
    buttonSelect.id = "btnSelect";
    buttonSelect.setAttribute("onClick", "verifyAnswer(" + questionNumber + ")");
    buttonSelect.appendChild(document.createTextNode("Seleccionar"));
    optionsPlaceDiv.appendChild(buttonSelect);
}


function showQuestionPrize(questionNumber) {
    var gamePriceDiv = document.getElementById("gamePrice");
    //Get difficulty
    var questionDifficulty = this.questions['web'][questionNumber]['difficulty'];
    var price = questionDifficulty * 200;
    var priceElement = document.createElement("H1");
    var priceNodeText = document.createTextNode("Premio de la pregunta: " + price.toString() + "USD");
    priceElement.id = "priceText";
    priceElement.appendChild(priceNodeText);
    gamePriceDiv.appendChild(priceElement);
}

function verifyAnswer(questionNumber) {
	//Iterate through activeplayers.
	for(var x in this.activePlayers){
		alert(this.activePlayers[x].number);

	}
    var questionAnswer = this.questions['web'][questionNumber]['answer'];
    //Get user-selected answer
    var selectedAnswer = document.querySelector('input[name = "options"]:checked').value;
    var correctness = 0;
    if (selectedAnswer == questionAnswer) {
        alert("Opción correcta!");
        correctness = 1;

    } else {
        alert("Opción incorrecta!");
    }
    var questionDifficulty = this.questions['web'][questionNumber]['difficulty'];
    var amount = questionDifficulty * 200;
    var updatedCash = null;
		var updatedRichness = null;

    for (var p in this.activePlayers) { // Iterate through palyers array
        if (this.activePlayers[p].number == this.currentPlayer["number"]) { //When we find our player
					var playerLiquidCash = this.activePlayers[p].liquidCash; //Get his/her liquid cash
					var playerRichness = this.activePlayers[p].richness; //Get his/her liquid cash

            if (correctness === 0 && playerLiquidCash > amount / 2) { //If the answer was wrong and he/she has money left (no negative cash)
                updatedCash = playerLiquidCash - (amount / 2);
								updatedRichness = playerRichness - (amount / 2);
                //Updates the view
            } else {
                if (correctness === 1) { //If aswer is right add due amount
                    updatedCash = playerLiquidCash + amount;
										updatedRichness = playerRichness + amount;

                } else { // If answer is wrong but if substracted he/she would have negative numbers, then reset it to zero.
                    updatedCash = 0;
										updatedRichness = playerRichness - amount/2; //TODO SEE LOGIC, IF  WE NEED TO CHEKCK FOR MONEY IN RICHNESS
                }

            }
						this.activePlayers[p].liquidCash = updatedCash;
						this.activePlayers[p].richness = updatedRichness; // Substract due amount.
						updateLiquidCash(updatedCash, this.currentPlayer["number"]);
						updateRichness(updatedRichness, this.currentPlayer["number"]);
        }
    }
}

/*This funcion ONLY UPDATES in  the view, not the logic*/
function updateLiquidCash(cash, player) {
    if (player > 0 && player < 5) {
        //Get the player's cash html element
        var playerCashElement = document.getElementById("player" + player + "Cash");

        for (var prop in this.activePlayers) {
            if (this.activePlayers[prop]['number'] === player) { //We found the player, now let-s update his cash in the view
                playerCashElement.innerText = cash; //Updates player's cash
                break; // Lo puse por que no puedo parar el for in. (feel free to get rid of it haha)
            }
        }
    }
}


function updateRichness(cash, player) {
    if (player > 0 && player < 5) {
        //Get the player's cash html element
        var playerRichnessElement = document.getElementById("player" + player + "Richness");

        for (var prop in this.activePlayers) {
            if (this.activePlayers[prop]['number'] === player) { //We found the player, now let-s update his cash in the view
                playerRichnessElement.innerText = cash; //Updates player's cash
                break; // Lo puse por que no puedo parar el for in. (feel free to get rid of it haha)
            }
        }
    }
}




function Property(type, id, name, nextDirection, nextPropId, url, propertyBuy, propertySell, houseBuy, houseSell, h0, h1, h2, h3, h4, h5) { //h0, h1, h2 ... corresponden a los hospedajes de cada casa
    this.type = type; //property, enter, cave, hotChair
    this.id = id;
    this.name = name;
    this.img = url
    this.isSold = false;
    this.owner = 'Bank'
    if (type == "property") {
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

function fillProperties() {
    var enter = new Property('enter', 'enter', 'Costa Rica', 'right', 'property1', 'url(img/img_costa_rica.jpg)');
    var property1 = new Property('property', 'property1', 'Avenida Central', 'right', 'property2', 'url(img/av_central2.jpg)', 50, 45, 50, 25, 5, 15, 45, 125, 250, 400);
    this.properties['enter'] = enter;
    this.properties['property1'] = property1;

    var property2 = new Property('property', 'property2', 'Volcán Arenal', 'right', 'property3', 'url(img/costaRica2.jpg)', 60, 55, 50, 25, 6, 20, 55, 150, 300, 480);
    this.properties['property2'] = property2;



    var property3 = new Property('property', 'property3', 'Teatro Nacional', 'right', 'property4', 'url(img/costaRica3.jpg)', 75, 70, 75, 40, 8, 25, 70, 200, 400, 640);
    this.properties['property3'] = property3;



    var property4 = new Property('property', 'property4', 'Zarcero', 'right', 'hotChair1', 'url(img/costaRica4.jpg)', 85, 75, 75, 40, 9, 25, 80, 225, 450, 720);
    this.properties['property4'] = property4;

    var hotChair1 = new Property('hotChair', 'hotChair1', 'Silla Caliente', 'down', 'property6');
    this.properties['hotChair1'] = hotChair1;
    var property5 = new Property('property', 'property5', 'Esferas de Costa Rica', 'up', 'enter', 'url(img/costaRica5.jpg)', 105, 95, 100, 50, 11, 35, 100, 275, 550, 880);
    this.properties['property5'] = property5;



    var property6 = new Property('property', 'property6', 'Museo de los niños', 'down', 'property8', 'url(img/costaRica6.jpg)', 115, 105, 100, 50, 12, 35, 110, 300, 600, 960);
    this.properties['property6'] = property6;



    var property7 = new Property('property', 'property7', 'Universidad de Costa Rica', 'up', 'property5', 'url(img/costaRica7.jpg)', 135, 120, 150, 75, 15, 45, 135, 375, 750, 1200);
    this.properties['property7'] = property7;



    var property8 = new Property('property', 'property8', 'Estadio Nacional', 'down', 'url(img/costaRica8.jpg)', 145, 130, 150, 75, 16, 50, 145, 400, 800, 1280);
    this.properties['property8'] = property8;

    var cave = new Property('cave', 'cave', 'Cueva de la icnoransia', 'left', 'property12');
    this.properties['cave'] = cave;

    var property9 = new Property('property', 'property9', 'Fortín de Heredia', 'left', 'hotChair2', 'url(img/costaRica9.jpg)', 160, 145, 175, 90, 18, 55, 160, 450, 900, 1440);
    this.properties['property9'] = property9;

    var hotChair2 = new Property('hotChair', 'hotChair2', 'Silla Caliente', 'up', 'property7');
    this.properties['hotChair2'] = hotChair2;

    var property10 = new Property('property', 'property10', 'Monumento Nacional', 'left', 'property9', 'url(img/costaRica10.jpg)', 170, 155, 175, 90, 20, 60, 180, 500, 1000, 1600);
    this.properties['property10'] = property10;


    var property11 = new Property('property', 'property11', 'Casa de Gobierno', 'left', 'property10', 'url(img/costaRica11.jpg)', 190, 170, 200, 100, 23, 70, 205, 575, 1150, 1840);
    this.properties['property11'] = property11;

    var property12 = new Property('property', 'property12', 'Cerro Chirripó', 'left', 'propery11', 'url(img/costaRica12.jpg)', 200, 180, 200, 100, 25, 75, 225, 625, 1250, 2000);


    this.properties['property12'] = property12;



}



/**
	Funcion para llenar el tablero
*/
function fillBoard() {
    //metodo para llenar tablero
    var mainDiv = document.getElementsByClassName('prueba');
    var elements = mainDiv[0].childNodes;
    var index = 0;
    var bodyDiv;
    var element;
    var button;
    var txt, header, bodyDiv, buttonDiv;

    while (index < elements.length) {
        element = elements[index];
        if (this.properties.hasOwnProperty(element.id) == true) {

            if (this.properties[element.id].type == 'property') {
                button = document.createElement('button');
                txt = document.createTextNode(this.properties[element.id].propertyBuy);
                button.className = 'propertyBuy';
                button.disabled = true;
                button.onClick = buyProperty;
                button.appendChild(txt);
                header = element.getElementsByClassName('header');
                header[0].appendChild(button);
                button = document.createElement('button');
                txt = document.createTextNode(this.properties[element.id].propertySell);
                button.className = 'propertySell';
                button.disabled = true;
                button.appendChild(txt);
                header[0].appendChild(button);
                var p = document.createElement('p');
                txt = document.createTextNode('Peaje: ' + this.properties[element.id].h0);
                p.appendChild(txt);
                p.className = 'peaje';
                header[0].appendChild(p);
                bodyDiv = element.getElementsByClassName('prop');
                bodyDiv[0].innerHTML = '<span><p class = "title">' + this.properties[element.id].name + '</p></span>';
                bodyDiv[0].style.backgroundImage = this.properties[element.id].img;
                drawBottomTable(element);

            } else {
                element.style.backgroundImage = this.properties[element.id].img;
            }

        }
        ++index;
    }
    putStatusButton();
}


//dibujar la parte inferior de la tabla que tiene cada propiedad
function drawBottomTable(element) {
    var buttonDiv = element.getElementsByClassName('bottom');
    var txt, button;
    for (var c = 0; c < 6; ++c) {
        button = document.createElement('button');
        button.disabled = true;
        button.className = 'buttonHouseU';
        txt = document.createTextNode(this.properties[element.id].houseBuy);
        button.appendChild(txt);
        buttonDiv[0].appendChild(button);

    }
    for (var i = 0; i < 6; ++i) {
        var string = 'h' + i;
        button = document.createElement('button');
        button.disabled = true;
        button.className = 'buttonHouse';
        txt = document.createTextNode((this.properties[element.id])[string]);
        button.appendChild(txt);
        buttonDiv[0].appendChild(button);
    }
}



/**
Agregar jugadores
**/
/**
Funcion que se llama cuando se le da click a algun div de colores. Se crea el objeto del jugador y se mete en el array dethis.activePlayers
**/

function addPlayer(playerNumber){
	var alreadyExists = playerExists(playerNumber);
	console.log(alreadyExists);
	if(!alreadyExists){
		if (addingPlayers){
			if(activePlayers.length < 4){
				var name = prompt("Por favor ingrese el nombre para el jugador "+playerNumber);
				if (name != null){
					console.log("entre papillos");
					var player = {};
					player.name = name;
					player.number = playerNumber;
					player.liquidCash = 650;
					player.richness = 650;
					document.getElementById("name"+playerNumber).innerHTML = player.name + "<p id=\"player"+playerNumber+"Cash\">" + player.liquidCash + "</p>/" +  "<p id=\"player"+playerNumber+"Richness\">" + player.richness +"</p>";
	 				player.position = "enter";
	 				var imgHeight =  Math.floor(enter.offsetHeight/5);
	     			var imgWidth = Math.floor(enter.offsetWidth/3);
	     			player.top = (enter.offsetParent.offsetTop+(imgHeight*this.activePlayers.length));
	     			player.left = (enter.offsetParent.offsetLeft); 
	 				player.color=colors[playerNumber-1];
	 				player.ownedProperties = new Array();
	 				this.activePlayers.push(player);
	 				console.log(this.activePlayers + "come on lil marco");
	 				placePlayer(player);
	 				//loadColorSelector(player.name);
	 				if(this.activePlayers.length==2)
	 				{//si hay mas de dos jugadores 
						enableStartButton();
	 				}
				}
 			}
 		}
 	}
 	//fallBox();
 }

function none(){
//cambiar
}

//metodo para habilitar y desahibilitar botones de compra y venta, tanto para propiedades como casas
function fallBox() {


    this.activePlayer.position = 'property1';
    var representationProperty = document.getElementById(this.activePlayer.position);
    var dataProperty = this.properties[this.activePlayer.position];
    var button;

    if (dataProperty.isSold == false) {

        if (this.activePlayer.liquidCash > dataProperty.propertyBuy) {
            button = representationProperty.getElementsByClassName('propertyBuy');
            button[0].style.opacity = '0.99';
            button[0].disabled = false;
        }
    } else {

        this.activePlayer.ownedProperties.push('property1');
        paintBox();


    }
}

//funcion para colocar boton terminar en tablero y hacerlo funcional
function putStatusButton() {
    var space = document.getElementById('lowerSpace');
    var button = document.createElement('button');
		var divButton = document.createElement('div');
		divButton.setAttribute("class","center");
    var txt = document.createTextNode('Iniciar partida');
    button.id = 'statusButton';
    button.appendChild(txt);
		divButton.appendChild(button);

    space.appendChild(divButton);

}



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
			this.properties[this.activePlayer.position].owner = this.activePlayer.number;
			this.activePlayer.ownedProperties.push(this.activePlayer.position);
			this.activePlayer.liquidCash -= property.propertyBuy;
			this.activePlayer.richness += property.propertyBuy;
			paintBox();
			var paragraphOne = representationProperty.getElementById("player"+this.activePlayer.number + 'Cash').innerText = this.activePlayer.liquidCash;
			var paragraphOne = representationProperty.getElementById("player"+this.activePlayer.number + 'Richness').innerText = this.activePlayer.richness;
		}

	}


}


function selectAction(){

	if(this.properties.hasOwnProperty(this.activePlayer.position) == true){
		var property = this.properties[this.activePlayer.position];
		if(property.owner != this.activePlayer.number){

		}
	}

	paintBox();
}

//pagar hospedaje
function payLodgement(){
	if(this.activePlayer.liquidCash < this.properties[this.activePlayer.position]){
		//colocar mensaje que debe vender
		var button = document.getElementById('statusGame');
		button.innerText = 'Terminar partida';
		button.style.opacity = '0.30';
		button.disabled = true;
	}else{
		var property = this.properties[this.activePlayer.position];
		var lodgement = 'h' + property.countHouses;
		this.activePlayer.liquidCash -= property[lodgement];
		var againstPlayer = property.owner;
		var indicator = false;
		var index = 0;
		var idPlayer = "";
		var cash = 0;

		while(index < this.activePlayers.length && indicator == false){
			if(this.activePlayers[index].number == property.num){
				cash = property[lodgement] + this.activePlayers[index].liquidCash;
				indicator = true;
				updateLiquidCash(cash,  this.activePlayers[index]);
			}
			++index;
		}
		updateLiquidCash(this.activePlayer.liquidCash, this.activePlayer);
	}
}



//metodo para poder pintar las propiedad  del lugar que tiene el turno
function paintBox() {


    var button;
    var buttonBuy;
    var buttonH;

    for (var c = 0; c < this.activePlayer.ownedProperties.length; ++c) {
        representationProperty = document.getElementById(this.activePlayer.ownedProperties[c]);
        dataProperty = this.properties[this.activePlayer.ownedProperties[c]];

        if (dataProperty.countHouses == 0) {
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
function paintButton(representationProperty, dataProperty) {
    buttonBuy = representationProperty.getElementsByClassName('buttonHouseU');
    if (dataProperty.countHouses != 0) {
        buttonBuy[dataProperty.countHouses].style.opacity = '0.99';
        buttonBuy[dataProperty.countHouses].disabled = false;
    }
    buttonBuy[dataProperty.countHouses].innerText = dataProperty.houseSell;
    buttonBuy[dataProperty.countHouses].style.textDecoration = 'line-through';
    buttonBuy[dataProperty.countHouses + 1].style.opacity = '0.99';
    buttonBuy[dataProperty.countHouses + 1].disabled = false;
    if (dataProperty.countHouses == 4) {
        buttonBuy[dataProperty.countHouses + 1].backgroundColor = 'red';
    }
    buttonH = representationProperty.getElementsByClassName('buttonHouse');
    buttonH[dataProperty.countHouses].style.opacity = '0.99';
}

/***** variables de la jugada actual *****/


/**** funcion auxiliar para obtener una propiedad por su id ****/
/*
function getPropertyById(propId){
	
	for (var i = 0; i < properties.length; i++){
		
		if(properties[i].id == propId){
			
			return properties[i];
		}
	}
}*/
/***** inicia juego ***/
function startGame(){
	var button = document.getElementById("startButton");
	button.style.display = "none";
	console.log("bebes jugadores " + activePlayers[0]);
	currentPlayer = activePlayers[0];
	console.log("currrrent" + currentPlayer.position);
	alert("Comencemos a jugar. Empieza el turno de" + currentPlayer.name );
	addingPlayers = false;

}

/**** funcion auxiliar para obtener una propiedad por su id ****/

function getPropertyById(propId) {

    for (var i = 0; i < properties.length; i++) {

        if (properties[i].id == propId) {

            return properties[i];
        }
    }
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
	console.log("current" + currentPlayer);
	movePlayer(randomNumber);
	return randomNumber; 

}


/***** mover jugadores *****/

function movePlayer(numberOfCells){
	//console.log("jugador tosty" + player);
	var playerPos = currentPlayer.position;
	console.log(currentPlayer.position);
	var actualPosition = properties[playerPos];
	console.log(actualPosition);
	for (var i = 0; i < numberOfCells; i++){
		
		moveNext(currentPlayer, actualPosition.nextDirection);
		actualPosition = properties[actualPosition.nextPropId];
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

/** funcion enableStartButton, se llama cuando se han agregado 2 o mas jugadores y permite que el juego empiece **/
function enableStartButton(){
	
	var startButton = document.createElement('button');
	startButton.setAttribute("id","startButton" );
	startButton.onclick = startGame;
	startButton.value = "Iniciar juego";
	var up = document.getElementById("upperSpace");
	up.appendChild(startButton);
	startButton.style.top = "50%";
	startButton.style.left="50%";
}



fillProperties();
fillBoard();
