Game.Load = function(game){}

Game.Load.prototype = {
	preload: function(){
		this.text = game.add.text(Game.WIDTH/2,Game.HEIGHT/2,"Loading...");
		this.text.anchor.setTo(0.5,0.5);

		game.load.image("bg","assets/img/bg.png") // Background image
		game.load.audio("bgm","assets/bgm/bgm.mp3") // Background music
		game.load.audio("hit","assets/snd/hit.wav") // Hit sound
		game.load.audio("death","assets/snd/death.wav") // Hit sound
		game.scale.setScreenSize()
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
	},
	update: function(){

	},
	create: async function(){
		let res = await fetch(Game.API+"/api/questions")
		let data = await res.json()
		Game.questions = await JSON.parse(data)
		this.bgm = game.add.audio("bgm")
		this.bgm.loopFull()

		game.state.start("Menu")
	},
}
