var playerOneSelect = document.getElementsByName('player1');
var playerOne;
for(i = 0; i < playerOneSelect.length; i++){
    if(playerOneSelect[i].checked){
        playerOne = playerOneSelect[i].value;
    }
};

var playerTwoSelect = document.getElementsByName('player2');
var playerTwo;
for(i = 0; i < playerTwoSelect.length; i++){
    if(playerTwoSelect[i].checked){
        playerTwo = playerTwoSelect[i].value;
    }
};

var orcA = {
   name: "Walrus",
   strength: 10,
   specialMoveOne: "mustache-grinds",
   superSpecialMove: "administers an ULTRA-INVASIVE TUSK PROCEDURE on",
   onDeathPhrase: "",
   health: 140
};

var orcB = {
   name: "Mango",
   strength: 15,
   specialMoveOne: "sticky-punches",
   superSpecialMove: "DANCES FURIOUSLY upon",
   health: 100
};



var fight = function(orcA, orcB, healthA, healthB) {
  var randomA = Math.random();
  if (randomA < 0.2) {
    healthA = healthA - orcB.strength*2;
    console.log(orcB.name + " " + orcB.superSpecialMove + " " + orcA.name + "! Health at" + " " + healthA);
  }
  else if (randomA < 0.8) {
    healthA = healthA - orcB.strength;
    console.log(orcB.name + " " + orcB.specialMoveOne + " " + orcA.name + "! Health at" + " " + healthA);
  }
  else {
    console.log(orcB.name + " missed!");
  }
    if(healthA <= 0) {
    return orcA.name + " has been defeated.  " + orcB.name + ", FINISH HIM!";
  }
  var randomB = Math.random();
  if (randomB < 0.2) {
  healthB = healthB - orcA.strength*2;
  console.log(orcA.name + " " + orcA.superSpecialMove + " " + orcB.name + "!" + " " + orcB.name + "'s" + " health is now at" + " " + healthB);
  }
  else if (randomB < 0.8){
    healthB = healthB - orcA.strength;
    console.log(orcA.name + " " + orcA.specialMoveOne + " " + orcB.name + "!  Health at" + " " + healthB);
  }
  else {
        console.log(orcA.name + " missed!");
  }
  if (healthB <= 0) {
    return orcB.name + " is crying, A LOT.";
  }
  else {
    return fight(orcA, orcB, healthA, healthB);
  }
};

var fightLog = document.getElementById('div');


console.log(fight(orcA, orcB, orcA.health, orcB.health));
console.log(playerOne);
