Game.Play = function(game){}
Game.Play.prototype = {
	create: function() {
		// background stuff
		this.bg = game.add.tileSprite(Game.WIDTH / 2,Game.HEIGHT / 2,Game.WIDTH,Game.HEIGHT,"bg") // Background repeating sprite
		this.bg.anchor.setTo(0.5)
		this.bg.angle = 15
		this.bg.scale.setTo(2)

		this.initAnswers()

		this.questionCounter=0
		this.spawnQuestion()

		this.hintText = game.add.text(Game.WIDTH / 2, Game.HEIGHT / 2, "Press 1 or 2 or 3 to answers", Game.ANSWERS_STYLE)
		this.hintText.anchor.setTo(0.5)

		// Input handeling
		this.initInput()

	},
	update: function() {
		this.currentQuestionText.y += Game.SPEED
		this.bg.tilePosition.x -= Game.BACKGROUND_SPEED
	},

	spawnQuestion: function() {
		this.setAnswer(this.questionCounter)
		this.currentQuestionText = game.add.text(Game.WIDTH / 2,-100,Game.questions[this.questionCounter++].fields.title,Game.QUESTIONS_STYLE)
		this.currentQuestionText.anchor.setTo(0.5,0.5)
	},

	setAnswer: function(id) {
		this.questionAnswer1 = Game.questions[id].fields.rep1
		this.questionAnswer2 = Game.questions[id].fields.rep2
		this.questionAnswer3 = Game.questions[id].fields.rep3

		this.answerText1.text = this.questionAnswer1
		this.answerText2.text = this.questionAnswer2
		this.answerText3.text = this.questionAnswer3
	},

	initAnswers: function() {
		this.answerText1 = game.add.text(20, Game.HEIGHT / 2 + 400, "Rep1", Game.ANSWERS_STYLE)
		this.answerText2 = game.add.text(20, Game.HEIGHT / 2 + 500, "Rep2", Game.ANSWERS_STYLE)
		this.answerText3 = game.add.text(20, Game.HEIGHT / 2 + 600, "Rep3", Game.ANSWERS_STYLE)
		
		this.answerText1.anchor.setTo(0,0.5)
		this.answerText2.anchor.setTo(0,0.5)
		this.answerText3.anchor.setTo(0,0.5)
	},

	answerFirstAnswer: function() {
		this.currentQuestionText.kill()
		this.spawnQuestion()
	},

	answerSecondAnswer: function() {
		alert(2)
	},

	answerThirdAnswer: function() {
		alert(3)
	},

	initInput: function() {
		this.key1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE)
		this.key2 = game.input.keyboard.addKey(Phaser.Keyboard.TWO)
		this.key3 = game.input.keyboard.addKey(Phaser.Keyboard.THREE)
		this.key1.onDown.add(this.answerFirstAnswer, this)
		this.key2.onDown.add(this.answerSecondAnswer, this)
		this.key3.onDown.add(this.answerThirdAnswer, this)
	},
}
