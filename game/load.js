Game.Load = function(game){}

Game.Load.prototype = {
	preload: function(){
	},
	update: function(){

	},
	create: async function(){
		//game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		game.scale.setScreenSize();
		let res = await fetch("http://ahmedjannadi.tk:8080/api/questions")
		let data = await res.json()
		Game.questions = await JSON.parse(data)
		game.state.start("Play")
	},
}
