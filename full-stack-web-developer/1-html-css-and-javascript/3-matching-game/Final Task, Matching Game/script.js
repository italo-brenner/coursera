numberOfFaces = 0;
theLeftSide = null;
theRightSide = null;
theBody = null;

function initGame() {
  theBody = document.getElementsByTagName("body")[0];
  theLeftSide = document.getElementById("leftSide");
  theRightSide = document.getElementById("rightSide");
  numberOfFaces = 5;
  doGame();
}

function doGame() {
  generateFaces();
  theLeftSide.lastChild.onclick = function nextLevel(event) {
    event.stopPropagation();
    numberOfFaces += 5;
    cleanImages();
    doGame();
  };
  theBody.onclick = function gameOver() {
    alert("Game Over!");
    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
    numberOfFaces = 5;
    cleanImages();
    doGame();
  };
}

function cleanImages() {
  while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.firstChild);
  }
  while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.firstChild);
  }
}

function generateFaces() {
  for (var i = 0; i < numberOfFaces; i++) {
    var img = document.createElement("img");
    img.src = "smile.png";
    var randomTop = Math.floor(Math.random() * 400);
    var randomLeft = Math.floor(Math.random() * 400);
    img.style.top = randomTop + "px";
    img.style.left = randomLeft + "px";
    theLeftSide.appendChild(img);
  }
  var leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages);
}
