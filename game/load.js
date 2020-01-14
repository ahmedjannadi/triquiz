Game.Load = function(game){}

Game.Load.prototype = {
	preload: async function(){
		this.questions = await fetch("http://ahmedjannadi.tk:8080/api/questions")
		console.log(this.questions)
	},
	update: function(){

	},
	create: function(){
		game.state.start("Play")
		//game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		game.scale.setScreenSize();
	},
}
