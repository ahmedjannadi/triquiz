Game.Play = function(game){}
Game.Play.prototype = {
	create: function() {

		this.bg = game.add.tileSprite(Game.WIDTH / 2,Game.HEIGHT / 2,Game.WIDTH,Game.HEIGHT,"bg") // Background repeating sprite
		this.bg.anchor.setTo(0.5)
		this.bg.angle = 15
		this.bg.scale.setTo(2)

		this.questionCounter=0
		this.spawnQuestion()
		let timer = game.time.create(false)
		timer.loop(10000,this.spawnQuestion, this)
		timer.start()
	},
	update: function() {
		this.test.y += Game.SPEED
		this.bg.tilePosition.x -= Game.BACKGROUND_SPEED
	},

	spawnQuestion: function() {
		this.test = game.add.text(Game.WIDTH / 2,100,Game.questions[this.questionCounter++].fields.title,{font: "bold 20px Verdana"})
		this.test.anchor.setTo(0.5,0.5)
		this.test.addColor("#fff",0);
	}
}
