Game.Load = function(game){}

Game.Load.prototype = {
	preload: function(){
		game.load.image("bg","assets/img/bg.png") // Background image
		game.scale.setScreenSize()
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
	},
	update: function(){

	},
	create: async function(){
		let res = await fetch(Game.API+"/api/questions")
		let data = await res.json()
		Game.questions = await JSON.parse(data)

		game.state.start("Menu")
	},
}
