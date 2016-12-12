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
var activePlayer = {};

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
        if (this.activePlayers[p].number == this.activePlayer["number"]) { //When we find our player
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
						updateLiquidCash(updatedCash, this.activePlayer["number"]);
						updateRichness(updatedRichness, this.activePlayer["number"]);
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
    this.owner = -1;
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


//metodo para llenar los datos de cada propiedad
function fillProperties() {
    var enter = new Property('enter', 'enter', 'Costa Rica', 'right', 'property1', 'url(img/img_costa_rica.jpg)');
    var property1 = new Property('property', 'property1', 'Avenida Central', 'right', 'property2', 'url(img/av_central2.jpg)', 50, 45, 50, 25, 05, 15, 45, 125, 250, 400);
    this.properties['enter'] = enter;
    this.properties['property1'] = property1;

    var property2 = new Property('property', 'property2', 'Volcán Arenal', 'right', 'property3', 'url(img/costaRica2.jpg)', 60, 55, 50, 25, 06, 20, 55, 150, 300, 480);
    this.properties['property2'] = property2;



    var property3 = new Property('property', 'property3', 'Teatro Nacional', 'right', 'property4', 'url(img/costaRica3.jpg)', 75, 70, 75, 40, 08, 25, 70, 200, 400, 640);
    this.properties['property3'] = property3;



    var property4 = new Property('property', 'property4', 'Zarcero', 'right', 'hotChair1', 'url(img/costaRica4.jpg)', 85, 75, 75, 40, 09, 25, 80, 225, 450, 720);
    this.properties['property4'] = property4;

    var hotChair1 = new Property('hotChair', 'hotChair1', 'Silla Caliente', 'down', 'property6');
    this.properties['hotChair1'] = hotChair1;
    var property5 = new Property('property', 'property5', 'Esferas de Costa Rica', 'up', 'enter', 'url(img/costaRica5.jpg)', 105, 95, 100, 50, 11, 35, 100, 275, 550, 880);
    this.properties['property5'] = property5;



    var property6 = new Property('property', 'property6', 'Museo de los niños', 'down', 'property8', 'url(img/costaRica6.jpg)', 115, 105, 100, 50, 12, 35, 110, 300, 600, 960);
    this.properties['property6'] = property6;



    var property7 = new Property('property', 'property7', 'Universidad de Costa Rica', 'up', 'property5', 'url(img/costaRica7.jpg)', 135, 120, 150, 75, 15, 45, 135, 375, 750, 1200);
    this.properties['property7'] = property7;



    var property8 = new Property('property', 'property8', 'Estadio Nacional', 'down', 'cave', 'url(img/costaRica8.jpg)', 145, 130, 150, 75, 16, 50, 145, 400, 800, 1280);
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

    var property12 = new Property('property', 'property12', 'Cerro Chirripó', 'left', 'property11', 'url(img/costaRica12.jpg)', 200, 180, 200, 100, 25, 75, 225, 625, 1250, 2000);


    this.properties['property12'] = property12;



}


/**
	Funcion para llenar el tablero, se va colocando los datos, botones, imagenes de cada propiedad en el documento HTML
*/
function fillBoard() {
    var mainDiv = document.getElementById('board');
    var elements = mainDiv.childNodes;
    var index = 0;
    var bodyDiv;
    var element;
    var button;
    var txt, header, bodyDiv, buttonDiv;
    while (index < elements.length) {
        element = elements[index];
        if (this.properties.hasOwnProperty(element.id) == true) {
			//preguntar si es una propiedad para colocar los elementos caracteristicos de una propiedad
            if (this.properties[element.id].type == 'property') {
                button = document.createElement('button');
                txt = document.createTextNode(this.properties[element.id].propertyBuy);
                button.className = 'propertyBuy';
                button.disabled = true;
				button.setAttribute("onClick", "buyProperty()"); //se coloca el metodo de compra de propiedad.
                button.appendChild(txt);
                header = element.getElementsByClassName('header');
                header[0].appendChild(button);
                button = document.createElement('button');
                txt = document.createTextNode(this.properties[element.id].propertySell);
                button.className = 'propertySell';
                button.setAttribute("onClick","sellProperty.call(this)");
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
    //putStatusButton();
}


//dibujar la parte inferior de la tabla que tiene cada propiedad
function drawBottomTable(element) {
    var buttonDiv = element.getElementsByClassName('bottom');
    var txt, button;
    for (var c = 0; c < 6; ++c) {
        button = document.createElement('button');
        button.disabled = true;
        button.className = 'btnActionHouse';
	    	button.onclick = createBuilding; //metodo para construir casas en las propiedades
        button.setAttribute("onClick","sellConstruction.call(this)");

        txt = document.createTextNode(this.properties[element.id].houseBuy);
        button.appendChild(txt);
        buttonDiv[0].appendChild(button);

    }
    for (var i = 0; i < 6; ++i) {
        var string = 'h' + i;
        button = document.createElement('button');
        button.disabled = true;
        button.className = 'btnLodgement';
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
	var alreadyExists = playerExists(playerNumber); //pregunta si ya existe el jugador
	if(!alreadyExists){
		if (addingPlayers){ //pregunta que si se estan añadiendo jugadores
			if(activePlayers.length < 4){ //pregunta q hayan menos de 4 jugadores
				var name = prompt("Por favor ingrese el nombre para el jugador "+playerNumber); //pide nombre
				if (name != null){

					var player = {};
					player.name = name;
					player.number = playerNumber;


					player.liquidCash = 800;
					player.richness = 800;
					player.indebtedness = 0;
					player.debtOwner = -1;
					document.getElementById("name"+playerNumber).innerHTML = player.name + "<p id=\"player"+playerNumber+"Cash\">" + player.liquidCash + "</p>/" +  "<p id=\"player"+playerNumber+"Richness\">" + player.richness +"</p>";

	 				player.position = "enter";
	 				//var imgHeight =  Math.floor(enter.offsetHeight/5);
	     			//var imgWidth = Math.floor(enter.offsetWidth/3);
	     			player.top = 0;//(enter.offsetParent.offsetTop+(imgHeight*this.activePlayers.length));
	     			player.left = 40;//(enter.offsetParent.offsetLeft);
	 				player.color=colors[playerNumber-1];
	 				player.ownedProperties = new Array();
	 				player.index = activePlayers.length;
	 				console.log(player.index);
	 				activePlayers.push(player);
	 				placePlayer(player);
	 				//loadColorSelector(player.name);
                    console.log(activePlayers.length);
	 				if(activePlayers.length==2)
	 				{//si hay mas de dos jugadores
                        console.log("entrando a start");
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


//metodo para decidir que hacer al caer en una propiedad
function fallBox() {


    //this.activePlayer.position = 'property1';
    var representationProperty = document.getElementById(this.activePlayer.position);
    var dataProperty = this.properties[this.activePlayer.position];
    var button;

	//preguntar si la propiedad fue vendida
    if (dataProperty.isSold == false) {
        
	
            if (activePlayer.liquidCash > dataProperty.propertyBuy) {
                //alert(activePlayer.name + " ha comprado la propiedad " + dataProperty.name);
                button = representationProperty.getElementsByClassName('propertyBuy');
                button[0].style.opacity = '0.99';
                button[0].disabled = false;
                //buttonBuyProperty.style.display = "none";
            }
        //}
    } else {
        selectAction();
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

function sellConstruction(){
    //Get  positioned property id
    var propertyId = this.parentNode.parentNode.id; //From HTML
    var propertyBottonDiv = this.parentNode;
    var saleAmount = window.properties[propertyId].houseSell;//Cost of selling a house
    var buyAmount = window.properties[propertyId].houseBuy;//Cost of selling a house

    //change from sale amount to buy amount
    this.innerHTML = buyAmount;
    //Get next sibbling to change its enable status.
    //CHECK IF SIBBLING EXISTS
    var nextButton =this.nextSibling;


}

/*If it's my turn, I can sell any property I have. Doesn't matter if the
property I intent to sell is not the same as the one Im positioned*/
function sellProperty(){
    // Prompt a message of confirmation
    //REMOVEREMOVE REMOVE REMOVEREMOVE
      activePlayer=window.activePlayers[0];
    //REMOVE REMOVE REMOVE
    var cfm = confirm("¿Desea vender esta propiedad?");
    if(cfm){
        var propertyId = this.parentNode.parentNode.id; //From HTML
        var propertyHeaderDiv = this.parentNode;
        var saleAmount = window.properties[propertyId].propertySell;//Cost of selling property
        //Update  active Player's money
        for(var p in window.activePlayers){
            if(window.activePlayers[p].number == window.activePlayer.number ){ //Finde the activePlayer in my activePLayers Array
              window.activePlayers[p].liquidCash += saleAmount;
            }
        }
        //mark property as bank's
        window.properties[propertyId].owner = "Bank";
        window.properties[propertyId].isSold = false;

        //Get sell and buy element (buttons) to update them
        var buyButton = propertyHeaderDiv.getElementsByClassName('propertyBuy');
        var sellButton = propertyHeaderDiv.getElementsByClassName('propertySell');
        //We must disable the sell button and paint the header gray.

        sellButton[0].style.opacity='0.30';
        sellButton[0].disabled=true;
        propertyHeaderDiv.backgroundColor="gray";
        //Me must enable the buy button if player has enough money
        if(activePlayer.liquidCash > saleAmount){
          buyButton[0].style.opacity='1';
          buyButton[0].disabled=false;

        }else{
          buyButton[0].style.opacity='0.30';
          buyButton[0].disabled=true;
        }

    }

    //VER SI SE RESTA RICHNESS O SUMA VER VER VER VER VER VER VER
    updateLiquidCash(  window.activePlayers[p].liquidCash,window.activePlayer.number);
    verifyIndebtedness();
}
function buyProperty(){


	if(this.properties.hasOwnProperty(this.activePlayer.position) == true){
		var property = this.properties[this.activePlayer.position];
		if(this.activePlayer.liquidCash > property.propertyBuy){
			var representationProperty = document.getElementById(this.activePlayer.position);
			var button = representationProperty.getElementsByClassName('propertyBuy');
			button[0].style.opacity = '0.30';
			button[0].disabled = 'true';
			var div = representationProperty.getElementsByTagName('div');
			for(var c = 0; c < div.length; ++c){
				div[c].style.backgroundColor = this.activePlayer.color;
			}
			this.properties[this.activePlayer.position].isSold = true;
			this.properties[this.activePlayer.position].owner = this.activePlayer.number;
			this.activePlayer.ownedProperties.push(this.activePlayer.position);
			this.activePlayer.liquidCash -= property.propertyBuy;
			this.activePlayer.richness -= property.propertyBuy;
			this.activePlayer.richness += property.propertySell;
			paintProperties();
			updateLiquidCash(this.activePlayer.liquidCash, this.activePlayer.number);
			updateRichness(this.activePlayer.richness, this.activePlayer.number);
		}

	}


}


//metodo para determinar si la propiedad le pertenece a otro jugador, en esa caso se debe pagar hospedaje.
function selectAction(){

	if(this.properties.hasOwnProperty(this.activePlayer.position) == true){
		var property = this.properties[this.activePlayer.position];
		if(property.owner != this.activePlayer.number){
			payLodgement();
		}
	}
		paintProperties();
}

//pagar hospedaje
function payLodgement(){

	var property = this.properties[this.activePlayer.position];
	var lodgement = 'h' + property.countHouses;

	
	if(this.activePlayer.liquidCash < property[lodgement]){
	
		alert("Necesita efectivo para pagar el hospedaje. Tiene que vender");
		
		this.activePlayer.indebtedness = property[lodgement];
		this.activePlayer.debtOwner = property.owner;
		verifyRichness();
		//this.activePlayer.debtOwner = proper
		//verificar si puede vender
		

	}else{

		this.activePlayer.liquidCash -= property[lodgement];
		this.activePlayer.richness -= property[lodgement];
		var indicator = false;
		var index = 0;
		var idPlayer = "";
		var cash = 0;

		while(index < this.activePlayers.length && indicator == false){
			if(this.activePlayers[index].number == property.owner){
				cash = property[lodgement] + this.activePlayers[index].liquidCash;
				indicator = true;
				updateLiquidCash(cash,  this.activePlayers[index]);
				updateRichness(property[lodgement]+this.activePlayers[index].richness, this.activePlayers[index]);
			}
			++index;
		}
		updateLiquidCash(this.activePlayer.liquidCash, this.activePlayer);
		updateRichness(this.activePlayer.richness, this.activePlayer);
	}
}



//metodo para poder pintar las propiedad  del lugar que tiene el turno
function paintProperties() {


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
        paintLodgementPart(representationProperty, dataProperty);
    }
}


//pintar botones compra de casas y monto de hospedaje en la tabla inferior de cada propiedad
function paintLodgementPart(representationProperty, dataProperty) {
    var buttonBuy = representationProperty.getElementsByClassName('btnActionHouse');
	var buttonLodgement;
	if(dataProperty.countHouses == 0){
		buttonBuy[dataProperty.countHouses].style.opacity = '0.30';
        buttonBuy[dataProperty.countHouses].disabled = true;
		buttonBuy[dataProperty.countHouses].innerText = dataProperty.houseSell;
		buttonBuy[dataProperty.countHouses].style.textDecoration = 'line-through';
		buttonBuy[dataProperty.countHouses+1].style.opacity = '0.99';
        buttonBuy[dataProperty.countHouses+1].disabled = false;
		buttonLodgement = representationProperty.getElementsByClassName('btnLodgement');
		buttonLodgement[dataProperty.countHouses].style.opacity = '0.99';
	}else{
		buttonLodgement = representationProperty.getElementsByClassName('btnLodgement');
		buttonLodgement[dataProperty.countHouses].style.opacity = '0.99';
		buttonBuy[dataProperty.countHouses].style.opacity = '0.99';
        buttonBuy[dataProperty.countHouses].disabled = false;
		buttonBuy[dataProperty.countHouses].onclick = sellProperty; /////////////////////////////////////////////////////////////////////////////////////////////////////////////JOEL AQUI DEBE COLOCAR EL NOMBRE DEL METODO PARA VENDER CASA
		buttonBuy[dataProperty.countHouses].innerText = dataProperty.houseSell;
		buttonBuy[dataProperty.countHouses].style.textDecoration = 'line-through';
		buttonBuy[dataProperty.countHouses+1].style.opacity = '0.99';
        buttonBuy[dataProperty.countHouses+1].disabled = false;
		buttonLodgement[dataProperty.countHouses-1].style.opacity = '0.30';
		buttonBuy[dataProperty.countHouses-1].style.opacity = '0.30';
        buttonBuy[dataProperty.countHouses-1].disabled = true;
	}
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

	activePlayer = activePlayers[0];
	console.log("currrrent" + activePlayer.position);
	alert("Comencemos a jugar. Empieza el turno de" + activePlayer.name );

	addingPlayers = false;
	showDice();
	//enableDiceRoll();

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
	console.log("current" + activePlayer);
	movePlayer(randomNumber);
	return randomNumber;

}


/***** mover jugadores *****/

function movePlayer(numberOfCells){
	//console.log("jugador tosty" + player);
	var playerPos = activePlayer.position;
	console.log(activePlayer.position);
	var actualPosition = properties[playerPos];
	console.log(actualPosition);
	for (var i = 0; i < numberOfCells; i++){

		moveNext(activePlayer, actualPosition.nextDirection);
		actualPosition = properties[actualPosition.nextPropId];
		    
		
	}
	activePlayer.position = actualPosition.id;
	//addTokenOnProperty();
    fallBox();
}

/***** funcion que permite que el jugador (activo) se mueva una casilla y se mueve en la direccion indicada por la posicion en la que esta***/
function moveNext(player, direction){
    var cellCS = getComputedStyle(enter, null);
    //TODO cambiar por porcentajes
	switch(direction){



		case 'right': 
			player.left += 100;//cellCS.width;//enter.offsetWidth; //le aumenta al left actual el tamano de la celda

	        player.img.style.left = (player.left)+"%";
	        player.img.style.transitionDuration = "1s";
        break;

        case 'left':
        	player.left -=100; //le quita al left actual el tamano de la celda
	        player.img.style.left = (player.left)+"%";



	        player.img.style.transitionDuration = "1s";
        break;
        case 'up':
        	player.top -= 100;
        	player.img.style.top = (player.top)+"%";
        	player.img.style.transitionDuration = "1s";
    	break;
    	case 'down':
    		player.top += 100;
        	player.img.style.top = (player.top)+"%";
        	player.img.style.transitionDuration = "1s";
		break;

	}


}


//function para construir en propiedades
function createBuilding(){

	var dataProperty = window.properties[this.parentNode.parentNode.id];
	var container = this.parentNode;
	var houses = dataProperty.countHouses;
	var topButtons, downButtons;
	topButtons = container.getElementsByClassName('btnActionHouse');
	downButtons = container.getElementsByClassName('btnLodgement');
	if(dataProperty.countHouses < 5 && window.activePlayer.liquidCash > dataProperty.houseBuy){
		window.activePlayer.liquidCash -= dataProperty.houseBuy;
		window.activePlayer.richness -= dataProperty.houseBuy;
		window.activePlayer.richness += dataProperty.houseSell;
		++window.properties[this.parentNode.parentNode.id].countHouses;
		paintLodgementPart(this.parentNode.parentNode, dataProperty);
		updateLiquidCash(window.activePlayer.liquidCash, window.activePlayer.number);
		updateRichness(window.activePlayer.richness, window.activePlayer.number);
	}

}

/** funcion enableStartButton, se llama cuando se han agregado 2 o mas jugadores y permite que el juego empiece **/
function enableStartButton(){

	var startButton = document.createElement('button');
	startButton.setAttribute("id","startButton" );
	startButton.onclick = startGame;
	var txt = document.createTextNode("Iniciar juego");
	startButton.appendChild(txt);
	var up = document.getElementById("upperSpace");
	up.appendChild(startButton);
	startButton.style.top = "50%";
	startButton.style.left="50%";

}

//verificar si tiene deudas por pagar
function verifyIndebtedness(){

	if(this.activePlayer.indebtedness != 0){
		if(this.activePlayer.liquidCash > this.activePlayer.indebtedness){
			this.activePlayer.liquidCash -= this.activePlayer.indebtedness;
			this.activePlayer.richness -= this.activePlayer.indebtedness;
			this.activePlayer.indebtedness = 0;
			updateLiquidCash(this.activePlayer.liquidCash, this.activePlayer.number);
			updateRichness(this.activePlayer.richness, this.activePlayer.number);
            enableEndTurnButton();
			alert('Puede seguir jugando, ya no tiene deudas');
			for(var counter = 0; counter < this.activePlayers.length; ++counter){
				//buscar a quién hay que pagar
				if(this.activePlayer.debtOwner == this.activePlayer[counter].number){
					updateLiquidCash(this.activePlayers[counter].liquidCash + this.activePlayer.indebtedness, this.activePlayers[counter].number);
					updateRichness(this.activePlayers[counter].richness + this.activePlayer.indebtedness, this.activePlayers[counter].number);
					this.activePlayer.debtOwner = -1;
				}
			}
		}else{
			alert('Necesita más efectivo');
		}
	} else 
	{
	    enableEndTurnButton();
	}

}

/**** function show dice que permite habilitar el dado ***/

function showDice(){

    var divDiceRoll = document.createElement("div");
    divDiceRoll.id = "diceRoll";
    var divDice = document.createElement("div");
    divDice.id = "dice";
    var diceFace = document.createElement("img");
    diceFace.id = "diceFace";
    diceFace.src = "img/d1.png";
    divDice.appendChild(diceFace);
    divDiceRoll.appendChild(divDice);
    var divCenter = document.createElement("div");
    divCenter.setAttribute("class", "center");
    var button = document.createElement("button");
    button.id = "diceRollButton";
    button.onclick = rollDice;
    button.appendChild(document.createTextNode("Lanzar dado"));
    divCenter.appendChild(button);
    divDiceRoll.appendChild(divCenter);
    var lowerSpace = document.getElementById("lowerSpace");
    lowerSpace.appendChild(divDiceRoll);

}

function enableDiceRoll(){ //muestra el boton de lanzar dado
    var diceRollButton = document.getElementById("diceRollButton");
    diceRollButton.style.display = "initial";
}

function updateActivePlayerIndexes(){
    // funcion que permite actualizar los indices de los jugadores luego de que se elimina un jugador
    for (var i = 0; i < activePlayers.length; i++){
        activePlayers[i].index = i;
    }
}
function removeFromActivePlayers(){
    activePlayer.img.style.display="none";
    var tempActivePlayer = activePlayer;
    if (activePlayers.length >2){
        changeTurn();

    }
    removeFromArray(activePlayers, tempActivePlayer);
    console.log("quedan estos "+ activePlayers.length);
    if (activePlayers.length == 1){
        activePlayer = activePlayers[0];
        console.log("Game over");
        gameOver();
    } else
    {
    updateActivePlayerIndexes();
    }
}

function gameOver(){
    if (activePlayers.length == 1){
        var divGameOver = document.createElement("div");
    	divGameOver.id = "gameOver";
    	var img = document.createElement("img");
    	img.src = "img/gameOver.gif";
    	img.id = "gameOverMsg";
    	divGameOver.appendChild(img);
    	var containerTemp = document.getElementsByClassName("cointainer");
        var container = containerTemp[0];
        var buttonStartOver = document.createElement("button");
        buttonStartOver.id = "startOver";
        buttonStartOver.innerText = "Empezar juego nuevo";
        buttonStartOver.onclick = initialize;
        divGameOver.appendChild(buttonStartOver);
    	container.appendChild(divGameOver);
    	//divGameOver.appendChild(msg);
    }
}

/**
 Funcion que permite habilitar el boton de terminar partida
 **/
function enableEndTurnButton(){
    var button = document.getElementById("endTurn");
    if (button == null){
    button = document.createElement("button");
    button.id = "endTurn";
    button.innerText = "Terminar turno";
    button.onclick=changeTurn;
    upperSpace.appendChild(button);
        
    }
    else 
    {
        button.style.display = "initial";
    }
	//button.style.display = "none";
}


/**
 * Funcion changeTurn que se encarga de pasarle el turno al siguiente jugador, se llama
 * al presionar el boton de terminar turno
 **/
function changeTurn(){
    var button = document.getElementById("endTurn");
   	if(button!=null){
    	button.style.display = "none";
   	}
   	//cambia el activePlayer
   	if(activePlayer.index == activePlayers.length-1 ){
   	    activePlayer = activePlayers[0];
   	} else
   	{
   	    activePlayer = activePlayers[activePlayer.index+1];
   	}
   	enableDiceRoll();
}


function initialize(){
    //inicializacion de variables globales
    activePlayers = [];
    cells = [];
    colors = ["red","green","blue","yellow"];
    addingPlayers = true;
    upperSpace  = document.getElementById("upperSpace");
    enter =  document.getElementById("enter");
    questionsPool = [];
    board = document.getElementById("board");
    properties = {};
    activePlayer = {};

    enterOffset = getOffset(enter);
    cellWidth = enterOffset.width;
    cellHeight = enterOffset.height;

    // llamados para llenar el tablero
    //fillProperties();
    //fillBoard();

}

function addTokenOnProperty(){
    
    var divPosition = document.getElementById(activePlayer.position);
    var children = divPosition.childNodes;
    
    divPosition.appendChild(activePlayer.img);
}


function verifyRichness(){
    if(activePlayer.richness<=0 || activePlayer.indebtness > activePlayer.richness){
        alert(activePlayer.name +" no tiene suficiente riqueza para seguir jugando. Se elimina del juego");
        removeFromActivePlayers();
    }
}
fillProperties();
fillBoard();
//TODO metodo para asegurarse que las propiedades del jugador eliminado pasen a ser del banco

/***
 * 
 * Logica del juego
 * 
 * despues de mover 
 * fallBox
 *      meter caso silla caliente
 * 
 *      meter caso cueva
 * 
 * cambio de turno
 *      deshabilitar propiedades
* cuando se elimina jugador 
*       eliminar propiedades 
* corregir mover 
* corregir updates joel
* 
 * habilitar boton terminar turno
 * 
 * **/