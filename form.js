var player1;
var player2;



$("#mango1").click( function () {
  player1 = orcB;
  console.log(player1.health)
  console.log(player2)
});

$("#walrus1").click( function () {
  player1 = orcA;
  console.log(player1.health)
});

$("#mango2").click( function () {
  player2 = orcB;
  console.log(player2.health)
});

$("#walrus2").click( function () {
  player2 = orcA;
  console.log(player2.health)
});

$("#fight-button").click( function () {
  if (player1 === undefined  || player2 === undefined) {
    return alert("please select a player");
  }
 fight(player1, player1, player2.health, player2.health);
});
