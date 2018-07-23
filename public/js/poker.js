var suits = [s, c, h, d];
var deck = [];
var hand = [];
var handValue;

for (var i = 0; i <= 51; i++) {
	var x = 0;
	deck.push([i]+suits[x])
	if (x == suits.length) {
		x = 0;
	}
}

function draw () {
	for (var i = 0; i <= 4; i++){
		var drawnCard = deck[Math.floor(Math.random()*deck.length)];
		hand.push(dawnCard);
	}
	if (hand.includes(51d) && hand.includes(50d) && hand.includes(49d) && hand.includes(48d) && hand.includes(47d)) {
		var handValue = 10;
		console.log("Royal Flush!")
	}
}