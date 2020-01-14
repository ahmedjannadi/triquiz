Game.Play = function(game){}
var a
Game.Play.prototype = {
	create: function() {
		
		this.test = game.add.text(100,100,"testing")
		this.test.addColor("#fff",0);
	},
	update: function() {
		this.test.y += 2
	},
}
