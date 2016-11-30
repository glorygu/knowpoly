var enter = document.getElementById("enter");
var enterOffset = getOffset(enter);
var activePlayers = [];
var availableColors = ["red","yellow","green","blue"];
function getOffset(el) {
  el = el.getBoundingClientRect();
  console.log("enter top" +  el.top + window.scrollY + " enter left " +  el.left + window.scrollX);
  return {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY, 
	height: el.height,
	width: el.width
	
  }
}
function placePlayer(playerIndex, color){
    var img = document.createElement('img');
    img.src = "img/"+color+".png";
    var imgHeight =  Math.floor(enter.offsetHeight/5);
    var imgWidth = Math.floor(enter.offsetWidth/3);
            // Position the image, CSS must specify 'position:absolute' for img
   
    img.setAttribute("height",imgHeight+"px");
    img.setAttribute("width",imgWidth+"px");
    img.setAttribute("id",color); 
    img.style.top = (enter.offsetParent.offsetTop+(imgHeight*(activePlayers.length-1))) + 'px';
    img.style.left = (enter.offsetParent.offsetLeft+imgWidth) + 'px';
    activePlayers[playerIndex].img = img;
    activePlayers[playerIndex].top = 10-(enter.offsetParent.offsetTop+(imgHeight*activePlayers.length));
    activePlayers[playerIndex].left = (enter.offsetParent.offsetLeft); 
    console.log("ficha # "+activePlayers.length+" top " + img.style.top  +"left " +img.style.left);
    // When user clicks this image, replace it for a popped image
    //img.onclick = popBubble;

    // Insert the new image as child of the game area
    enter.appendChild(img);
     
    console.log("w"+imgWidth+"h"+imgHeight);
    console.log(img);
}


function addPlayer(playerNumber){
    console.log(enter);
    var player = {};
    player.number = playerNumber;   
    player.name = prompt("Please enter your name", "Harry Potter");
    var playerDiv = document.getElementById("name"+playerNumber);
    playerDiv.innerHTML = player.name;
    activePlayers.push(player);
    placePlayer(activePlayers.length-1,availableColors.pop());
    
}


function moveFullBoard(){
    
    var player = activePlayers[activePlayers.length-1];
    moveRight(player,5);
    moveDown(player,3);
    moveLeft(player,5);
    moveUp(player,3);
}

function move( ){
    var player = activePlayers[activePlayers.length-1];
    moveRight(player,5);
    moveDown(player,4);
    
    
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

