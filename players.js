//create two objects
var player1 = { name: "Fred", score: 10000, rank: 1};
var player2 = { name: "Sam", score: 10000000, rank: 5};

function playerDetails(){
	//display information about eac player
	console.log(this.name + "has a rank of: " + this.rank + " and a score of " = this.score);
}
player1.logDetails = playerDetails;
player2.logDetails = playerDetails;

player1.logDetails();
player2.logDetails();

// or:
// function playerDetails (player) {

// console.log(player.name + "has a rank of" + player.rank + "and a score of" + player.score);

// };

// playerDetails(player1);
// playerDetails(player2);