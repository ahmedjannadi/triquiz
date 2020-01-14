Game.Play = function(game){}
Game.Play.prototype = {
	create: function() {
		this.questionCounter=0
		this.spawnQuestion()
		let timer = game.time.create(false)
		timer.loop(10000,this.spawnQuestion, this)
		timer.start()
	},
	update: function() {
		this.test.y += 2
	},

	spawnQuestion: function() {
		this.test = game.add.text(100,100,Game.questions[this.questionCounter++].fields.title,{font: "bold 20px Verdana"})
		this.test.addColor("#fff",0);
	}
}
